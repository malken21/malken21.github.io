function requestbutton(){
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    fetch(`https://script.google.com/macros/s/AKfycbxYA8zo16so3zlystt-1vTK8GbpRANUZPOdphESCQy2GmEAlQpj_POQtCR8bdaOnpM/exec?from=${from}&to=${to}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.main;
        console.log(data.main);
    });
    document.getElementById('result').innerHTML = "リクエスト中";
}