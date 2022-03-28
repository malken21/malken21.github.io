let eye_spam = false

function test(){
    const body = document.getElementById('body');
    const eye_spam_button = document.getElementById("eye_spam_button");
    if(eye_spam==false){
        eye_spam=true
        body.style.backgroundImage = 'url("image/eye_spam.gif")';
        eye_spam_button.innerText = '元に戻すボタン'
    }else{
        eye_spam=false
        body.style.backgroundImage = '';
        eye_spam_button.innerText = '虹色に光るボタン'
    }
};
function test2(){
    console.log(getBase64ImageFromUrl(""));
}