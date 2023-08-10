//solucion dowhile suma
let numero1, numero2, repite;
do {
  numero1 = parseInt(prompt("Digite Primer numero :"));
  numero2 = parseInt(prompt("Digite Segundo numero :"));
  resultado = numero1 + numero2;
  alert("La suma es :" + (numero1 + numero2));
  document.write("<br>" + "\nsuma es :" + resultado);
  do {
    repite = prompt("¿Quiere repetir? : Digite S:si o N:No");
  } while (repite != "S" && repite != "N" && repite != "s" && repite != "n");
} while (repite == "S" || repite == "s");
