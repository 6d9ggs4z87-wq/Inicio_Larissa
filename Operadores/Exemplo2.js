//Inicio do programa

const temIdadePermitida = true
const possuiIdentidade = false
const temAutorizacaoDospais = true
 
const podeEntrarSozinho = temIdadePermitida && possuiIdentidade
console.log("Pode entrar desacompanhado?" + podeEntrarSozinho)

const possuiAcesso = podeEntrarSozinho || temAutorizacaoDospais
console.log("Possui autorização para o evento?" + possuiAcesso)

const sistemaEmManutencao = false
const sistemaDisponivel = !sistemaEmManutencao
console.log("O servidor está online?" + sistemaDisponivel)
