const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 function nomesDosPets(objetos)
 { 
     return objetos.nome
 }

 const novosPets = pets.map(nomesDosPets)

 function nomeDasRacas(objetos)
 { 
     return objetos.raca === "Salsicha";
 }
const raca = pets.filter(nomeDasRacas)
console.log(raca)

function promo (objetos) {
    return objetos.raca === "Poodle";
}
const poodle = pets.filter(promo)

    function frase(objetos) 
{
         return `Você ganhou um cupom de desconto de 10% para tosar o/a ${objetos.nome}!`;
}
const mensagem = poodle.map(frase)
console.log(mensagem)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeDosProdutos = produtos.map((mercadoria) => {

    return mercadoria.nome

})

function descontosDosProdutos(mercadoria)
{
    return {nome: mercadoria.nome, preco: mercadoria.preco *= 0.95}
}

const desconto = produtos.map(descontosDosProdutos)
console.log(desconto);


function soBebidas(mercadoria)
{
    return mercadoria.categoria === "Bebidas";
}

const bebidas = produtos.filter(soBebidas)
console.log(bebidas);


function somenteYpe(mercadoria)
{
    return mercadoria.nome.includes("Ypê")
}

const ype = produtos.filter(somenteYpe)
console.log(ype);


function frase(item)
{
    return "Compre " + item.nome + " por apenas " + item.preco+"."
}

const construirFrase = produtos.map(frase)
console.log(construirFrase)
