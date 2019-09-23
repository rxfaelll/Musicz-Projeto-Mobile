let musicBtn = document.querySelectorAll(".music-btn");
let musicAudio = document.querySelectorAll(".music-btn audio");

for(let i = 0; i < musicBtn.length; i++){
    musicBtn[i].addEventListener("click", function(){
        playSong(this);
    });
}

function playSong(song){

    stopAllSongs(); //Para qualque música que estaja tocando

    song.classList.add("highlight-song"); //Dá o feedback visual da música que ta tocando

    let playSong = song.children[2];
    playSong.play(); //Começa a tocar a música selecionada
    
    
    playSong.addEventListener("timeupdate", function() {
        var currentTime = playSong.currentTime;
        var duration = playSong.duration;
        $('.player-progress-bar').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},100,'linear');
    });
}

function stopAllSongs(){
    //Para todas as músicas que estão tocando
    musicAudio.forEach(audio => {
        audio.pause();
    });

    //Tira o highlight do botão
    for (let i = 0; i < musicBtn.length; i++) {
        musicBtn[i].classList.remove("highlight-song");
    }
}