function audio(){
    var audio = new Audio();
    audio.src = "gun1.mp3";
    audio.play();
}
function OnButtonClick(){
    console.log("test");
    document.body.requestFullscreen();
}