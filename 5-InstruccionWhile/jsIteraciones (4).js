function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

//Condicion que debe cumplirse para que sea incorrecto y entre en el WHILE

	while (!(numero >= 0 && numero <= 10 ) || isNaN(numero)) {       //while (numero < 0 || numero > 10) 

		numero = prompt("Incorrecto. Ingrese un numero entre 0 y 10");
		
	}

document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN