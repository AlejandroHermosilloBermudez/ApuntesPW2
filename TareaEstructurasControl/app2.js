//Estructuras de control

//if & else
let palabra= prompt("Ingresa el nombre de tu escuela");
if(palabra=="UNAM") {
	console.log("Palabra correcta");
}
else {
	console.log("Palabra incorrecta")
}


//Validacion de numero sin inportar el tipo de dato
let numero= prompt("Ingresa un numero");
if (numero==10) {
	console.log("Bien");
	console.log(typeof numero);
}
else {
	console.log("Mal");
}

//Validacion de numero con inportancia del tipo de dato
let numero1= prompt("Ingresa un numero");
if (numero1===10) {
	console.log("Bien");
	console.log(typeof numero1);
}
else {
	console.log("Mal el tipo de dato es: "+ typeof numero1);
}

//Validacion de numero con inportancia en el tipo de dato, cambiando el tipo de dato
let numero2= prompt("Ingresa un numero");

if (numero2===10) {
	console.log("Bien");
	console.log(typeof numero2);
}
else {
	console.log("Mal el tipo de dato es: "+ typeof numero2);
}

//switch
let opcion= prompt("Eliga una opcion:\n1.- Libro\n2.- Pelicula\n3.- Juego");
switch (opcion) {
	case "1":
		console.log("Principito");
		break;
	case "2":
		console.log("Matrix");
		break;
	case "3":
		console.log("Age Of Empire");
		break;
	default:
		console.log("Opcion no valida");
		break;


}

//while
let numero3= 0;
while(numero3 <=10) {
	console.log("Numero = "+numero3);
	numero3++;
}

//Tabla del uno
let multiplicando=1;
let incremento=1;
while(incremento <=10) {
	console.log(multiplicando+" x "+incremento+" = "+ (multiplicando*incremento));
	incremento++;
}