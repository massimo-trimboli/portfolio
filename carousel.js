let contenu = document.querySelectorAll(".content .frame .foto");

//display first
let current = 0;
refreshDisplay();



//event listners
let fleche1 = document.querySelector(".content .fleche:first-of-type");
let fleche2 = document.querySelector(".content .fleche:nth-of-type(2)");

fleche1.addEventListener("click", function(){
    carousel(-1);
});
fleche2.addEventListener("click", function(){
    carousel(1);
});





function carousel(direction){
    current += direction;

    if (current > contenu.length - 1){
        current = 0;
    }
    else if(current < 0){
        current = (contenu.length - 1);
    }

    refreshDisplay();
}



function refreshDisplay(){
    for (let elm of contenu){
    elm.classList.add("hidden");
    }
    contenu[current].classList.remove("hidden");
}