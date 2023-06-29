/*var a= 34;
console.log(a);

//Declaración de String
var b="Juan";
console.log(b)

//-------------------------

var nombre = "Carla";
var edad= 23;

console.log("La edad de "+ nombre + " es " + edad + " años")

*/

//********************************* */

/*
var p= 19;
var q= 4;

var resultado = p + q;
console.log("La suma de "+p + " + " + q + " es " + resultado);

resultado= p - q;
console.log("La resta de "+ p + " - " + q + " es "+ resultado);

console.log("La división es: "+ p/q);
*/

//------- SENTENCIAS DE CONTROL ---------

// SENTENCIAS CONDICIONALES

/*
let  edad = 4;

if( edad < 18){
    console.log("Es menor de edad")
}else{
    console.log("Es mayor de edad")
}
*/

//let edad= 120;

/*
if(edad<18){
    console.log("Es menor de edad")
}

if ( edad >= 18 & edad <65){
    console.log("Es un adulto")
}

if ( edad >=65 ){
    console.log("Es un adulto mayor")
}

*/

/*
if (edad >=0 & edad<18){
    console.log("Es menor de edad")
}else{
    if( edad >=18 & edad <65){
        console.log("Es un adulto");
    } else if( edad>=65  & edad <=120) {
        console.log("Es un adulto mayor")
    }
}
*/

//------------ SENTENCIAS REPETITIVAS --------------

// While

/*
let cont=0;

while( cont < 15){
    console.log( "5 x "+ cont+ " = "+ cont * 5 );
    cont = cont + 1
    // cont++
}
*/

// for
// i=i+1 incrementa el valor de i en 1 unidad
// i++  === i=i+1

/*
for( var i = 0;  i <= 20;  i=i+1){
    console.log("5 x "+ i + " es "+ 5*i )
}
*/

// 7!= 1*2*3*4*5*6*7

var num= 4;
var cont=1;
var factorial=1;


while( cont <= num){
    factorial= factorial * cont
    cont++
}

console.log(factorial)

/*
for(let i = 1 ; i <= num ; i++) {
    factorial= factorial * i;
}
console.log(factorial)*/

/*----- Ejercicio ----*/



for(let i=1; i<=100; i++){
    if ( i % 5 === 0  ){ // múltiplos de 5
        console.log(i)
    }
}

console.log("++++++++++++++++++++")
//while
let i = 1;
while( i <= 100){

    if( i % 7 == 0){
        console.log(i)
    }

    i++;
}

