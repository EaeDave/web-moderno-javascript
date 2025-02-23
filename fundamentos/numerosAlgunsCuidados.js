console.log (7 / 0)  // Retorna "Infinity"
console.log("10" / 2)  // Uma string de número quando colocada em uma operação com um número, é feito a coersão automática
console.log("Show!" * 2)  // NaN (Not a Number)
console.log(0.1 + 0.7)  // Por conta da especificação, há alguns problemas de precisão de cálculo em prol do desempenho da linguagem
// console.log(10.toString())  Não é possível converter o literal para string
console.log((0.1 + 0.7).toFixed(1))  // Uma forma de corrigir a imprecisão do cálculo