/******************************
 * VARIABLES GLOBALES
 ******************************/
let ulgallery = document.querySelector('ul');
let gallery = document.querySelectorAll('li img');// liste des img dans li
let pictures = document.querySelectorAll('picture img');
let fondu = document.querySelector('.div_fondu'); // effet fondu blanc
let index = 0; // picture à afficher au chgt de la page
let varIndex = 0;
let indexFondu = 1; //fondu 1 seule fois par mouseover


/******************************
 * FONCTIONS
 ******************************/
function display( pictures,index )
{
    for(let picture of pictures) { // tableau envoyé en paramètres
        let imgTarget = picture.getAttribute('data-index');// str (nbr 0 à 3)
        picture.removeAttribute('style');
        console.log(index);
        if(parseInt(imgTarget) == index){
            picture.setAttribute('style','display:block');
        }
    }
}

function fonduFunc(){
    setTimeout(function(){
        fondu.setAttribute('style','background-color:#FFF;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;transition:opacity .3s');
    },300)
    fondu.setAttribute('style','background-color:#FFF;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0.9');

           
}

/******************************
 * CODE PRINCIPAL
 ******************************/
document.addEventListener('DOMContentLoaded', function(){

    // pour pouvoir afficher le fondu en absolute
    document.querySelector('picture').setAttribute('style','position:relative') 
    for( let i = 0; i < gallery.length ; i++ ){ 
        gallery[i].setAttribute('data-index',i); // écrire les data index
                                                 //  aux listes
        pictures[i].setAttribute('data-index',i); // des images.
    }
    display(pictures,index);
    ulgallery.addEventListener('mouseover', function(e){
        varIndex = index;// si e.target m'envoie un NaN on garde l'ancienne valeur d'index
        index = e.target.getAttribute('data-index');
        if( isNaN(index) || index === null){
            index = varIndex;
        }
        if(indexFondu == 1){
            fonduFunc();   
            display(pictures,index);
        }
        indexFondu = 0;
    });
    
    ulgallery.addEventListener('mouseout', function(e){
        // let event = e.target;
        varIndex = index;
        // index = event.getAttribute('data-index');
        index = e.target.getAttribute('data-index');
        if( isNaN(index) || index === null){   
            index = varIndex;
        }    
        // display(pictures,index);
        indexFondu = 1
      
    });
});