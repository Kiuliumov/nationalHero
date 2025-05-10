import getIdFromUrl from "./getIdFromUrl.js";
import getData from "./getdata.js";

async function giveID() {
    const id = getIdFromUrl();
    const data = await getData(id);

    if(!id){
        const url = new URL(window.location);
        url.searchParams.set('id', 1);
        window.history.pushState({}, '', url);
        window.location.reload();
        return;
    }

    setupPageContent(data);
    setupAudioControls();
}

function setupPageContent(data) {
    const title = document.getElementById('title');
    const placeholder = document.getElementById('placeholder-image');
    const audio = document.getElementById('audio');
    const text = document.getElementById('text');

    if (!title || !placeholder || !audio || !text) {
        console.error("Missing elements for page content");
        return;
    }

    title.textContent = data.title;
    placeholder.src = data.avatar;
    audio.src = data.audio;
    text.innerHTML = data.text;
}

function setupAudioControls() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const restartBtn = document.getElementById('restart-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const totalTimeEl = document.getElementById('total-time');

    if (!audio || !playBtn || !restartBtn || !progressBar || !currentTimeEl || !totalTimeEl) {
        console.error("Missing audio control elements");
        return;
    }

    playBtn.addEventListener('click', () => togglePlayPause(audio, playBtn));
    restartBtn.addEventListener('click', () => restartAudio(audio, playBtn));

    audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        updateProgressBar(audio, progressBar);
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });
}

function togglePlayPause(audio, playBtn) {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function restartAudio(audio, playBtn) {
    audio.currentTime = 0;
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function updateProgressBar(audio, progressBar) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

export default giveID;
window.addEventListener('load', giveID);
