function Mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);

//Condicion
if(edad >= 18) //No cerrar con ;

{

    alert("Es mayor de edad");
}

//Caso contrario a la condición
else {

    alert("Es menor de edad");
}

}//FIN DE LA FUNCIÓN