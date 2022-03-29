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
let game;

//Crear un game
function crearGame(){
    let nombre = prompt("Ingrese nombre:");
    let precio = parseFloat(prompt("Ingrese precio:"));
    const game = new Game(nombre,precio);
    return game;
}
//Cargar un game
function cargarGame(game){
    gameList.push(game);
}
//Eliminar un game
function eliminarUltimoGame(){
    gameList.pop();
}

//Invertir lista
function invertirLista(){
    gameList.reverse();
}

//MENU
let comprobacion;
do{
    comprobacion = prompt("*Simulador Games* "+"\n"+
    "Escoge una alternativa:"+"\n"+
    "1.Agregar Game a la lista."+"\n"+
    "2.Eliminar último Game de la lista."+"\n"+
    "3.Ver lista."+"\n"+
    "4.Lista inversa."+"\n"+
    "5.Salir");

    if(comprobacion === "5"){
        break;
    }else if(comprobacion=="1"){
        game = crearGame();
        console.log(game);
        cargarGame(game);
    }else if(comprobacion=="2"){
        if(gameList.length<1){
            alert("La lista se encuentra vacía, no se puede eliminar registro.")
        }else{
            eliminarUltimoGame();
        }
    }
    else if(comprobacion=="3"){
        let contador=1;
        let texto="";
        gameList.forEach(element => {
            if(contador === 1){
                texto="Game #"+contador+" nombre: "+element.nombre+ " precio: "+element.precio+"\n";
            }else{
                texto=texto + "Game #"+contador+" nombre: "+element.nombre+ " precio: "+element.precio+"\n";
            }
            console.log(texto);
            contador++;
        });
        alert(texto)
    }else if(comprobacion=="4"){
        invertirLista();
        let contador=1;
        let texto="";
        gameList.forEach(element => {
            if(contador === 1){
                texto="Game #"+(gameList.length-contador+1)+" nombre: "+element.nombre+ " precio: "+element.precio+"\n";
            }else{
                texto=texto + "Game #"+(gameList.length-contador+1)+" nombre: "+element.nombre+ " precio: "+element.precio+"\n";
            }
            console.log(texto);
            contador++;
        });
        alert(texto)
        invertirLista();
    }
    else{
        alert("Valor inválido, vuelva a ingresar")
    }
    
}while(comprobacion != "5")