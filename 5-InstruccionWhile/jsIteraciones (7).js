function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta; 
	var numero;

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while ( isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero")); 
		}
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt("Desea continuar?").toLowerCase();
	} while (respuesta == "si"); 

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN