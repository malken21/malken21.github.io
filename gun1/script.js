let Fullscreen = false;
function audio(){
    var audio = new Audio();
    audio.src = "gun1.mp3";
    audio.play();
    window.navigator.vibrate(200);
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