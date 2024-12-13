// Pombo deve esta dentro do cenario.
// Botao iniciar deve iniciar iniciar a partida.
let jogoAtivo = false;
let idPartida;
function gerarPosicao(medida) {
    return Math.random() * medida;
}

function moverPombo(){
    let cenario = document.getElementById("cenarioId");
    let pombo = document.getElementById("icone-pombo");
    
    let limiteLargura = cenario.clientWidth - pombo.offsetWidth;
    let limiteAltura = cenario.clientHeight - pombo.offsetHeight;

    pombo.style.top = gerarPosicao(limiteAltura) +"px";
    pombo.style.left = gerarPosicao(limiteLargura) + "px";
}


const botaoIniciar = document.getElementsByClassName("iniciar")[0];

botaoIniciar.addEventListener("click",() => {
    if(!jogoAtivo){
        jogoAtivo = true;
        idPartida = setInterval(moverPombo,1000);
    }
})
const botaoParar = document.getElementsByClassName("parar")[0];

botaoParar.addEventListener("click",() => {
    if(jogoAtivo){
        jogoAtivo = false;
        clearInterval(idPartida)
    }
})

// Função para atualizar o ranking.

// Função para definir configurações.
let tempo = 30;
let spanTempo = document.getElementById("tempo");
spanTempo.innerText = `Tempo: ${tempo}s`;

function atualizarTempo() {
    let spanTempo = document.getElementById("tempo");
    
    let trinta = document.getElementById("trinta");
    let quatroCinco = document.getElementById("quatro-cinco");
    let sessenta = document.getElementById("sessenta");

    if (trinta.checked) {
        tempo = 30;
    } else if (quatroCinco.checked) {
        tempo = 45;
    } else if (sessenta.checked) {
        tempo = 60;
    }

    spanTempo.innerText = `Tempo: ${tempo}s`;
}

//contagem de tempo


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