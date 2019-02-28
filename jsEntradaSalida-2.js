/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
/*8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo*/
function Mostrar()
{  
    var numero;
    var contador = 0;
    var contadorPares = 0;
    var promedio;
    var acumulador = 0;
    var maximo;
    var minimo;
    var flag = 0;

    
	
    do {
        numero = parseInt(prompt("Ingrese un numero: "));
        while (numero < 0 || isNaN(numero)){
            numero = parseInt(prompt("Error. Ingrese un numero: "));
        }
        if(numero % 2 ==0){
            contadorPares++;
        }
        acumulador = acumulador + numero;
        

        if(numero > maximo || flag == 0){
            maximo = numero;
        }
        if (numero < minimo || flag == 0){
            minimo = numero;
            flag = 1;
        }
        contador++;
        seguir = confirm("Desea continuar?");
    } while(seguir)
    promedio = acumulador / contador;

    document.write("La cantidad de numeros pares es: " + contadorPares + "<br>");
    document.write("El promedio de los numeros ingresados es: " + promedio.toFixed(2) + "<br>");
    document.write("La suma de todos los numeros es: " + acumulador + "<br>");
    document.write("El numero maximo es: " + maximo + "<br>");
    document.write("El numero minimo es: " + minimo + "<br>");
}

