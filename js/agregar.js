//Evento agregar Game a la lista
    
let id=1;
//Capturar los contenedores
let contenedorRow = document.createElement("div");
let contenedorColEmpty = document.createElement("div");
let contenedorColEmpty2 = document.createElement("div");
let contenedorColPrice = document.createElement("div");
let contenedorColName = document.createElement("div");
let contenedorColId = document.createElement("div");


const addGame =() => {
    
    let gameList = document.getElementById("contenedorLista");
    let name = document.getElementById("inputName").value;
    let price = document.getElementById("inputPrice").value;

    if(name != ""){
        if(price!=0){
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
            contenedorColId.innerHTML = `<span>${id}</span>`;
            contenedorColPrice.innerHTML = `${price} USD`;
            contenedorColName.innerHTML = `<b>${name}</b>.`
            //Contener
            contenedorRow.append(contenedorColEmpty);
            contenedorRow.append(contenedorColId);
            contenedorRow.append(contenedorColName);
            contenedorRow.append(contenedorColPrice);
            contenedorRow.append(contenedorColEmpty2);
            gameList.append(contenedorRow);
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
    let gameList = document.getElementById("contenedorLista");
    gameList.innerHTML = 
        `<div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-3" id="gameId"><h4>ID</h4></div>
            <div class="col-md-4" id="gameName"><h4>TITLE</h4></div>
            <div class="col-md-3" id="gamePrice"><h4>PRICE (USD)</h4></div>
            <div class="col-md-1"></div>
        </div>`;
    
}