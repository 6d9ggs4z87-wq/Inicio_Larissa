//Inicio do programa

const precoProduto = 100
const desconto = 15
const frete = 20

const precoComDesconto = precoProduto - desconto
const precoFinal = precoComDesconto + frete
const parcelas = precoFinal / 2

console.log("Preço final faturado: R$" + precoFinal)

console.log("Valor de cada parcela: R$" + parcelas)

const numeroAlvo = 15
const restoDivisao = numeroAlvo % 2

const areaQuadrada = 5 ** 2

console.log("Resto da divisão de 15 por 2 :" + restoDivisao)
console.log("Resultado de 5 elevado ao quadrado:" + areaQuadrada)