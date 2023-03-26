var alunos = ['Alex', 'Anna', 'João']; // array de strings
// console.log(alunos[2]); // exibirá “Alex” na caixa de diálogo

alunos.push('Helena');

console.log(alunos[3]);

alunos.push('John', 'Michael');

alunos[alunos.length] = 'Robert';

console.log(alunos);

delete alunos[6];

console.log(alunos);
