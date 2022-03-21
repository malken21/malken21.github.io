let Fullscreen = false;

let audio = "null";

fetch('gun1.mp3').then(response => response.blob())
.then(data => {
    audio = new Audio(URL.createObjectURL(data));
})

function audio_event(){
    window.navigator.vibrate(200);
    audio.play();
}

function FullscreenEvent(){
    if(Fullscreen==true){
        Fullscreen = false;
        document.exitFullscreen();
    }else{
        Fullscreen = true;
        document.body.requestFullscreen();
    }
}
