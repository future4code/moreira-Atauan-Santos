

// EXERCICIO DE INTERPRETAÇÃO.

/*******************************************************************************************************/

// 1. Resposta

// A ) O codigo verifica se o numero inserido é par.

// B ) Ele imprime passou no teste para numeros pares 

// C ) ELe imprime não passou no teste para um numero impar.

/*******************************************************************************************************/
// 2. Resposta

// A ) O codigo vai indicar o preço da fruta escolhida

// B ) O preço da maçã é de R$ 2,25

// C ) O preço da pêra iria dar o valor do default: ...
/*******************************************************************************************************/

// 3. Resposta

// A ) A primeira linha solicita para inserir um numero.

// B ) Se digitar o número 10 aparecerá a mensagem 
// "Esse número passou no teste". Se digitar -10 
// aparecerá um erro dizendo que mensagem não foi declarada.

// C ) Haverá um erro pois a variável mensagem tem que estar fora do escopo da função.
/*******************************************************************************************************/

/*******************************************************************************************************/
// EXERCICIO DE ESCRITA.....

// exercicio 1 

let qualSuaidade = Number(prompt("Qual sua idade"))
    if(qualSuaidade >= 18) {
    console.log("Você já está na idade de tirar sua carteira de motorista para  poder dirigir!")
}   else{
    console.log("Voê ainda não tem a idade para poder Dirigir!")       
} 
let horaDeEstudar = prompt("Digite em que periodo você estuda? M, V, N")
    if(horaDeEstudar === 'm' || horaDeEstudar === 'M') 
    {
        console.log("Bom dia! Voce estuda na parte da manhã.")
    }if(horaDeEstudar === 'v' || horaDeEstudar === 'V') 
    {
        console.log("Boa Tarde! Você estuda na parte da Tarde!")
    }if(horaDeEstudar === 'n' || horaDeEstudar === 'N')
    {
        console.log("Boa Noite! Você estuda na parte da Noite!")
    }else{
        console.log("Periodo inexistente!")
    } 

/*******************************************************************************************************/

// exercicio 2

let horaDeEstudos = prompt("Digite em que periodo você estuda? M, V, N")
 switch(horaDeEstudos) {
     case 'M':
     case 'm':
         console.log("Bom dia! Voce estuda na parte da manhã.")
    break;
    case 'V':
    case 'v':
        console.log("Boa Tarde! Você estuda na parte da Tarde!")
    break;
    case 'N':
    case 'n':
        console.log("Boa Noite! Você estuda na parte da Noite!")
    break; 
    default:
        console.log("Periodo inexistente!")
    break;
 }

 /*******************************************************************************************************/

 // exercicio 4

let generoFilme = prompt("Qual gênero do Filme que deseja assistir?")
 let precoIngresso = Number(prompt("Quanto custa o ingresso do Filme?"))
    if(generoFilme ==='fantasia' && precoIngresso < 15) {
        console.log("Bom Filme!")
    }else{
        console.log("Escolha outro filme :(")
    } 
 

/*******************************************************************************************************/
    // DESAFIO

let genero = prompt("Qual gênero do Filme que deseja assistir?")
let preco = Number(prompt("Quanto custa o ingresso do Filme?"))

function verificarFilmeIngresso (genero,preco) {
    if(genero === 'fantasia' && preco <= 15){
        console.log("Bom Filme!")
        const lancheEscolhido = prompt("Qual lanche você quer comprar?")
        console.log(`Aproveite o seu ${lancheEscolhido}`)
    } else {
        console.log("Escolha outro filme")
    }
}

verificarFilmeIngresso(genero,preco)