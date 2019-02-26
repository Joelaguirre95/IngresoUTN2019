function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while (contador < 5) {

		numero = parseInt(prompt("Ingrese un número"));
		
		acumulador = acumulador + numero; 

		contador++;	//Incremento de la variable	
	}


document.getElementById('suma').value = acumulador;  //Suma de los 5 números
document.getElementById('promedio').value = acumulador / 5;  //Calculo del promedio

}//FIN DE LA FUNCIÓN