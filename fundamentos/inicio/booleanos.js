let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1  // Considerado true em JavaScript
console.log(!!isAtivo)  // Duas negações acaba retornando o valor original da expressão

console.log(!false)  // true
console.log(!true)  // false

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!"texto")


console.log("Os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Pra finalizar...")
console.log(!!("" || null | 0 || " "))

let nome = ""
console.log(nome || "Desconhecido")