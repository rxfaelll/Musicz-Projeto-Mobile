const musicBtn = document.querySelectorAll(".music-btn");
const musicAudio = document.querySelectorAll(".music-btn audio");

for(let i=0; i<musicBtn.length; i++){
    musicBtn[i].addEventListener("click", function(){
        playSong(this);
    });
}

function playSong(song){
    stopAllSongs(); //Para qualque música que estaja tocando

    let playSong = song.children[2];
    playSong.play(); //Começa a tocar a música selecionada
    
    playSong.addEventListener("timeupdate", function() {
        var currentTime = playSong.currentTime;
        var duration = playSong.duration;
        $('.player-progress-bar').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},100,'linear');
    });
}

function stopAllSongs(){
    musicAudio.forEach(audio => {
        audio.pause();
    });
}