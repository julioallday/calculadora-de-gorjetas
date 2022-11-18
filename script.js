let el_bill;
let el_pessoas;
let el_porcentagem;
let el_total_geral;
let totalPorPessoa;
let el_gorjetaPessoa;
let el_botaoPorcentagem;
let usuarioClicou = false;
let el_botaoPorcentagemCustom;
let resultado;
let resultadoGorjeta;

let propBotao = [
  {
    id: "botao-gorjeta",
    type: "button",
    class:
      "fonte-input texto-branco fundo-cinza-escuro fundo-verde-claro border borda-arredondada-botao altura-botoes col-5 py-0 px-0 my-2",
  },
  {
    id: "botao-gorjeta-custom",
    type: "button",
    class:
      "texto-cinza-claro fundo-cinza-claro fonte-input fundo-verde-claro border borda-arredondada-botao altura-botoes col-5 py-0 py-0 p-0 my-2",
  },
  {
    id: "botao-gorjeta-custom",
    type: "input",
    class:
      "texto-cinza-claro fundo-cinza-claro fonte-input fundo-verde-claro borda-arredondada-botao altura-botoes col-5 py-0 py-0  px-0 my-2",
  },
];
async function mapBotoesList() {
  const botoes = [
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
  return botoes;
}

async function mostraBotao(array) {
  array.map((element, index) => {
    if (index < 5) {
      let el_divBotoes = document.getElementById("botoes");
      let el_botaoPorcentagem = document.createElement("button");
      let dados = array[index].nome;
      el_divBotoes.appendChild(el_botaoPorcentagem);
      el_botaoPorcentagem.id = array[index].name;
      el_botaoPorcentagem.type = array[index].type;
      el_botaoPorcentagem.setAttribute("class", array[index].class);
      el_botaoPorcentagem.setAttribute(
        "onclick",
        "atualizaDados(" + dados + ")"
      );
      el_botaoPorcentagem.innerText = array[index].nome + "%";
    } else {
      let props = propBotao[1];
      let nome = array[index].nome;
      let el_botaoPorcentagem = document.createElement("button");
      let el_divBotoes = document.getElementById("botoes");
      el_divBotoes.appendChild(el_botaoPorcentagem);
      el_botaoPorcentagem.id = props.id;
      el_botaoPorcentagem.type = props.type;
      el_botaoPorcentagem.setAttribute("class", props.class);
      el_botaoPorcentagem.setAttribute("dir", "rtl");
      el_botaoPorcentagem.setAttribute("value", "%");
      el_botaoPorcentagem.setAttribute("onclick", "transformaBotao()");
      el_botaoPorcentagem.innerText = nome;
    }
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

function transformaBotao() {
  lidarClick();
  if (usuarioClicou) {
    let el_botaoPorcentagem = document.getElementById(propBotao[2].id);
    el_botaoPorcentagem.remove();
    let el_input = document.createElement("input");
    el_input.setAttribute("type", "number");
    el_input.setAttribute("id", propBotao[2].id);
    el_input.setAttribute("class", propBotao[2].class);
    el_input.setAttribute("dir", "rtl");
    el_botaoPorcentagemCustom = document.getElementById(propBotao[2].id);
    el_input.setAttribute(
      "oninput",
      "atualizaDadosCustom()"
    );
    let el_divBotoes = document.getElementById("botoes");
    el_divBotoes.appendChild(el_input);
  }
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

  let totalPuro = parseInt(el_bill.value);
  let gorjeta = totalPuro * (parseInt(percent) / 100);
  let total_geral = totalPuro + gorjeta;
  let isANumber = typeof total_geral;

  totalPorPessoa = total_geral / el_pessoas.value;
  if (isANumber == "number") {
    mostraValores(el_total_geral, parseFloat(totalPorPessoa.toString()));
    mostraValores(el_gorjetaPessoa, parseFloat(gorjeta.toString()));
    resultadoGorjeta = gorjeta;
    resultado = totalPorPessoa;
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

  let totalPuro = parseInt(el_bill.value);
  let isANumber = totalPuro > 0;
  let gorjeta = totalPuro * (parseInt(el_porcentagem.value) / 100);
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

function recarregaPagina() {
  window.location.reload(true);
}

async function main() {
  const botoesList = await mapBotoesList();
  await mostraBotao(botoesList);
}
main();
