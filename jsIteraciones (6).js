function Mostrar()
{

  	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	var suma;
	

	while (contador < 5){
	numero = parseInt(prompt("Ingrese un numero: "));
	contador ++;


	}
acumulador = acumulador + numero;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN