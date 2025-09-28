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

//pas rapport au carousel mais je le met la quand même
resizeVideo();



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
    //changer image
    for (let elm of contenu){
    elm.classList.add("hidden");
    }
    contenu[current].classList.remove("hidden");

    //changer compteur
    let compteur = document.querySelector("#compteur");
    // 1/3 - 2/3 - 3/3
    compteur.innerHTML = `${current + 1} / ${contenu.length}`
}






function resizeVideo(){
    //come le css se fait overide par le html et je n'ai pas envie de rétroactivement aller changer
    //toutes les tailes de video, je le ferai ici dans un script qui est deja attache a toutes 
    // les pages
    let lesVids = document.querySelectorAll(".content .frame iframe.foto");
    if(lesVids != null){
        for(let laVid of lesVids){
            laVid.width = 800;
            laVid.height = 450;
        }
    }
}