
/*

	Nombre del programa:  funciones.js
	Copyright: FAHJ
	Autor: Francisco Arellano Herdson Josué. 
	Fecha: 20/05/2022 
	Versión: 1.0
	Descripción: Aplicación que encripta textos (controlador), así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.
	La aplicación cambiará las vocales por las siguientes llaves para encriptar el mensaje: 	
		La letra "e" es convertida para "enter"
		La letra "i" es convertida para "imes"
		La letra "a" es convertida para "ai"
		La letra "o" es convertida para "ober"
		La letra "u" es convertida para "ufat"


*/


//Obtención de los objetos <textarea>
const mensajeOriginal = document.querySelector('.mensajeOriginal'); 
const mensajeEncriptado = document.querySelector('.mensajeEncriptado'); 



//Definición de funciones
/*
	Nombre de función: encriptarMensaje
	Fecha: 20/05/2022  
	Descripción: Encripta el mensaje original intercambiando las vocales del mensaje con los valores para encriptarlo, especificados al principio.  
	Parámetros: 
		Por valor
			mensajeOriginal: Es el mensaje que el usuario ingresa para ser encriptado. 
	
*/


function encriptarMensaje(mensajeOriginal){
	var mensajeEncriptado = mensajeOriginal; 
	var vocales = new Array();

	//Array asociativo (clave = valor) para remplazar las vocales con su valor correspondiente y encriptar el mensaje original. 
	vocales["e"] = "enter";
	vocales["i"] = "imes";
	vocales["a"] = "ai";
	vocales["o"] = "ober";
	vocales["u"] = "ufat";

	//Recorremos el mensaje y remplazamos las vocales. 
	for(var iterador in vocales){
		 mensajeEncriptado.includes(iterador) ?  mensajeEncriptado =  mensajeEncriptado.replaceAll(iterador, vocales[iterador]) : console.log("La vocal " + iterador + " no esta en " + mensajeOriginal);  
	}

	console.log("Mensaje encriptado: " +  mensajeEncriptado); 
	return  mensajeEncriptado; 

}

/*
	Nombre de función: desencriptarMensaje
	Fecha: 20/05/2022  
	Descripción: Función que desencripta el mensaje original intercambiando las vocales del mensaje con los valores para encriptarlo, especificados al principio.  
	Parámetros: 
		Por valor
			mensajeEncriptado: Es el mensaje encriptado para ser desencriptado. 
	
*/

function desencriptarMensaje(mensajeEncriptado){
	var mensajeOriginal = mensajeEncriptado; 
	var vocales = new Array();

	//Array asociativo (clave = valor) para remplazar las vocales con su valor correspondiente y encriptar el mensaje original. 
	vocales["e"] = "enter";
	vocales["i"] = "imes";
	vocales["a"] = "ai";
	vocales["o"] = "ober";
	vocales["u"] = "ufat";

	for(var iterador in vocales){
		mensajeOriginal.includes(vocales[iterador])? mensajeOriginal = mensajeOriginal.replaceAll(vocales[iterador], iterador) : console.log("No se encuentra " + iterador + " en " + mensajeEncriptado); 
	}

	console.log("El mensaje desencriptado es " + mensajeOriginal); 
	return mensajeOriginal; 

}


/*
	Nombre de función: btnEncriptar
	Fecha: 20/05/2022  
	Descripción: Permite obtener el mensaje encriptado cuando el usuario da click en el botón encriptar.   
	
*/


function btnEncriptar(){
	mensajeEncriptado.value = encriptarMensaje(mensajeOriginal.value);
	mensajeOriginal.value = " "; 

}

/*
	Nombre de función: btnDesencriptar
	Fecha: 20/05/2022  
	Descripción: Permite obtener el mensaje original cuando el usuario da click en el botón desencriptar.   
	
*/



function btnDesencriptar(){

	mensajeOriginal.value = desencriptarMensaje(mensajeEncriptado.value); 
	mensajeEncriptado.value = " "; 

}


