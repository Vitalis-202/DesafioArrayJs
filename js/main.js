//Creación de objeto games

class Game{
    //Metodo constructor
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    //Metodos custom
    sumarIva(){
        this.precio = this.precio * 1.21;
    };
}
//Arreglo de games
let gameList = [];

//Crear un game
function crearGame(){
    let nombre = prompt("Ingrese nombre:");
    let precio = parseFloat(prompt("Ingrese precio:"));
    const game = new Game(nombre,precio);
    return game;
}
//Cargar un game
function cargarGame(game){
    gameList.push(game)
}

// //MENU
// let comprobacion;
// do{
//     comprobacion = prompt("Ingrese un nombre de polera o escriba FIN para terminar.");

//     if(comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
//         break;
//     }else{
//         nombre = comprobacion;
//         let precio = prompt("Ingrese el precio de la polera");
//         let detalle = prompt("Ingrese el detalle de la polera");
//         let cantidad = prompt("Ingrese la cantidad de la polera");
//         let talla = prompt("Ingrese la talla de la polera");
//         arrayPoleras.push(new Polera(nombre,precio,detalle,cantidad,talla));
//     }
    
// }while(comprobacion != "fin" || comprobacion != "FIN"|| comprobacion != "Fin")


//Ejecucion del código
//Creación del obj
let game = crearGame();
console.log(game);
//Agregar a la lista
cargarGame(game);
console.log(gameList);