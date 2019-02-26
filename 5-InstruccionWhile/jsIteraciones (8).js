function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var numero;
	var flag = 0; // Flag para saber si pasó por algun bloque de código
	do {
		numero = parseInt(prompt("Ingrese un numero"));
			while ( isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero")); 
		}                             //IF para determinar si es positivo o negativo
		if (numero>0){
		positivo = positivo + numero;  //positivo += numero;
		} else {
			flag =1;
			negativo = negativo * numero;  //negativo *= numero;
		}
		contador++;
		respuesta = prompt("Desea continuar?").toLowerCase();
	} while (respuesta == 'si');

document.getElementById('suma').value = positivo;
if (flag == 0 ){
	negativo = 0;
}
document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN