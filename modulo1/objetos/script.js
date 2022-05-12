// 1 - Questão de leitura.
/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		].
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) */

// Matheus Nachtergaele
// Virginia Cavendish
// "Globo"horario: "14h"  

// A) Ele devolve o nome matheus e Virginia mais uma array do canal
// e horario.

/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */

// Vai ser impresso em array.

// {nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// {nome: 'Jubo', idade: 3, raca: 'SRD'}

// Ele troca do cachorro e coloca no gato e do gato na tartaruga.


/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */

// Ele imprimiu false  pq a propriedade de backender é false assim definindo como uma string.
// Já altura como ele não definiu vai imprimir indefinida.

// Exercicio de Escrita de codigo.

// 1 Questão 1.

/* const pessoa = {
  nome: "Atauan",
  apelidos: ["Taus","Meu Negão","Nego"]  
}
console.log(`Meu nome é ${pessoa.nome} mas muitos me chamam de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

 meuApelido = {
 ...pessoa,
apelidos: ["Tata","Nego Catraca", "Preto"],
 }
 function novosApelidos(objeto) {
   console.log(`Meu Nome é ${objeto.nome} mas os meus amigos mais proximos me chamam de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`) 
 }
 novosApelidos(meuApelido) */

 // 2 Questão

/* const pessoa = [
	 {
   nome: "Atauan",
   idade: "26",
   profissao: "Marketing Digital",
 	}
	 {
	 nome: "Aparecido"
	 idade: 58
	 profissao: "Oficial de justiça"
	 }
function listaPessoas(pessoa[0], pessoa[1]) {
  return pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length
        pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length
}
	console.log(listaPessoas)*/



// 3 Questão


/* const carrinho = []
      const frutas = [
        {
        nome: "Tangerina",
        disponibilidade: true
        },
        {
        nome: "Jambo",
        disponibilidade: true
        },
        {
        nome: "Goiaba",
        disponibilidade: true
        }
      ];
      const adcFrutas = (objeto) => {
        return carrinho.push(objeto)
      }
      adcFrutas(frutas)
      console.log(carrinho */

 
