function Mostrar()
{

    var numero;
    var contador = 0;
//Pedir numero
     numero = parseInt(prompt("Ingrese un número"));
        while (isNaN(numero)){
            numero = parseInt(prompt("Eso no es un número. Ingrese un número"));
        }
//Inicializar contador; Cantidad de repeticiones; Aumentar el contador en 1
    for (var i = 1;i <= numero ;i++){

       

        if (i % 2 == 0){
            
            console.log (i);
            contador++;
        }
    
    }
   alert("Numeros pares encontrados " + contador);

}//FIN DE LA FUNCIÓN