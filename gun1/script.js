function audio(){
    var audio = new Audio();
    audio.src = "gun1.mp3";
    audio.play();
    window.navigator.vibrate(200);
}
function OnButtonClick(){
    console.log("test");
    document.body.requestFullscreen();
}