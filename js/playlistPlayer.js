const musicBtn = document.querySelectorAll(".music-btn");
const musicAudio = document.querySelectorAll(".music-btn audio");

for(let i=0; i<musicBtn.length; i++){
    musicBtn[i].addEventListener("click", function(){
        playSong(this);
    });
}

function playSong(song){
    stopAllSongs(); //Para qualque música que estaja tocando

    song.children[2].play(); //Começa a tocar a música selecionada
}

function stopAllSongs(){
    musicAudio.forEach(audio => {
        audio.pause();
    });
}