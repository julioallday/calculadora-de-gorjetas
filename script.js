let el_bill;
let el_pessoas;
let el_porcentagem;
let el_total_geral;
let totalPorPessoa;
let el_gorjetaPessoa;
let el_botaoPorcentagem;
let usuarioClicou = false;
let el_porcentagemCustom;

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
  {
    id: "botao-gorjeta-custom",
    type: "input",
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
    } else botaoCustom();
  });
}

function lidarClick() {
  switch (usuarioClicou) {
    case true:
      usuarioClicou = !usuarioClicou;
      break;
    case false:
      usuarioClicou = !usuarioClicou;
      break;
  }
  console.log(usuarioClicou);
  return usuarioClicou;
  
}

function botaoCustom() {
  let props = propBotao[1];
  let nome = botoes[5].nome;
  let el_botaoPorcentagem = document.createElement("button");
  let el_divBotoes = document.getElementById("botoes");
  el_divBotoes.appendChild(el_botaoPorcentagem);
  el_botaoPorcentagem.setAttribute("id", props.id);
  el_botaoPorcentagem.setAttribute("type", props.type);
  el_botaoPorcentagem.setAttribute("class", props.class);
  el_botaoPorcentagem.setAttribute("onclick", "transformaBotao()");
  el_botaoPorcentagem.innerText = nome;
}

function transformaBotao() {
  lidarClick();
  if (usuarioClicou){
  let el_botaoPorcentagem = document.getElementById(propBotao[2].id);
  el_botaoPorcentagem.remove();
  let el_input = document.createElement("input");
  el_input.setAttribute("type", "number");
  el_input.setAttribute("id", propBotao[2].id);
  el_input.setAttribute("class", propBotao[2].class);
  el_porcentagemCustom = document.getElementById(propBotao[2].id);
  el_porcentagemCustom = el_input.setAttribute(
    "oninput",
    "atualizaDadosCustom()"
  );
  let el_divBotoes = document.getElementById("botoes");
  el_divBotoes.appendChild(el_input);
  

}
}

function desativaBotao() {
  
}

function atualizaDados(dados) {
  calculaGorjetas(dados);
}
function atualizaDadosCustom() {
  calculaGorjetasCustom();
}

function calculaGorjetas(percent) {
  el_bill = document.getElementById("bill");
  el_bill;
  el_pessoas = document.getElementById("numero-pessoas");
  el_total_geral = document.getElementById("total-geral");
  el_gorjetaPessoa = document.getElementById("gorjeta-pessoa");

  let totalPuro = parseInt(el_bill.value) / parseInt(el_pessoas.value);
  let isANumber = totalPuro > 0;
  let gorjeta = (totalPuro * parseInt(percent)) / 100;
  let total_geral = totalPuro + gorjeta;

  totalPorPessoa = total_geral / el_pessoas.value;
  if (isANumber) {
    mostraValores(el_total_geral, totalPorPessoa);
    mostraValores(el_gorjetaPessoa, gorjeta);
    //   el_total_geral.innerText = totalPorPessoa.toFixed(2);
    //   el_gorjetaPessoa.innerText = gorjeta.toFixed(2);
  }
}
function calculaGorjetasCustom() {
  el_bill = document.getElementById("bill");
  el_bill;
  el_porcentagem = document.getElementById("botao-gorjeta-custom");
  el_pessoas = document.getElementById("numero-pessoas");
  console.log(parseInt(el_porcentagem.value));

  el_total_geral = document.getElementById("total-geral");
  el_gorjetaPessoa = document.getElementById("gorjeta-pessoa");

  let totalPuro = parseInt(el_bill.value) / parseInt(el_pessoas.value);
  let isANumber = totalPuro > 0;
  let gorjeta = (totalPuro * parseInt(el_porcentagem.value)) / 100;
  let total_geral = totalPuro + gorjeta;

  totalPorPessoa = total_geral / el_pessoas.value;
  if (isANumber) {
    mostraValores(el_total_geral, totalPorPessoa);
    mostraValores(el_gorjetaPessoa, gorjeta);
    
  }
}
function mostraValores(valor1, valor2) {
  if (!valor2) {
    return;
  } else {
    valor1.innerText = valor2.toFixed(2);
  }
}
function recarregaPagina(){
  window.location.reload(true);
  
}
