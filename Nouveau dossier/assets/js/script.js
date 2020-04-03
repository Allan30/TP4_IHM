var element = document.getElementById("click");
var element2 = document.getElementById("grid");
var element3 = document.getElementById("ok");


element.addEventListener("click",function(event){
    event.preventDefault();
    console.log("c'est cliqué");
    element3.classList.add("list");
});


element.addEventListener("grid",function(event){
    event.preventDefault();
    console.log("c'est cliqué");
    element3.classList.remove("list");
});

var le_ul = document.getElementById("afficher");


function afficher(){
    event.preventDefault();

    var newComment = document.createElement('li');
    var comment = document.getElementById("pseudo").value;

    comment += " " + document.getElementById("comment").value;
    newComment.textContent = comment;
    le_ul.appendChild(newComment);

    document.getElementById("comment").value = "";
    document.getElementById("pseudo").value = "";
}

var increment = document.getElementById("number").innerHTML;

function plusOne(){
    event.preventDefault();

    increment++;

    document.getElementById("number").innerHTML = increment;
}

var panier = document.getElementById("panier");

var image = document.createElement("img");
var nom =  document.createElement("text");
var prix = document.createElement("number")
var br = document.createElement('br');

function ajouterAuPanier(){
    event.preventDefault();

    image.src = document.getElementById("image").src;
    nom.innerText = document.getElementById("nom").innerText;
    prix.innerHTML = document.getElementById("prix").innerHTML;

    panier.appendChild(image);
    panier.appendChild(nom);
    panier.appendChild(br);
    panier.appendChild(prix);
}