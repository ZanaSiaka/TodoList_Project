"use strict";

const form = document.getElementById("form");
const input = document.getElementById("input-box");
const btn = document.getElementById("btn");
const conteneur = document.getElementById("conteneur-liste");


form.addEventListener("submit", function(event){
    if (input.value.trim() === ''){
        alert("Vous devez remplir le champ")
    }else{
        const li = document.createElement("li");
        li.innerHTML = input.value.trim();
        conteneur.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "X";
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
    verifierTache()
}, false)

function todolist(){
    localStorage.setItem("tache", conteneur.innerHTML)
}

function afficher(){
    // const li = document.createElement('li')
    // li.textContent = localStorage.getItem("tache")
    // const span = document.createElement('span')
    // span.textContent = "X"
    // li.appendChild(span)
    // conteneur.appendChild(li)
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