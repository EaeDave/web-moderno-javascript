const VALORES = [7.7, 8.9, 6.3, 9.2]
console.log(VALORES[0], VALORES[1], VALORES[2], VALORES[3])
console.log(VALORES[4])  // Buscou um index que não existe, retorna undefined

VALORES[4] = 10  // Atribuindo um valor a um index
console.log(VALORES[4])

console.log(VALORES.length)  // Quantidade de elementos do array

VALORES.push({id: 3}, false, null, "teste")
console.log(VALORES)

console.log(VALORES.pop())  // Remove o último elemento do array e retorna o valor dele

delete VALORES[0]  // Deleta o valor do index informado sem retornar seu valor
console.log(VALORES)

console.log(typeof VALORES)