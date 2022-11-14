let el_bill;
let el_pessoas;
let el_porcentagem;
let el_total_geral;
let totalPorPessoa;
let el_gorjetaPessoa;
let el_botaoPorcentagem;
let propBotao = [
  {
    id: "botao-gorjeta",
    type: "button",
    class:
      "fonte-input texto-branco fundo-cinza-escuro altura-botoes col-5 btn py-0 btn-primary px-0 my-2",
  },
  {
    id: "botao-gorjeta-custom",
    type: "button",
    class:
      "texto-cinza-claro fundo-cinza-claro fonte-input altura-botoes col-5 btn py-0 py-0 btn-primary px-0 my-2",
  },
];
let botoes = [
  {
    nome: "5",
    id: propBotao[0].id,
    type: propBotao[0].type,
    class: propBotao[0].class,
  },
  {
    nome: "10",
    id: propBotao[0].id,
    type: propBotao[0].type,
    class: propBotao[0].class,
  },
  {
    nome: "15",
    id: propBotao[0].id,
    type: propBotao[0].type,
    class: propBotao[0].class,
  },
  {
    nome: "25",
    id: propBotao[0].id,
    type: propBotao[0].type,
    class: propBotao[0].class,
  },
  {
    nome: "50",
    id: propBotao[0].id,
    type: propBotao[0].type,
    class: propBotao[0].class,
  },
  {
    nome: "Custom",
    id: propBotao[1].id,
    type: propBotao[1].type,
    class: propBotao[1].class,
  },
];

mostraBotao(botoes);

function mostraBotao(array) {
  array.map((element, index) => {
    if (index < 5) {
      let el_botaoPorcentagem = document.createElement("button");
      let el_divBotoes = document.getElementById("botoes");
      let dados = array[index].nome;
      el_divBotoes.appendChild(el_botaoPorcentagem);
      el_botaoPorcentagem.setAttribute("id", array[index].name);
      el_botaoPorcentagem.setAttribute("type", array[index].type);
      el_botaoPorcentagem.setAttribute("class", array[index].class);

      el_botaoPorcentagem.setAttribute(
        "onclick",
        "atualizaDados(" + dados + ")"
      );
      el_botaoPorcentagem.innerText = array[index].nome + "%";
    } else {
      let el_botaoPorcentagem = document.createElement("button");
      let el_divBotoes = document.getElementById("botoes");
      el_divBotoes.appendChild(el_botaoPorcentagem);
      el_botaoPorcentagem.setAttribute("id", array[index].name);
      el_botaoPorcentagem.setAttribute("type", array[index].type);
      el_botaoPorcentagem.setAttribute("class", array[index].class);
      let dados = array[index].nome;
      el_botaoPorcentagem.setAttribute(
        "onclick",
        "atualizaDados(" + dados + ")"
      );
      el_botaoPorcentagem.innerText = array[index].nome;
    }
  });
}

function atualizaDados(dados) {
  console.log(dados);
  calculaGorjetas(dados);
}

function calculaGorjetas(percent) {
  el_bill = document.getElementById("bill");
  el_bill;
  el_porcentagem = document.getElementById("texto-botao-gorjeta");
  el_pessoas = document.getElementById("numero-pessoas");

  el_total_geral = document.getElementById("total-geral");
  el_gorjetaPessoa = document.getElementById("gorjeta-pessoa");

  let totalPuro = parseInt(el_bill.value) / parseInt(el_pessoas.value);
  let isANumber = totalPuro > 0;
  let gorjeta = (totalPuro * percent) / 100;
  let total_geral = totalPuro + gorjeta;

  totalPorPessoa = total_geral / el_pessoas.value;
  if (isANumber) {
    el_total_geral.innerText = totalPorPessoa.toFixed(2);
    el_gorjetaPessoa.innerText = gorjeta.toFixed(2);
  }
}
