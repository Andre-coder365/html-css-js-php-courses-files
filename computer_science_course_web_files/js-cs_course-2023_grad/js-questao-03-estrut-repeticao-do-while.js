/* Questão 2
Observe o fragmento de código a seguir. Após a sua execução, qual o valor da variável cont − exibida na instrução "alert(cont)"? (Substituí o "alert" para "console.log" para rodar direto no vscode) */

/*

a) 10

b) 1

c) 9

d) 11

e) 2

*/


var cont = 1;

do{
    cont += 1;

} while (cont < 10);

console.log(cont);





/* O laço "do/while" executa a primeira instrução antes de testar a condição fornecida. Nesse caso, a instrução consiste em incrementar, de 1 em 1, o valor da variável “cont”. Como se inicia em 1 e vai até 9, ao final o seu valor será 10.

Nota pessoal: O laço executará a instrução quando chegar em 9, retorna ao laço e executa a instrução (acrescenta o valor 1 ao valor 9 da variável, que passará a ser 10) - somente após executar essa instrução, a condição é verificada. ao constatar que o valor da variável não é mais menor que 10, ou seja, é !(cont < 10) ou (cont > 10), se constata condição de valor lógico false no teste e então sai do laço.

*/