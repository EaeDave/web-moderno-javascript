const peso1 = 1.0  // É considerado inteiro
const peso2 = Number("2.1")  // Não é considerado inteiro

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))  // true
console.log(Number.isInteger(peso2))  // false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))  // O método toFixed() arredonda o número para a qtd de casas informadas no momento da execução
console.log(media.toString())  // O método toString() transforma um número em string
console.log(media.toString(2))  // O método toString(2) retorna o valor em binário
console.log(typeof media)
console.log(typeof Number)