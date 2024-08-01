let input = document.getElementById('tarefa');
let areaLista = document.getElementById('areaLista');
let btnTarefa = document.getElementById('addTarefa');
let contador = 0;
let icone = 0;

function addTarefa(){
    novaTarefa = input.value;
    if ((novaTarefa !== "") && (novaTarefa !== null) && (novaTarefa !== undefined)){
        contador++;
        icone++
        areaLista.innerHTML += `<div id="${contador}" class="item">
        <div class="item-icone" onclick="marcarTarefa(${contador}), mudarIcone(${icone})">
            <img id="icon-${icone}" src="icons/circle.png" width="40px" height="40px">
        </div>
        <div onclick="marcarTarefa(${contador}), mudarIcone(${icone})"class="item-nome">
            <h2>${novaTarefa}</h2>
        </div>
        <div onclick="deletar(${contador})" id="item-botao">
            <img src="icons/delete.png" width="40px" height="40px">
        </div>`;
        input.value="";
        input.focus();
    }
}
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        btnTarefa.click();
    }
}) 

function deletar(id){
    itemDeletado = document.getElementById(id);
    itemDeletado.remove();
}
function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');
    if (classe== "item"){
    item.classList.add('clicado');
    item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');
    }
}
function mudarIcone(iconeId) {
    let alternaIcone = document.getElementById(`icon-${iconeId}`);
    if (alternaIcone.src.includes("circle.png")){
        alternaIcone.src = "icons/check.png";
    }
    else {
        alternaIcone.src = "icons/circle.png";
    }
    }
    
