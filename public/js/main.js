
/** ***** OPACITÉ DU TITRE *****/

var textTransform = () => {
    
    var monTitre = document.querySelector('#pageTitle h1');
    monTitre.classList.add('fade');
}
window.setTimeout(textTransform,1000)

/********************************************************** */
/** ***** CRÉATION DES TÂCHES *****/

let leBouton  = document.getElementsByClassName('btn')[0];

let ajouterTache = () => {
    
    let leInput = document.querySelector('#pageTitle input');

    if (leInput.value != '') {
        let mesTaches = document.getElementById('mesTaches');
        let laTache = document.createElement('li');
        laTache.innerHTML = leInput.value + ` <i class=" far fa-trash-alt"></i> <i class=" far fa-edit"></i> <i class=" far fa-check-square"></i>`;
        mesTaches.prepend(laTache);
    }
/** changer les inputs */
    let changerIcones = (even) => {
        let trashes = document.getElementsByClassName('fa-trash-alt');
        let edits =  document.getElementsByClassName('fa-edit');
        let checks = document.getElementsByClassName('fa-check-square');

        /** suppression de la tache */
        if (even.target.classList.value === ' far fa-trash-alt') {

            for (let i = 0; i < trashes.length; i++) {
                if (even.target == trashes[i]){
                    trashes[i].parentElement.remove();
                };
            };
        }
        /** tâche : fait ou à faire  */
        if (even.target.classList.value === ' far fa-check-square') {
            for (let i = 0; i < checks.length; i++) {
                if (even.target == checks[i]){
                    trashes[i].parentElement.classList.toggle('done');       
                };
            };
        };

        /** modification */
        if (even.target.classList.value === ' far fa-edit') {
            
            for (let i = 0; i < edits.length; i++) {
                
                if (even.target == edits[i]){
                    let listeParent = edits[i].parentElement;
                    let newInput = document.createElement('input');
                    newInput.classList.add('inputs');
                    newInput.value = listeParent.innerText; // sauvegarde du texte 
                    listeParent.firstChild.data = ''; // suppression du texte
                    listeParent.innerHTML = ''; //suppression des icones
                    listeParent.innerHTML = `<i class="fas fa-save"></i>`
                    listeParent.appendChild(newInput);
                };
            };
            
        }

        /**fonction pour sauvegarder */

        let save = document.getElementsByClassName('fa-save');
        
        let saved = (even) => {
            console.dir(even.parentElement.children[1]);

            let contenuInput = even.parentElement.children[1].value;
            even.parentElement.children[1].remove() //suppression de l'input
            even.parentElement.innerHTML = contenuInput + ` <i class=" far fa-trash-alt"></i> <i class=" far fa-edit"></i> <i class=" far fa-check-square"></i>`;// remplacement de l'input
               
                    let trash = document.getElementsByClassName('fa-trash-alt')[0];
                    let edit =  document.getElementsByClassName('fa-edit')[0];
                    let check = document.getElementsByClassName('fa-check-square')[0];
                    
                    /** FOR POUR LES ADDDEVENTLISTENER */
                    
                    
                    trash.addEventListener('click', changerIcones);
                    edit.addEventListener('click', changerIcones);
                    check.addEventListener('click', changerIcones);

        };
        for (let i = 0; i < save.length; i++) {
        save[i].addEventListener('click', (event) => {
            saved(event.target);
        });
        };
        

    };
    
    let trash = document.getElementsByClassName('fa-trash-alt')[0];
    let edit =  document.getElementsByClassName('fa-edit')[0];
    let check = document.getElementsByClassName('fa-check-square')[0];
    
    /** FOR POUR LES ADDDEVENTLISTENER */
    
    
    trash.addEventListener('click', changerIcones);
    edit.addEventListener('click', changerIcones);
    check.addEventListener('click', changerIcones);
    
}

leBouton.addEventListener('click', ajouterTache);