//Evento agregar Game a la lista
const addGame =() => {
    let gameList = document.getElementById("contenedorLista");
    let name = document.getElementById("inputName").value;
    let price = document.getElementById("inputPrice").value;
    let id=1;
    console.log();
    let contenedorRow = document.createElement("div");
    contenedorRow.className = "row";
    let contenedorColEmpty = document.createElement("div");
    let contenedorColEmpty2 = document.createElement("div");
    let contenedorColPrice = document.createElement("div");
    let contenedorColName = document.createElement("div");
    let contenedorColId = document.createElement("div");
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
    //id++
    id++;
}