let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let operador = prompt("Digite o operador da sua escolha para efetuar a operação (+, -, *, /): ");
let resultado;

if (operador === '+') {
    resultado = valor1 + valor2;
    console.log(resultado)
} else if (operador === '-') {
    resultado = valor1 - valor2;
    console.log(resultado)
} else if (operador === '*') {
    resultado = valor1 * valor2;
    console.log(resultado)
} else if (operador === '/') {
    if (valor2 !== 0) {
        resultado = (valor1 / valor2);
        var resto = valor1 % valor2;
        console.log("Resultado: " + resultado + ", Resto: " + resto);
    }
} 