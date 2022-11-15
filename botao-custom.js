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