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

elements = document.querySelectorAll(".add-to-cart");

for(var element of elements){
    element.addEventListener('click', function(event){
        event.preventDefault();
        plusOne();
        ajouterAuPanier(event.target.parentNode);
      });
}


var panier = document.getElementById("panier");

function ajouterAuPanier(element){
    event.preventDefault();
    panier.appendChild(element);

}

