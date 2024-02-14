"use strict";

const form = document.getElementById("form");
const input = document.getElementById("input-box");
const btn = document.getElementById("btn");
const conteneur = document.getElementById("conteneur-liste");

form.addEventListener("submit", function(event){
    if (input.value === ''){
        alert("Vous devez remplir le champ")
    }else{
        const li = document.createElement("li");
        li.innerHTML = input.value;
        conteneur.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span)
    }

    event.preventDefault();
    input.value = ''
    todolist()
})

conteneur.addEventListener("click", function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        todolist()
    }
}, false)

function todolist(){
    localStorage.setItem("données", conteneur.innerHTML)
}

function afficher(){
    conteneur.innerHTML = localStorage.getItem("données")
}

afficher()