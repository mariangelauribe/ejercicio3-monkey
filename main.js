function calcular()
{
    var aSmile = document.getElementById("monoA").value;
    var bSmile = document.getElementById("monoB").value;
    
    var salida = document.getElementById("salida");
    var salida2 = document.getElementById("salida2");
    var isaSmile = false;
    var isbSmile = false;
    
	if ( aSmile == "1") {
        isaSmile = true;
    }
    if (bSmile == "1") {
        isbSmile = true;
    }

	if (isaSmile == isbSmile) {
        salida.innerHTML = "1";
        salida2.innerHTML = "¡Problemas!"
    } else {
        salida.innerHTML = "0";
        salida2.innerHTML = "¡Genial!"
    }
}