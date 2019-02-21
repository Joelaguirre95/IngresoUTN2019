function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
//SWITCH para casos puntuales
switch (mesDelAño){
//CASE para cada condición (Se pueden acumular para un mismo código).
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno");
        break;  //Cerrar con BREAK cada CASE para asignar otras condiciones
    
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frío");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("Ya pasamos el frío, ahora calor!!!");
        break;


}




}//FIN DE LA FUNCIÓN