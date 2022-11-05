var x = 5;
var y = 6;
var z = x + y;

let nome = "João";
nome = "Ana"; //reatribuindo um valor
//let nome = 0; //vai dar erro, tá redeclarando

var nome = "João";
var nome = 0;

function calculo(){
	let x = 0;
	x = 1; //posso
}
x = 2; // não posso, está fora do bloco


function calculo2(){
	var y = 0;
	y = 1; //posso
}
y = 2; //posso
var y = "Ana"; //posso

// Variáveis Const

const PI = 3.141592;
PI = 3.14; //não posso reatribuir valor
PI = 3.14 + 2; //não posso


//Operadores de Atribuição
let num = 1; //atribuindo valor
num == 2; //retornar falso,
 		  //porque é simbolo de igualdade


//Tipos de Dados
const pi = 3.14; //numeral decimal: float
let nome = "João"; //Texto: String
let numero = 1; //Número inteiro: int
let numero2 = "1"; //String
let frase = "Ana comeu 3 maças";


let nome = "João", sobrenome = "Rosa", cidade = "Feliz";

let nome; //não atribui valor, ela é valor indefinido
nome = "Ana";


