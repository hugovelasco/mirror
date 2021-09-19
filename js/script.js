let video = document.getElementById("video");

function retroceder() { video.currentTime -= 10; }

function avancar() { video.currentTime += 10; }

function diminuir_vel() { video.playbackRate -= 0.1; }

function aumentar_vel() { video.playbackRate += 0.1; }

function play() { 
        video.play(); 
        video.volume = 1.0;
}

function pause() { video.pause(); }

function volume_up() { video.volume += 0.1;}

function volume_down() { video.volume -= 0.1;}

function mute() { 
    
    if(video.muted === false){
        video.muted = true;
    } else {
        video.muted = false;
        video.volume = 1.0;
    }

 }

function stop() {
    video.pause();
    video.currentTime = 0;
    video.playbackRate = 1.0;
}