var nome;  // variável declarada
nome = "David";  // variável inicializada

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nomeDoProduto = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nomeDoProduto 
    + " " 
    + "\nCategoria: " 
    + categoria
    + "\nPreço: "
    + preco)  // concatenação de strings