process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log("piedra, papel o tijeras");
console.log("0. piedra");
console.log("1. papel");
console.log("2. tijeras");

var piedra = 0;
var papel = 1;
var tijeras = 2;

P1 = Math.floor(Math.random()*3);
P2 = Math.floor(Math.random()*3);

console.log("El jugador 1 ha elegido: " + P1);
console.log("El jugador 2 ha elegido: " + P2);

if(P1 == piedra){
    if(P2 == tijeras){
        console.log("El jugador 1 ha ganado");
    }else if(P2 == papel){
        console.log("El jugador 2 ha ganado");
    }else if(P2 == piedra){
        console.log("Es un empate");
    }
}
if(P1 == papel){
    if(P2 == piedra){
        console.log("El jugador 1 ha ganado");
    }else if(P2 == tijeras){
        console.log("El jugador 2 ha ganado");
    }else if(P2 == papel){
        console.log("Es un empate");
    }
}
if(P1 == tijeras){
    if(P2 == papel){
        console.log("El jugador 1 ha ganado");
    }else if(P2 == piedra){
        console.log("El jugador 2 ha ganado");
    }else if(P2 == tijeras){
        console.log("Es un empate");
    }
}