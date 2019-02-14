/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
    var precio2;
    var precio3;
    var resultado;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    resultado = precio1 + precio2 + precio3;

    alert("La suma es $ " + resultado.toFixed(2));

}
function Promedio () 
{ 
    var precio1;
    var precio2;
    var precio3;
    var promedio;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
	
    promedio = (precio1 + precio2 + precio3) / 3;

    alert("El promedio es " + promedio.toFixed(2));
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var PrecioFinal;
    var Iva;
    var PrecioIva;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    PrecioFinal = precio1 + precio2 + precio3;
    Iva = (precio1 + precio2 + precio3) * 21 / 100; //Para sumar directamente (*121/100)
    PrecioIva = PrecioFinal + Iva; 

    alert("El precio final es $ " + PrecioIva.toFixed(2));



}