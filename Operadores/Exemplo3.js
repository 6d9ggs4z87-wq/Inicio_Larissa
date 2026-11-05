//Inicio do programa 

const limiteCredito = 500.00
const valorCompra = 120.00

const compraAprovada = valorCompra <= limiteCredito
const estoqueCritico = valorCompra > 1000

console.log("O saldo é suficiente?" + compraAprovada)
console.log("Ativou o alerta de estoque?" + estoqueCritico)

const idResgistrado = 2026
const idDigitado = "2026"

const igualdadeAmpla = idResgistrado == idDigitado
const igualdadeEstrita = idResgistrado == idDigitado

console.log("Os IDs são iguais na comparação?" + igualdadeAmpla)
console.log("Os IDs são iguais no tipo?" + igualdadeEstrita)
