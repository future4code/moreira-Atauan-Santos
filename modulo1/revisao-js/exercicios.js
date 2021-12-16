// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a, b) {
      return a - b
  })
}
console.log(array)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
const numerosPares = array.filter((item)=>{
        return item % 2  ===0
    })
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
const numerosPares = array.filter((item)=>{
        return item % 2  ===0
    })
    
const numerosElevados = numerosPares.map ((item)=>{
        return item ** 2
    })
    return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numerosMaiores = 0
        for(let i=0; i<array.length; i++){
            if(array[i] > numerosMaiores){
                numerosMaiores = array[i];
            }
        }
  return numerosMaiores
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if(num1 > num2){
        return {"maiorNumero": num1, "maiorDivisivelPorMenor": num1 % num2 === 0, "diferenca": num1 - num2} 
    }else if (num2 > num1) {
        return {"maiorNumero": num2, "maiorDivisivelPorMenor": num2 % num1 === 0, "diferenca": num2 - num1} 
    } else {
       return {"maiorNumero": num1, "maiorDivisivelPorMenor": num2 % num1 === 0, "diferenca": num2 - num1}
    }

}
retornaObjetoEntreDoisNumeros()

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let pares = []
        for (let i = 0; i < n; i++) {
            pares.push(i*2)
        }
        return pares
}
retornaNPrimeirosPares()

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
        if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"   
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"
    } else {
        return "Isósceles"
            }  
        
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function(a,b){
        return a-b}
    )
    let segundoMaior = array[array.length - 2]
    let segundoMenor = array[1]
    
    return [segundoMaior, segundoMenor]
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}