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
var leContenuDuPanier = [];

function plusOne(){
    event.preventDefault();

    increment++;

    document.getElementById("number").innerHTML = increment;
}

function lessOne(){
    event.preventDefault();

    increment--;

    document.getElementById("number").innerHTML = increment;
}

elements = document.querySelectorAll(".add-to-cart");

for(var element of elements){
    element.addEventListener('click', function(event){
        event.preventDefault();
        plusOne();
        console.log(event.target.parentNode.dataset.id);
        ajouterAuPanier(event.target.parentNode.getElementsByClassName('title')[0],event.target.parentNode.dataset.price,event.target.parentNode.dataset.id);
      });
}


var panier = document.getElementById("panier");
var prixTot = document.createElement("integer");
panier.appendChild(prixTot);

function ajouterAuPanier(nom,prix,id){
    event.preventDefault();
    
    if(leContenuDuPanier.find(elementCourantDuTableau => elementCourantDuTableau[0] === id)){
        leContenuDuPanier.find(elementCourantDuTableau => elementCourantDuTableau[0] === id)[1].innerHTML++;
        prixTot.innerHTML += parseInt(prix);
        return;
    }
    
        var compteur = document.createElement("integer");
        var item = document.createElement('li');
        var pl = document.createElement("BUTTON");
        var pltxt = document.createTextNode("+");
        var mo = document.createElement("BUTTON");
        var motxt = document.createTextNode("-");

        prixTot.innerHTML += parseInt(prix);

        pl.appendChild(pltxt);
        mo.appendChild(motxt);

        compteur.innerHTML = 1;
        item.textContent = nom.textContent + " : " + prix + "€ \n nombre d'unité(s) : ";
        item.appendChild(compteur);

        panier.appendChild(item);
        panier.appendChild(mo);
        panier.appendChild(pl);

        pl.addEventListener('click', function(event){
            event.preventDefault();
            plusOne();
            prixTot.innerHTML += parseInt(prix);
            leContenuDuPanier.find(elementCourantDuTableau => elementCourantDuTableau[0] === id)[1].innerHTML++;
            });

        mo.addEventListener('click', function(event){
            event.preventDefault();
            if(leContenuDuPanier.find(elementCourantDuTableau => elementCourantDuTableau[0] === id)[1].innerHTML > 1){
                lessOne();
                leContenuDuPanier.find(elementCourantDuTableau => elementCourantDuTableau[0] === id)[1].innerHTML--;
                prixTot.innerHTML -= parseInt(prix);
            }
            else{
                lessOne();
                leContenuDuPanier.find(elementCourantDuTableau => elementCourantDuTableau[0] === id)[1].innerHTML--;
                prixTot.innerHTML -= parseInt(prix);
                panier.removeChild(item);
                panier.removeChild(mo);
                panier.removeChild(pl);
                leContenuDuPanier.pop(leContenuDuPanier.find(elementCourantDuTableau => elementCourantDuTableau[0] === id));
            }
            });

        leContenuDuPanier.push([id,compteur]);

}

