
function Cargar(){

//Se extraen los datos de la tabla 

let P1A =document.getElementById("P1A").value;
let P1B = parseInt(document.getElementById("P1B").value);
let P1C = document.getElementById("P1C").value;

let P2A = document.getElementById("P2A").value;
let P2B = parseInt(document.getElementById("P2B").value);
let P2C = document.getElementById("P2C").value;

let P3A = document.getElementById("P3A").value;
let P3B = parseInt(document.getElementById("P3B").value);
let P3C = document.getElementById("P3C").value;

let P4A = document.getElementById("P4A").value;
let P4B = parseInt(document.getElementById("P4B").value);
let P4C = document.getElementById("P4C").value;

let P5A = document.getElementById("P5A").value;
let P5B = parseInt(document.getElementById("P5B").value);
let P5C = document.getElementById("P5C").value;

let P6A = document.getElementById("P6A").value;
let P6B = parseInt(document.getElementById("P6B").value);
let P6C = document.getElementById("P6C").value;

let P7A = document.getElementById("P7A").value;
let P7B = parseInt(document.getElementById("P7B").value);
let P7C = document.getElementById("P7C").value;

let P8A = document.getElementById("P8A").value;
let P8B = parseInt(document.getElementById("P8B").value);
let P8C = document.getElementById("P8C").value;

let P9A = document.getElementById("P9A").value;
let P9B = parseInt(document.getElementById("P9B").value);
let P9C = document.getElementById("P9C").value;

let P10A = document.getElementById("P10A").value;
let P10B = parseInt(document.getElementById("P10B").value);
let P10C = document.getElementById("P10C").value;




// Muestra los dato en el Menu 

document.getElementById("P1AA").innerHTML = P1A;
document.getElementById("P1AB").innerHTML = P1B;
document.getElementById("P1AC").innerHTML = P1C;

document.getElementById("P2AA").innerHTML = P2A;
document.getElementById("P2AB").innerHTML = P2B;
document.getElementById("P2AC").innerHTML = P2C;

document.getElementById("P3AA").innerHTML = P3A;
document.getElementById("P3AB").innerHTML = P3B;
document.getElementById("P3AC").innerHTML = P3C;

document.getElementById("P4AA").innerHTML = P4A;
document.getElementById("P4AB").innerHTML = P4B;
document.getElementById("P4AC").innerHTML = P4C;

document.getElementById("P5AA").innerHTML = P5A;
document.getElementById("P5AB").innerHTML = P5B;
document.getElementById("P5AC").innerHTML = P5C;

document.getElementById("P6AA").innerHTML = P6A;
document.getElementById("P6AB").innerHTML = P6B;
document.getElementById("P6AC").innerHTML = P6C;

document.getElementById("P7AA").innerHTML = P7A;
document.getElementById("P7AB").innerHTML = P7B;
document.getElementById("P7AC").innerHTML = P7C;

document.getElementById("P8AA").innerHTML = P8A;
document.getElementById("P8AB").innerHTML = P8B;
document.getElementById("P8AC").innerHTML = P8C;

document.getElementById("P9AA").innerHTML = P9A;
document.getElementById("P9AB").innerHTML = P9B;
document.getElementById("P9AC").innerHTML = P9C;

document.getElementById("P10AA").innerHTML = P10A;
document.getElementById("P10AB").innerHTML = P10B;
document.getElementById("P10AC").innerHTML = P10C;

document.getElementById("opc1").innerHTML = P1A;
document.getElementById("opc2").innerHTML = P2A;
document.getElementById("opc3").innerHTML = P3A;
document.getElementById("opc4").innerHTML = P4A;
document.getElementById("opc5").innerHTML = P5A;
document.getElementById("opc6").innerHTML = P6A;
document.getElementById("opc7").innerHTML = P7A;
document.getElementById("opc8").innerHTML = P8A;
document.getElementById("opc9").innerHTML = P9A;
document.getElementById("opc10").innerHTML = P10A;


}

let Total = 0;
let contador = 0;
let N1=0 , N2 =0 , N3 =0, N4 =0;
let P1=0 , P2 =0 , P3 =0, P4 =0;

