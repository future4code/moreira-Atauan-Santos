// exercicio de leitura........

// QUESTÃO 1 -

/* 
let valor = 0
for(let i = 0; i < 5; i++) {
    valor += i
  }
  console.log(valor)
  */

// RESPOSTA: 
  // R1. O código está adicionando duas unidades 
  // até que i se repita 5 vezes com i = 0, i = 1, i = 2, i = 3 e i = 4. Assim ele vai somando e no final ele vai somar 10


// QUESTÃO 2 -

/* 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*/

// RESPOSTA. 

    // a) Ele passar por todos os números do array e vai apresentar apenas os números que são maiores que 18 (não incluindo 18).

    // b) Sim. Remover toda a lógica if e adicionar console.log(lista.indexOf(numero)) ao loop.


// QUESTÃO 3

/* 
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

/* 
RESPOSTA:   *
            **
            ***
            ****
*/

 // A DEPENDER DO VALOR QUE VOCÊ INFORME, NESTE CASO DETERMINEI 4.      

/* Exercícios de escrita  */

// 1.
/* 
const quantidadesDebichinhos = Number(prompt("Quantos pets você tem?"))
    if(quantidadesDeBichinhos <= 0){
        console.log("Que pena! você tambêm pode adotar um bichinho")
}
const animais = []
    for(let i = 0; i < quantidadesDeBichinhos; i++) {
        animais.push(prompt("Digite o nome de um dos pets!"))
    }
console.log (animais)

*/

// 2. 

// A)

 
const array1 = [100, 55, 14, 77, 75, 96, 73, 4, 32, 76, 48]
    for(i = 0; i < array1.length; i++) {
        console.log (array1[i])
    }


// B) 


const array2 = [100, 55, 14, 77, 75, 96, 73, 4, 32, 76, 48]
    for(i = 0; i < array2.length; i++) {
        Dividindo = array2[i]/10
            console.log(Dividindo)
    }


// C) 
const array3 = [100, 55, 14, 77, 75, 96, 73, 4, 32, 76, 48]
    for(i = 0; i < array3.length; i++){
        if(array3[i]%2 === 0){
            Par = array3[i];
                console.log(Par)
        }
    } 
// D) 
const array4 = [100, 55, 14, 77, 75, 96, 73, 4, 32, 76, 48]
let novaArray = []
function addIndex (array4){
    for (i = 0; i < array4.length; i++){
        novaArray.push(`O elemento do index ${i} é ${array4[i]}`)
    }
    console.log(novaArray)
}

addIndex(array4)


