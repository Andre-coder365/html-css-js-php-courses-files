/* Faça um programa em JavaScript que:
Solicite ao usuário que insira dois números inteiros positivos;
Utilize um vetor para armazenar esses dois números;
Verifique se os números inseridos são inteiros positivos. Caso contrário, solicite ao usuário para inseri-los novamente;
Divida os dois números inteiros positivos;
Imprima na tela o resultado da divisão.
Observações:Há mais de uma forma de desenvolver o programa. Logo, não há código certo ou errado.
Você pode utilizar funções JavaScript para melhor organizar o seu código. Inclusive, pode usar um pouco de recursividade. */

var numInformados = new Array();
alert("Insira 2 números inteiros positivos");
var num1 = prompt("Insira o primeiro número:");
var num2 = prompt("Insira o segundo número:");

numInformados.push(num1);
numInformados.push(num2);

if ((!(numInformados[0] >= 0)) || (!(numInformados[0] % 2 == 0)) || (!(numInformados[1] >= 0)) || (!(numInformados[1] % 2 == 0)) ) {
    console.log("A ou B (ou ambos) não são inteiros positivos, reinicie o programa e insira novamente os números")
} else {
    console.log("A e B são inteiros positivos, tudo ok");

    resultadoDivisao = divisao(numInformados[0], numInformados[1]);

function divisao (valor1, valor2) {

var resultado = 0; 
      
resultado = valor1 / valor2;

return resultado;

}

console.log(resultadoDivisao + " - Esse é o Resultado da divisão do número 1 pelo número 2");

}



