let idPartida;
let jogoAtivo = false;
let tempo = 30;
let pontos = 0;
let habilitado = false;
let ranking = [];
const botaoIniciar = document.getElementsByClassName("iniciar")[0];
// Pombo deve esta dentro do cenario.
// Botao iniciar deve iniciar iniciar a partida.

function gerarPosicao(medida) {
    return Math.random() * medida;
}

function iniciarPartida(){
    if(!jogoAtivo){
        jogoAtivo = true;
        idPartida = setInterval(moverPombo,1000);
        iniciarTemp();
        habilitado = true;
    }
}


function moverPombo(){
    let cenario = document.getElementById("cenarioId");
    let pombo = document.getElementById("icone-pombo");
    
    let limiteLargura = cenario.clientWidth - pombo.offsetWidth;
    let limiteAltura = cenario.clientHeight - pombo.offsetHeight;

    pombo.style.top = gerarPosicao(limiteAltura) +"px";
    pombo.style.left = gerarPosicao(limiteLargura) + "px";
}

// Função para atualizar o ranking.

// Função para definir configurações.
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

//função de contagem regressiva
function iniciarTemp () {
    idContagem = setInterval(() => { 
        if (tempo > 0) {
            tempo--;
            spanTempo.innerText = `Tempo: ${tempo}s`;
        }
        else {
            jogoAtivo = false;
            clearInterval(idContagem);
            clearInterval(idPartida);
            pombo.style.top = 0 +"px";
            pombo.style.left = 0 + "px";
            atualizarRanking(pontos);
            adicionarPontucaoRanking();
            atualizarTempo();
            pontos = 0;
            habilitado = false;
            spanPontos.innerText = `Pontos: ${pontos}`;
        }
    }, 1000);
} 

// fazendo e interronpendo os movimentos do pombo

const botaoParar = document.getElementsByClassName("parar")[0];

botaoParar.addEventListener("click",() => {
    if(jogoAtivo){
        jogoAtivo = false;
        clearInterval(idContagem);
        clearInterval(idPartida);
        atualizarTempo();
        pontos = 0;
        habilitado = false;
        spanPontos.innerText = `Pontos: ${pontos}`;
        pombo.style.top = 0 +"px";
        pombo.style.left = 0 + "px";
    }
})

// Função para exibir interface das configurações.
let interfaceConfig = document.getElementById("interface-config");
const buttonConfig = document.getElementById("button-config");
const buttonClose = document.getElementById("button-close")

buttonConfig.addEventListener("click", () => {
    if (!jogoAtivo){
        interfaceConfig.style.display = "flex"
    }
});

buttonClose.addEventListener("click", () => {
    interfaceConfig.style.display = "none"
});


// Função para ir atualizando os pontos conforme o decorrer da partida.

let pombo = document.getElementById("icone-pombo");
let spanPontos = document.getElementById("pontos");

function incrementarPontos(){
    if(habilitado){
        pontos += 15;
        spanPontos.innerText = `Pontos: ${pontos}`;
    }
}

function decrementarPontos(){
    pontos -= 5;
    if(pontos < 0){
        pontos=0;
    }else{
        spanPontos.innerText = `Pontos: ${pontos}`;
    } 
}

function atualizarRanking(novaPontuacao){
    if (ranking.length < 5) {
        ranking.push(novaPontuacao);
    } else {
        let menorPontuacao = Math.min(...ranking);
        if (novaPontuacao > menorPontuacao) {
            let indiceMenor = ranking.indexOf(menorPontuacao);
            ranking[indiceMenor] = novaPontuacao;
        }
    }
}

function adicionarPontucaoRanking(){
    let listaPontos = document.getElementById("rankingLista");
    
    listaPontos.innerHTML = "";

    for (let i= 0; i < ranking.length ; i++){
        let li = document.createElement("li");
    
        li.textContent = `${ranking[i]} Pontos`;
    
        listaPontos.appendChild(li);
    }
}