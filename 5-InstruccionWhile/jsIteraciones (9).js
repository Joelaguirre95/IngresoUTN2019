function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta;

	do {
		numero = parseInt(prompt("Ingrese un numero"));
			while ( isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
			}


			
			respuesta = prompt("Desea continuar?"); 
		}while (respuesta = 'si');




}//FIN DE LA FUNCIÓN