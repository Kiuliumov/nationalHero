import getIdFromUrl from "./getIdFromUrl.js"

function giveID(){
    const id = getIdFromUrl()
    if (id > 8){
        const p = document.getElementsByTagName('p')[0]
        p.innerHTML = 'Id not found.'
        return;

    }
    const p = document.getElementsByTagName('p')[0]
    p.innerHTML = id;
    
}

window.addEventListener('load', giveID)
