const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))  // Diferente das outras linguagens, JavaScript não retorna um erro ao tentar puxar um índice que não existe
console.log(escola.charCodeAt(3))  // Valor da tabela ASCII / Unicode
console.log(escola.indexOf("3"))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola'.concat("!"))
console.log(escola.replace(3, "D"))
console.log("David, Camila, Liz".split(","))