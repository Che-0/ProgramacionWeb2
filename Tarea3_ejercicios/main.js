let v = "x ";

for (let i = 0; i < 4; i++) {
    console.log(v );
    console.log("");
}

console.log(v.repeat(4));

let fila = parseInt(prompt("filas: "));
let columna = parseInt(prompt("columna: "));

console.log(v.repeat(fila));
for (let i = 0; i < columna; i++) {
    console.log(v);
    console.log('');
}



for (let i = 0; i < 4; i++) {
    console.log("    xxxx    \n".repeat(4));


}



for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        console.log(i ," * " ,j," = " ,  i*j );
}
}
