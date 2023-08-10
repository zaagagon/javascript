	 	 
var respuesta = "PARIS"; 	 	 
var acierto = false; 	 	 
var contador = 0;	 	 
while(contador < 3 && acierto === false) {	 	 
 var respUsuario = prompt("Capital de FRANCIA: ");	 	 
 if (respUsuario.toUpperCase() === respuesta) { 	 	 
 var acierto = true; 	 	 
 document.write("Enhorabuena, has acertado");	 	 
 }	 	 
 contador++;	 	 
}	 	 
if (!acierto) {document.write("Lo sentimos, has consumido tus 3 intentos")}; 	 	 
