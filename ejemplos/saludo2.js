const readline=require("readline")

const datos=readline.createInterface({
    input:process.stdin,
    output:process.stdout
    
});

datos.question("digite un nombre",(nombre)=>{
    console.log("hola " + nombre);
    datos.close()
    
}



)