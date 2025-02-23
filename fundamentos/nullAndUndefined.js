const a = {name: "David"}  // A constante "a" é um objeto, que é um ponteiro na memória
const b = a  // Nesse momento, b está fazendo uma referência à "a" na memória, porém não é uma cópia (Atribuição por referência)
console.log(a)  // O atributo name de a = "David"

b.name = "Camila"  // O atributo name de b mudou para "Camila", o que modificou a também

console.log(a)

let c = 3
let d = c  // Atribuição por valor (Tipos primitivos)
d++  // Incrementando d + 1 = 4
console.log(d)
console.log(c)

let valor // não inicializada
console.log(valor)  //undefined

valor = null  // Significa ausência intencional de um valor, considerado "nada" ou "vazio"
console.log(valor)

const produto = {}
console.log(produto.preco)  // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined  // evite atribuir undefined
console.log(produto)

produto.preco = null  // sem preço
console.log(produto)