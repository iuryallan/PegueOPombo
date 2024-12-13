// Pombo deve esta dentro do cenario.
// Botao iniciar deve iniciar iniciar a partida.
// Função para atualizar o ranking.
// Função para atualizar tempo da partida.
// Função para exibir interface das configurações.
let interfaceConfig = document.getElementById("interface-config");
const buttonConfig = document.getElementById("button-config");
const buttonClose = document.getElementById("button-close")

buttonConfig.addEventListener("click", () => {
    interfaceConfig.style.display = "flex"
});

buttonClose.addEventListener("click", () => {
    interfaceConfig.style.display = "none"
});

// Função para definir configurações.
let spanTempo = document.getElementById("tempo");
let tempo = 30;
spanTempo.innerText = `Tempo: ${tempo}s`;


// Função para ir atualizando os pontos conforme o decorrer da partida.

let pombo = document.getElementById("icone-pombo");
let spanPontos = document.getElementById("pontos");
let pontos = 0;

pombo.addEventListener("click", (event) => {
    pontos += 15;
    spanPontos.innerText = `Pontos: ${pontos}`;
    event.stopPropagation();
});

let cenario = document.getElementById("cenarioId");
cenario.addEventListener("click", () => {
    pontos -= 5;
    if(pontos < 0){
        pontos=0;
    }else{
        spanPontos.innerText = `Pontos: ${pontos}`;
    }  
});

// manter as configurações salvas ao sair do jogo(opicional)