//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ 
// Variables que voy a utilizar
    var nota;
    var sexo;
    var promedio;
    var notaBaja;
    var contadorVaronesMas5 = 0;
    var acumulador = 0;
    var flag = 0;
    var sexoNotaBaja;
    

    for(var i = 0; i < 100; i++){

        nota = parseInt(prompt("Ingrese la nota: "));
        while(nota < 0 || nota > 10 || isNaN(nota)){
            nota = parseInt(prompt("Error. Reingrese la nota: "));
        }
        sexo = prompt("Indique sexo: ").toLowerCase();
        while (sexo != "f" && sexo != "m"){
            sexo = prompt("Error. Reingrese sexo: ");
        }

    acumulador = acumulador + nota;

    if(sexo == "m" && nota >= 6){
        contadorVaronesMas5++;
    }
    if(nota < notaBaja || flag == 0){
        notaBaja = nota;
        sexoNotaBaja = sexo;
        flag = 1;
    }
    }

    promedio = acumulador / 100;

    alert("El promedio de las notas es: " + promedio + "\nVarones con notas mayor a 5: " + contadorVaronesMas5 + "\nNota mas baja: " + notaBaja + "\nSexo nota mas baja: " + sexoNotaBaja);




	
}