function Ordenar(){

contador = contador + 1;



let P1A =document.getElementById("P1A").value;
let P1B = parseInt(document.getElementById("P1B").value);

let P2A = document.getElementById("P2A").value;
let P2B = parseInt(document.getElementById("P2B").value);

let P3A = document.getElementById("P3A").value;
let P3B = parseInt(document.getElementById("P3B").value);

let P4A = document.getElementById("P4A").value;
let P4B = parseInt(document.getElementById("P4B").value);

let P5A = document.getElementById("P5A").value;
let P5B = parseInt(document.getElementById("P5B").value);

let P6A = document.getElementById("P6A").value;
let P6B = parseInt(document.getElementById("P6B").value);

let P7A = document.getElementById("P7A").value;
let P7B = parseInt(document.getElementById("P7B").value);
let P7C = document.getElementById("P7C").value;

let P8A = document.getElementById("P8A").value;
let P8B = parseInt(document.getElementById("P8B").value);

let P9A = document.getElementById("P9A").value;
let P9B = parseInt(document.getElementById("P9B").value);

let P10A = document.getElementById("P10A").value;
let P10B = parseInt(document.getElementById("P10B").value);

let opccion = document.getElementById("opc").value;


if(contador == 1){
    if(opccion == 1){
        N1 = P1A;
        P1 = P1B;
    }
   else if(opccion == 2){
        N1 = P2A;
        P1 = P2B;
    }
    else if(opccion == 3){
        N1 = P3A;
        P1 = P3B;
    }
    else if(opccion == 4){
        N1 = P4A;
        P1 = P4B;
    }
    else if(opccion == 5){
        N1 = P5A;
        P1 = P5B;
    }
    else if(opccion == 6){
        N1 = P6A;
        P1 = P6B;
    }
    else if(opccion == 7){
        N1 = P7A;
        P1 = P7B;
    }
    else if(opccion == 8){
        N1 = P8A;
        P1 = P8B;
    }
    else if(opccion == 9){
        N1 = P9A;
        P1 = P9B;
    }
    else if(opccion == 10){
        N1 = P10A;
        P1 = P10B;
    }

document.getElementById("Plato1").innerHTML = N1;
document.getElementById("Precio1").innerHTML = P1;

}

if(contador == 1){
    if(opccion == 1){
        N1 = P1A;
        P1 = P1B;
    }
   else if(opccion == 2){
        N1 = P2A;
        P1 = P2B;
    }
    else if(opccion == 3){
        N1 = P3A;
        P1 = P3B;
    }
    else if(opccion == 4){
        N1 = P4A;
        P1 = P4B;
    }
    else if(opccion == 5){
        N1 = P5A;
        P1 = P5B;
    }
    else if(opccion == 6){
        N1 = P6A;
        P1 = P6B;
    }
    else if(opccion == 7){
        N1 = P7A;
        P1 = P7B;
    }
    else if(opccion == 8){
        N1 = P8A;
        P1 = P8B;
    }
    else if(opccion == 9){
        N1 = P9A;
        P1 = P9B;
    }
    else if(opccion == 10){
        N1 = P10A;
        P1 = P10B;
    }

document.getElementById("Plato1").innerHTML = N1;
document.getElementById("Precio1").innerHTML = P1;

}

if(contador == 2){
    if(opccion == 1){
        N2 = P1A;
        P2 = P1B;
    }
   else if(opccion == 2){
        N2 = P2A;
        P2 = P2B;
    }
    else if(opccion == 3){
        N2 = P3A;
        P2 = P3B;
    }
    else if(opccion == 4){
        N2 = P4A;
        P2 = P4B;
    }
    else if(opccion == 5){
        N2 = P5A;
        P2 = P5B;
    }
    else if(opccion == 6){
        N2 = P6A;
        P2 = P6B;
    }
    else if(opccion == 7){
        N2 = P7A;
        P2 = P7B;
    }
    else if(opccion == 8){
        N2 = P8A;
        P2 = P8B;
    }
    else if(opccion == 9){
        N2 = P9A;
        P2 = P9B;
    }
    else if(opccion == 10){
        N2 = P10A;
        P2 = P10B;
    }

document.getElementById("Plato2").innerHTML = N2;
document.getElementById("Precio2").innerHTML = P2;

}
if(contador == 3){
    if(opccion == 1){
        N3 = P1A;
        P3 = P1B;
    }
   else if(opccion == 2){
        N3 = P2A;
        P3 = P2B;
    }
    else if(opccion == 3){
        N3 = P3A;
        P3 = P3B;
    }
    else if(opccion == 4){
        N3 = P4A;
        P3 = P4B;
    }
    else if(opccion == 5){
        N3 = P5A;
        P3 = P5B;
    }
    else if(opccion == 6){
        N3 = P6A;
        P3 = P6B;
    }
    else if(opccion == 7){
        N3 = P7A;
        P3 = P7B;
    }
    else if(opccion == 8){
        N3 = P8A;
        P3 = P8B;
    }
    else if(opccion == 9){
        N3 = P9A;
        P3 = P9B;
    }
    else if(opccion == 10){
        N3 = P10A;
        P3 = P10B;
    }

document.getElementById("Plato3").innerHTML = N3;
document.getElementById("Precio3").innerHTML = P3;

}
if(contador == 4){
    if(opccion == 1){
        N4 = P1A;
        P4 = P1B;
    }
   else if(opccion == 2){
        N4 = P2A;
        P4 = P2B;
    }
    else if(opccion == 3){
        N4 = P3A;
        P4 = P3B;
    }
    else if(opccion == 4){
        N4 = P4A;
        P4 = P4B;
    }
    else if(opccion == 5){
        N4 = P5A;
        P4 = P5B;
    }
    else if(opccion == 6){
        N4 = P6A;
        P4 = P6B;
    }
    else if(opccion == 7){
        N4 = P7A;
        P4 = P7B;
    }
    else if(opccion == 8){
        N4 = P8A;
        P4 = P8B;
    }
    else if(opccion == 9){
        N4 = P9A;
        P4 = P9B;
    }
    else if(opccion == 10){
        N4 = P10A;
        P4 = P10B;
    }

document.getElementById("Plato4").innerHTML = N4;
document.getElementById("Precio4").innerHTML = P4;

}

Total = P1 + P2 + P3 + P4;

document.getElementById("Total").innerHTML = Total;


}


