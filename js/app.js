/******************************
 * VARIABLES GLOBALES
 ******************************/
let ulgallery = document.querySelector('ul');
let gallery = document.querySelectorAll('li img');// liste des img dans li
let pictures = document.getElementsByClassName('picture');
let index = 0; // picture à afficher au chgt de la page


/******************************
 * FONCTIONS
 ******************************/
function display( index )
{
    for(let picture of pictures) { // tableau envoyé en paramètres
        let imgTarget = picture.getAttribute('data-index');// str (nbr 0 à 3)
        // picture.setAttribute('style','display:none');
        console.log(index);
        // console.log(index);
        if(parseInt(imgTarget) == index){
            picture.setAttribute('style','display:block');
        }
    }
}

/******************************
 * CODE PRINCIPAL
 ******************************/
document.addEventListener('DOMContentLoaded', function(){

    for( let i = 0; i < gallery.length ; i++ ){ 
        gallery[i].setAttribute('data-index',i); // écrire les data index
                                                 //  aux listes
        pictures[i].setAttribute('data-index',i); // des images.
    }

    display(index);

    ulgallery.addEventListener('mouseover', function(e){
        let event = e.target;
        index = event.getAttribute('data-index');
        if( isNaN(index) || index === null){
            index = 3;
        }   
           display(index);
           console.log(index);
    })
    
    ulgallery.addEventListener('mouseout', function(e){
        let event = e.target;
        index = event.getAttribute('data-index');
        if( isNaN(index) || index === null){
        
            index = 1;
        }     
           display(index);
           console.log(index);
      
    });
});