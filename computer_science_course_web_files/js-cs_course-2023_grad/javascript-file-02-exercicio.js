console.log ("Testando a saída do terminal 01 " + (7*7));

var c = 5;
var d = -1;

console.log("if com duas condições, onde ambas precisam ser verdadeiras:");
if (c > d && d > 0){
    console.log("c é maior que d E d é um número positivo");
}
if (c > d && d <= 0){
    console.log("c é maior que d E d não é um número positivo");
}
console.log("if com duas condições, onde pelo menos uma precisa ser verdadeira:");  
if (c < d || d > 0){
    console.log("c é menor que d OU d é um número positivo");
}
if (c < d || d <= 0){
    console.log("c é menor que d OU d não é um número positivo");
}