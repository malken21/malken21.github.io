let Fullscreen = false;
function audio(){
    vibrate();
    console.log("a")
    window.navigator.vibrate(200);
}
async function vibrate(){
    console.log("b")
    var audio = new Audio();
    audio.src = "gun1.mp3";
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