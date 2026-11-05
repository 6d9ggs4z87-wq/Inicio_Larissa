//Inicio

const produto = "Notebook"
const preco = 3500.00

 resumo = "O valor do" + produto + "é R$" + preco

 resumo = ` O valor do ${produto} é R$ ${preco.toFixed(2)}`

console.log(resumo)