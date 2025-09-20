let nombre= "polito"
        document.write("<h1>Hola "+nombre+ " desde javascript</h1>")
        
        console.log(nombre)
        const arreglo=[4,3,5]
        //recorrido del vector
        console.log(arreglo);

        let a=5
        let b=6
        suma = a+b
        console.log(" \nresultado de la suma :" +suma);
        document.write("resultado de la suma :" + suma)
        let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5)


// generar un número secreto entre 1 y 10
const MIN = 1;
const MAX = 5;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // para almacenar el número de intentos
let hint = ''; // para almacenar pistas
let number = 0;
do {
  // Obtener entrada de la usuaria
  let input = prompt('Por favor ingresa un número entre'+ MIN+ 'y' +MAX + hint);

  // obtener el entero
  number = parseInt(input);

  // aumentar el número de intentos
  guesses++;

  // verifica el número de entrada con el número secreto y proporciona una pista si es necesario
  if (number > secretNumber) {
    hint = ', y menos que ' + number;
  } else if (number < secretNumber) {
    hint = ', y mayor que ' + number;
  } else if (number == secretNumber) {
    alert('¡Bravo! tienes razon despues de ${guesses} intentos.');
  }
} while (number != secretNumber);
