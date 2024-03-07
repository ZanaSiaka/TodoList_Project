"use strict";

const form = document.getElementById("form");
const input = document.getElementById("input-box");
const btn = document.getElementById("btn");
const conteneur = document.getElementById("conteneur-liste");


form.addEventListener("submit", function(event){
    if (input.value.trim() === ''){
        alert("Vous devez remplir le champ")
    }else{
        li = document.createElement("li");
        li.innerText = input.value.trim();
        conteneur.appendChild(li);
        const span = document.createElement("span");
        span.innerText = "X";
        li.appendChild(span)
    }


    event.preventDefault();
    input.value = ''
    todolist()
    verifierTache()
})

conteneur.addEventListener("click", function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        todolist()
        verifierTache()
    }
}, false)

function todolist(){
    localStorage.setItem("tache", conteneur.firstChild.innerText)
    console.log(li)
}

function afficher(){
    conteneur.innerHTML = localStorage.getItem("tache")

}

function verifierTache(){
    const noTache = document.querySelector("p")
    if (!localStorage.getItem("tache") || localStorage.getItem("tache") === ''){
        console.log('0')
        noTache.style.display = "flex"
    }else{
        console.log('Zana')
        noTache.style.display = "none"
        console.log(localStorage.length)
    }
}


verifierTache()

afficher()