function dividir (x,y){
	//alert (x/y);
	return  x/y; // retorna o valor que está dentro da função.
}


alert (dividir (6,2));



// Estrutura if e else SE SENÃO

var numero = 18; // verificando se um número é par 

if ((numero % 2)==0){

	alert ("par");

} else {
	alert("ímpar");

}

// Estrutura else if

var idade = 28;

if (idade<=11){
	alert ("criança");
}

else if (idade >11 && idade <=16) {
	alert("pré-adolescente");
}

else if (idade >16 && idade <=21) {
	alert("adolescente");
}

else if (idade >21 && idade <=60) {
	alert("adulto");
}

else {
	alert("Melhor idade");
}


// Estrutura if dentro de if

var nota = 6;

if (nota >= 7){
	alert ("aprovado!");
}

else{
	alert ("Revrovado!");
	if (nota == 6) {
		alert("Você está de Recuperação!");
	}
}


// Estrutura switch

var sexo - "M";

switch(sexo){
	case "M":
	alert ("Macho");
	break;

	case "F":
	alert("Fêmea");
	break;

	default :
	alert("Indefinido");

}


// Estrutura FOR
var texto = "";
for (var i = 0 ; i<=20; i++){
	if (i %2 == 0){
		texto += i + ",";
	}
	alert(texto);
}












































































