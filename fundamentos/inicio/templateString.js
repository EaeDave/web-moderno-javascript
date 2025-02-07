const nome = "David"
const concatenacao = "Olá " + nome + "!"
const template = `
    Olá
    ${nome}!`  // interpolação de strings com template strings

console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()  // arrow function
console.log(`Ei... ${up("cuidado")}!`)