function Eliminar(){

    if(contador == 1){
        document.getElementById("Plato1").innerHTML = "";
        document.getElementById("Precio1").innerHTML = "";
        contador = contador -1;
        Total = 0;
    }
    else if (contador == 2){
        document.getElementById("Plato2").innerHTML = "";
        document.getElementById("Precio2").innerHTML = "";
        contador = contador -1;
        Total = Total - P2;
    }
    else if (contador == 3){
        document.getElementById("Plato3").innerHTML = "";
        document.getElementById("Precio3").innerHTML = "";
        contador = contador -1;
        Total = Total - P3;
    }
    else if (contador == 4){
        document.getElementById("Plato4").innerHTML = "";
        document.getElementById("Precio4").innerHTML = "";
        contador = contador -1;
        Total = Total - P4;
    }
    document.getElementById("Total").innerHTML = Total;


}

let GananciaFinal = 0;

function Finalizar( ) {
    document.getElementById("Plato1").innerHTML = "";
    document.getElementById("Precio1").innerHTML = "";
    document.getElementById("Plato2").innerHTML = "";
    document.getElementById("Precio2").innerHTML = "";
    document.getElementById("Plato3").innerHTML = "";
    document.getElementById("Precio3").innerHTML = "";
    document.getElementById("Plato4").innerHTML = "";
    document.getElementById("Precio4").innerHTML = "";
    document.getElementById("Nuevo").innerHTML = "Ingresar Nuevo Pedido";


GananciaFinal = GananciaFinal + Total;
document.getElementById("Total").innerHTML = "";
Total = 0;
contador = 0;



}


function Ganancias(){
    localStorage.setItem("Ganancia", GananciaFinal);

    var ganancias = localStorage.getItem("Ganancia");
    document.getElementById("Ganancia").innerHTML = ganancias;
    document.getElementById("Mensaje1").innerHTML = "Ganancia del dia de hoy";
    document.getElementById("Mensaje2").innerHTML = "Escribe algo bonito o borra la linea uwu <3";

   

}

