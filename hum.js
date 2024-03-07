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
        localStorage.removeItem("tache")
        todolist()
        verifierTache()
    }
    verifierTache()
}, false)

function todolist(){
    let val  = ""
    for(let i=0; i<li.innerText.length-1; i++){
        val = val + li.innerText[i]
    }
    localStorage.setItem("tache", val)
    console.log(li)
}

function afficher(){
    conteneur.innerHTML = `<li> ${localStorage.getItem("tache")} <span>X</span></li>`
}

function verifierTache(){
    const noTache = document.querySelector("p")
    if (!localStorage.getItem("tache") || localStorage.getItem("tache") === ''){
        noTache.style.display = "flex"
    }else{
        noTache.style.display = "none"
        console.log(localStorage.length)
    }
}


verifierTache()

afficher()