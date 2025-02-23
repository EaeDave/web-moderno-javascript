// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)  // Number + Undefined = NaN
imprimirSoma(2, 8, 10, 20, 30)  // Somente considerou os dois primeiros argumentos dos parâmetros, o resto foi ignorado


// Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

soma1 = soma(5, 10)
console.log(soma1)