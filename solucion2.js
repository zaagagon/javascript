var x;

// Definir variables
var e = new Number();

var edad = new Number();

var mayores = new Number();

var menores = new Number();

var adultomayor = new Number();

var edadAlta = new Number();

var edadBaja = new Number();

var edadPromedio = new Number();

edadBaja = 0;

edadAlta = 0;

// Ingresar datos
var e = new Array(5);

for (x = 1; x <= 5; x++) {
  do {
    //necestimos almacenar en el indice 0, x-1=0
    e[x - 1] = prompt("Ingresa edad :");

    edad = e[x - 1];

    if (!(edad >= 1 && edad <= 120)) {
      alert("Error edad no cumple parametros, intente de nuevo");
    } else {
      alert("Ingreso de datos correcto! " + x);
    }
  } while (!(edad >= 1 && edad <= 120));
}
