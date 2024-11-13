import getIdFromUrl from "./getIdFromUrl.js"
import getData  from "./getdata.js"

async function giveID(){
    const id = getIdFromUrl()
    const data = await getData(id);    
    const title = document.getElementById('title')

    title.innerHTML = data['title'];
    const placeholder = document.getElementById('placeholder-image');
    placeholder.src = data['avatar'];
        
}
    

window.addEventListener('load', giveID)
