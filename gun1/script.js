let Fullscreen = false;
function audio(){
    setTimeout(function(){
        window.navigator.vibrate(200);
        
    console.log("b");
    },100);
    var audio = new Audio();
    audio.src = "gun1.mp3";
    audio.play();
    console.log("a");
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