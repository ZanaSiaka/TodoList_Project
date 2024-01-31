"use strict";

const form = document.getElementById("form")
const valeurTache = document.getElementById("valeurTache")
const taches = document.getElementById("taches")
const btn = document.getElementById("btn")
const autache = document.getElementById("autache")


form.addEventListener("submit", function(event){
    event.preventDefault();

    const img = document.createElement("img")
    img.src = "Image/Delete.png"

    
    const li = document.createElement("li")
    li.innerHTML = valeurTache.value + " " + img


    img.onclick = function(){
        li.remove()
    }
    

    li.appendChild(img)
    taches.appendChild(li)

    if (valeurTache.value == ""){
        autache.style.display = "block"
    }else{
        autache.style.display = "none"
    }

    localStorage.setItem("valeur", valeurTache.value)

})

function supprimer(element){

}