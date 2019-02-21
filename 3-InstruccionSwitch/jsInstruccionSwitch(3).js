function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){

        case "Febrero":
            alert("Este mes no tiene mas de 29 dias");
            break;
        default:  //DEFAULT para lo que no cumple con la o las condiciones puestas en el CASE
            alert("Este mes tiene 30 o más días");

    }
	


}//FIN DE LA FUNCIÓN