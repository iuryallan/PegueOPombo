// Pombo deve esta dentro do cenario.
// Botao iniciar deve iniciar iniciar a partida.
// Função para atualizar o ranking.
// Função para atualizar tempo da partida.
// Função para definir configurações.
// Função para ir atualizando os pontos conforme o decorrer da partida.
let pombo = document.getElementById("icone-pombo");
let spanPontos = document.getElementById("pontos");
let pontos = 0;

pombo.addEventListener("click", () => {
    pontos += 15;
    spanPontos.innerText = `Pontos: ${pontos}`;
});
// manter as configurações salvas ao sair do jogo(opicional)