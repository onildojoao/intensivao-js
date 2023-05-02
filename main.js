/*
1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
*/
/* alert("Hello World!") */
/*

2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
*/
/* let q2n1 = Number(prompt("Digite o primeiro número"))
let q2n2 = Number(prompt("Digite o segundo número"))
let q2r1 = q2n1 + q2n2

alert(`O resultado a soma de ${q2n1} e ${q2n2} é: ${q2r1}`) */

/*
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
*/
/* let q3n1 = prompt("Digite uma variável")
let q3varType = parseInt(q3n1, 10)
if (isNaN(q3varType)) {
  alert("A variável declarada não é um número")
} else {
  alert("A variável declarada é um número")
} */

/*
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/
/* let q4n1 = prompt("Digite uma variável")
let q4varType = parseInt(q4n1, 10)
if (isNaN(q4varType)) {
  alert("A variável declarada não é uma string")
} else {
  alert("A variável declarada é uma string")
} */
/*
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". */

/* let q5n1 = prompt("Digite uma variável")
if (q5n1.toLowerCase() === "true" || q5n1.toLowerCase() === "false")
  alert("É um booleano")
else alert("Não é um booleano") */

/*
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
*/
/* let q6n1 = Number(prompt("Digite o primeiro número"))
let q6n2 = Number(prompt("Digite o segundo número"))
let q6r1 = q6n1 - q6n2

alert(`O resultado a subtração de ${q6n1} e ${q6n2} é: ${q6r1}`) */

/*
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
*/

/* let q7n1 = Number(prompt("Digite o primeiro número"))
let q7n2 = Number(prompt("Digite o segundo número"))
let q7r1 = q7n1 * q7n2

alert(`O resultado a multiplicação de ${q7n1} e ${q7n2} é: ${q7r1}`) */

/*
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/
/* let q8n1 = Number(prompt("Digite o primeiro número"))
let q8n2 = Number(prompt("Digite o segundo número"))
let q8r1 = q8n1 + q8n2

alert(`O resultado a divisão de ${q8n1} e ${q8n2} é: ${q8r1}`) */

/*
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
*/
/* let q9n1 = Number(prompt("Digite um número:"))
if (q9n1 % 2 == 0) alert(`O número ${q9n1} é par`)
else alert(`O número ${q9n1} não é par`) */

/*
 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

let q10n1 = Number(prompt("Digite um número:"))
if (q10n1 % 2 != 0) alert(`O número ${q10n1} é ímpar`)
else alert(`O número ${q10n1} não é ímpar`)
