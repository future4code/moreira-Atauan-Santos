function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let numeroRepete = 0
  let mensagem;
  
  for (let i=0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      numeroRepete ++
    }
  } 
  
    if (numeroRepete > 0){
      mensagem = `O número ${numeroEscolhido} aparece ${numeroRepete}x`
    } else {
      mensagem = "Número não encontrado"
    }
    
    return  mensagem;
}