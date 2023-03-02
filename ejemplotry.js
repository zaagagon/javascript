//ejemplo try
let numerador = 4;
let denonimador = 2;
result = null;

try {
  if (denonimador == 0) {
    throw new Error("error al dividir");
  } else {
    result = numerador / denonimador;
    console.log(result);//2
  }
} catch (error) {
  console.error(error);
  result = null;
}
