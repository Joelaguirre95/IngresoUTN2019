/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ //declarar variables
    var largo;
    var ancho;
    var perimetro;
    var alambre;
//obtener datos desde la caja de texto
    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    perimetro = largo * 2 + ancho * 2;
    alambre = perimetro * 3;

    alert("Necesito " + alambre.toFixed(2) + " metros de alambre");

}
function Circulo () 
{
	var radio;
    var circunferencia;
    var alambre;

    radio = parseFloat(document.getElementById("Radio").value);
    circunferencia = 2 * Math.PI * radio;
    alambre = circunferencia * 3;

    alert("Necesito " + alambre.toFixed(2) + " metros de alambre");

}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var cemento;
    var cal;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;

    alert("Necesito " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");


}