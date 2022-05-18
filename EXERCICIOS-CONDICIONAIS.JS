/*
1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
    informados	valores	iguais)	e	escrever	o	maior	deles.
*/

function numMaior(num1, num2) {
    if (num1 > num2) {
        return `${num1} é maior que ${num2}.`;
    } else {
        return `${num2} é maior que ${num1}.`;
    };
};

let num1 = 30;
let num2 = 40;

console.log(`Exercício 1: ${numMaior(num1, num2)}`);

/*    
2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
    escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
    (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).
*/

function podeVotar(anoNascimento) {
    if (anoNascimento <= 2006) {
        return `Você pode votar!`;
    } else {
        return `Você não tem a idade mínima para votar!`;
    };
};

let anoNascimento = 2007;
console.log(`Exercício 2: ${podeVotar(anoNascimento)}`);

/*
 
3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
seguintes	mensagens:	
ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
ACESSO	NEGADO	caso	a	senha	seja	inválida.
*/

function validaSenha(senha) {
    if (senha == 1234) {
        return `ACESSO PERMITIDO!`;
    } else {
        return `ACESSO NEGADO!`;
    };
};

let senha = 1234;
console.log(`Exercício 3: ${validaSenha(senha)}`);

/*
4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
valor	total	da	compra.
*/

function compraMaca(qtd) {
    if (qtd < 12) {
        return `Você comprou ${qtd} maçãs. Valor total R$${qtd * 0.30}.`;
    } else {
        return `Você comprou ${qtd} maçãs. Valor total R$${qtd * 0.25}.`;
    };
};

let qtd = 13;
console.log(`Exercício 4: ${compraMaca(qtd)}`);

/*
5. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
Fórmulas:	
- para	homens:	(72.7	*	Altura)	– 58	
- para	mulheres:	(62.1	*	Altura)	– 44.7

*/

function pesoIdeal(altura, sexo) {
    if (sexo == 'masculino') {
        return `Seu sexo é: ${sexo}. Seu peso ideal é ${parseFloat((72.7 * altura) - 58).toFixed(2)}Kg`;
    } else if (sexo == 'feminino') {
        return `Seu sexo é: ${sexo}. Seu peso ideal é ${parseFloat((62.1 * altura) - 44.7).toFixed(2)}Kg`;
    } else {
        return `Sexo inválido.`
    };
};

let altura = 1.60;
let sexo = 'feminino';

console.log(`Exercício 5: ${pesoIdeal(altura, sexo)}`);