/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCartas'
 * 
 * 
    const carta = comprarCartas(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!");

let confirmacao = confirm("Gostaria de iniciar uma nova rodada?");

if (confirmacao) {
  console.log("Rodada iniciada. Comprando cartas...");

  const cartaDoUsuario1 = comprarCarta();
  const CartaDoUsuario2 = comprarCarta();
  const pontoDosUsuarios = cartaDoUsuario1.valor + CartaDoUsuario2.valor;
console.log(
    "Usuário - cartas: " +
      cartaDoUsuario1.texto +
      " " +
      CartaDoUsuario2.texto +
      " - puntuação " +
      pontoDosUsuarios
  );
  const comprarCarta1 = comprarCarta();
  const comprarCarta2 = comprarCarta();
  const compararPontos = comprarCarta1.valor + comprarCarta2.valor;
  console.log(
    "Computador - cartas: " +
      comprarCarta1.texto +
      " " +
      comprarCarta2.texto +
      " - puntuação " +
      compararPontos
  );

  if (compararPontos > pontoDosUsuarios) {
    console.log("O computador ganhou!");
  } else if (compararPontos < pontoDosUsuarios) {
    console.log("O usuário ganhou!");
  } else {
    console.log("Empate!");
  }
} else if (confirmacao) {
  console.log("O jogo acabou");
}