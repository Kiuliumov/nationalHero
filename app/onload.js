import getIdFromUrl from "./getIdFromUrl.js"
import getData  from "./getdata.js"

async function giveID(){
    const id = getIdFromUrl()
    const data = await getData(id);    
    const title = document.getElementById('title')
    const placeholder = document.getElementById('placeholder-image');
    const audio = document.getElementById('audio');
    const text = document.getElementById('text');

    title.innerHTML = data['title'];
    placeholder.src = data['avatar'];
    audio.src = data['audio'];
    text.innerHTML = data['text']
    console.log(audio.src);
        
}
    

window.addEventListener('load', giveID)
