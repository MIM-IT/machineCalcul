// définition des variables

let suppr = document.getElementById("suppr"); 
let screen = document.getElementById("screen");
let reset = document.getElementById("reset");
let nombreUn = 0;
let nombreDeux = 0;
let res = 0;
let operateur = document.querySelectorAll("[data-num]"); // on nome le groupe de sélecteur [data-num]-->operateur
console.log(operateur);

// initiation des spécials boutons 
suppr.addEventListener("click",function() {
    supprLastCar();
}); 


reset.addEventListener("click", function () {
    myReset();

});

let entree = document.getElementById("entree");
entree.addEventListener("click",function(){
    nombreDeux = parseFloat(document.getElementById("screen").value); 
    // myReset();
    console.log(nombreDeux);
    monResultat(); 
    
});

// initiation des opérateurs 

const division = document.getElementById("division"); 
division.addEventListener("click",function(){
    operateur = division.dataset.num; // on implémente l'opérateur division depuis le selecteur data-num (on reprend le chemin)
    nombreUn = parseFloat(document.getElementById("screen").value); 
    myDisplay("/");
    myReset();
});

const multiplication = document.getElementById("multiplication");
multiplication.addEventListener("click",function(){
    operateur = multiplication.dataset.num;
    nombreUn = parseFloat(document.getElementById("screen").value); 
    myDisplay("*");
    myReset();
}); 


const soustraction = document.getElementById("soustraction");
soustraction.addEventListener("click",function(){
    operateur = soustraction.dataset.num;
    nombreUn = parseFloat(document.getElementById("screen").value); 
    myDisplay("-");
    myReset();
}); 

const addition = document.getElementById("addition");
addition.addEventListener("click", function () {
    operateur = addition.dataset.num;
    nombreUn = parseFloat(document.getElementById("screen").value);
    console.log(operateur);
    myDisplay("+");
    myReset();
});
const pts = document.getElementById("pts");
pts.addEventListener("click", function () {
    myDisplay(".");
});


// *******init des chiffres
const neuf = document.getElementById("neuf");
neuf.addEventListener("click", function () {
    myDisplay(9);
});

const sept = document.getElementById("sept");
sept.addEventListener("click",function(){
    myDisplay(7); 
}); 


const huit = document.getElementById("huit");
huit.addEventListener("click",function(){
    myDisplay(8);
}); 

const quatre = document.getElementById("quatre");
quatre.addEventListener("click",function(){
    myDisplay(4);
}); 
const cinq = document.getElementById("cinq");
cinq.addEventListener("click", function () {
    myDisplay(5);
});

const six = document.getElementById("six");
six.addEventListener("click", function () {
    myDisplay(6);
});

const un = document.getElementById("un");
un.addEventListener("click", function () {
    myDisplay(1);
});
const deux = document.getElementById("deux");
deux.addEventListener("click", function () {
    myDisplay(2);
});
const trois = document.getElementById("trois");
trois.addEventListener("click", function () {
    myDisplay(3);
});
const zero = document.getElementById("zero");
zero.addEventListener("click", function () {
    myDisplay(0)
});

/********Les Fonctions************** */
function myDisplay(valeur){
    screen.value += valeur; 
}

function myReset(){
    screen.value = ""; 
}

function supprLastCar() {
    screen.value = screen.value.slice(0,-1); 
}

console.log(nombreUn); 
console.log(nombreDeux);

function monResultat(){
    console.log(operateur);
    switch(operateur){
        
        case "*":
            res = nombreUn * nombreDeux;
            screen.value = res; 
            //myDisplay(res);
            break;
        case "+":
            res = nombreUn + nombreDeux;
            screen.value = res; 
            console.log(res);
            //myDisplay(res);
            break;
        case "-":
            res = nombreUn - nombreDeux;
            screen.value = res; 
            //myDisplay(res);
            break;
        case "/":
            res = nombreUn / nombreDeux;
            screen.value = res;
            //myDisplay(res); 
            break;
    }
}