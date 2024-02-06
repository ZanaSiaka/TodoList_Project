"use strict";

const form = document.getElementById("form")
const valeurTache = document.getElementById("valeurTache")
const taches = document.getElementById("taches")
const btn = document.getElementById("btn")
const autache = document.getElementById("autache")


// if (valeurTache == ""){
//     autache.style.display = "block"
// }else{
//     autache.style.display = "none"
// }

autache.style.display = (taches.innerHTML == '')? "block" : "none"



window.addEventListener("load",recuperer())
const imgdel = document.querySelectorAll(".Delete")

for (let img of imgdel){
    img.addEventListener("click", function(){
        supprimer(img.parentElement)
    })
}

function recuperer(){

    for(var i = 0; i<localStorage.length; i++){
        const li = document.createElement("p")
        li.innerHTML = localStorage.getItem("valeur");
        taches.appendChild(li);
    }
}
form.addEventListener("submit", function(event){
    event.preventDefault();

    const img = document.createElement("img")
    img.src = "Image/Delete.png"
    img.classList.add("Delete")


    const li = document.createElement("li")
    li.innerHTML = valeurTache.value


    img.onclick = function(){
        li.remove()
    }



    li.appendChild(img)
    taches.appendChild(li)



    valeurTache.value = ""

    localStorage.setItem("valeur", taches.innerHTML)


})

function supprimer(element){
    element.remove()
    localStorage.setItem("valeur", taches.innerHTML)
        
    autache.style.display = (taches.innerHTML == '')? "block" : "none"

}

// if (taches.innerHTML == ''){
//     autache.style.display = "block"
// }else{
//     autache.style.display = "none"
// }


