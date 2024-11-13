import getIdFromUrl from "./getIdFromUrl.js"
import getData  from "./getdata.js"

async function giveID(){
    const id = getIdFromUrl()
    if (id > 8){
        const p = document.getElementsByTagName('p')[0]
        p.innerHTML = 'Id not found.'
        return;

    }
    const p = document.getElementsByTagName('p')[0]
    const data = await getData(id);
   p.innerHTML = JSON.stringify(data);
    
}

window.addEventListener('load', giveID)
