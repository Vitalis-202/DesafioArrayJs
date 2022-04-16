
//Creación de objeto games
class Game{
    //Metodo constructor
    constructor(id,nombre,precio){
        this.id = parseFloat(id);
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
let id=1;

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
//JSON - Almacenar la lista de juegos.
const guardarLocal = () =>{
    localStorage.setItem("gameListJSON",JSON.stringify(gameList));
}

//Evento agregar Game a la lista
//Capturar los contenedores
let contenedorRow = document.createElement("div");
let contenedorColEmpty = document.createElement("div");
let contenedorColEmpty2 = document.createElement("div");
let contenedorColPrice = document.createElement("div");
let contenedorColName = document.createElement("div");
let contenedorColId = document.createElement("div");


//Programación del boton agregar
const addGame =() => {
    
    let lista = document.getElementById("contenedorLista");
    let name = document.getElementById("inputName").value;
    let price = document.getElementById("inputPrice").value;

    if(name != ""){
        if(price!=0){
            //Clave nombre del juego y el valor el objeto
            //Captura Contenedores
            contenedorRow = document.createElement("div");
            contenedorColEmpty = document.createElement("div");
            contenedorColEmpty2 = document.createElement("div");
            contenedorColPrice = document.createElement("div");
            contenedorColName = document.createElement("div");
            contenedorColId = document.createElement("div");
            //Asignar las clases
            contenedorRow.className = "row 1";
            contenedorColEmpty.className = "col-md-1";
            contenedorColEmpty2.className = "col-md-1";
            contenedorColPrice.className = "col-md-3";
            contenedorColId.className = "col-md-3";
            contenedorColName.className = "col-md-4";
            //Asignar los valores
            game = new Game(id,name,price);//Creación del objeto game
            contenedorColId.innerHTML = `<span>${id}</span>`;
            contenedorColPrice.innerHTML = `${price} USD`;
            contenedorColName.innerHTML = `<b>${name}</b>.`
            //Contener
            contenedorRow.append(contenedorColEmpty);
            contenedorRow.append(contenedorColId);
            contenedorRow.append(contenedorColName);
            contenedorRow.append(contenedorColPrice);
            contenedorRow.append(contenedorColEmpty2);
            lista.append(contenedorRow);
            cargarGame(game);//Cargando al arreglo game el juego creado
            guardarLocal(game.nombre,game);
            console.log(gameList);//revisar si se están creando
            id++;
        }else{
            alert("Debe indicar precio lista de juego.")
        }
    }else{
        alert("Debe indicar nombre de juego")
    }
}

const cleanList=()=>{
    id = 1;
    let lista = document.getElementById("contenedorLista");
    lista.innerHTML = 
        `<div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-3" id="gameId"><h4>ID</h4></div>
            <div class="col-md-4" id="gameName"><h4>TITLE</h4></div>
            <div class="col-md-3" id="gamePrice"><h4>PRICE (USD)</h4></div>
            <div class="col-md-1"></div>
        </div>`;
    gameList = [];//Limpiar el arreglo
    localStorage.clear()//Limpiar el localstorage
    console.log(gameList)
    
}