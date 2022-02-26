let textbox = "";
const jsonData= [
    {"after":"ꓮ","before":["A"]},
    {"after":"ꓐ","before":["B"]},
    {"after":"ꓚ","before":["C"]},
    {"after":"ꓓ","before":["D"]},
    {"after":"ꓰ","before":["E"]},
    {"after":"ꓝ","before":["F"]},
    {"after":"ꓖ","before":["G"]},
    {"after":"ꓧ","before":["H"]},
    {"after":"ꓲ","before":["I"]},
    {"after":"ꓙ","before":["J"]},
    {"after":"ꓗ","before":["K"]},
    {"after":"ꓡ","before":["L"]},
    {"after":"ꓟ","before":["M"]},
    {"after":"ꓠ","before":["N"]},
    {"after":"ꓳ","before":["O"]},
    {"after":"ꓑ","before":["P"]},
    {"after":"𝘘","before":["Q"]},
    {"after":"ꓣ","before":["R"]},
    {"after":"ꓢ","before":["S"]},
    {"after":"ꓔ","before":["T"]},
    {"after":"ꓴ","before":["U"]},
    {"after":"ꓦ","before":["V"]},
    {"after":"ꓪ","before":["W"]},
    {"after":"ꓫ","before":["X"]},
    {"after":"ꓬ","before":["Y"]},
    {"after":"ꓜ","before":["Z"]}
]

function input(){
    textbox = document.getElementById("text").value;

    for(let loop1=0;loop1<jsonData.length;loop1++){
        for(let loop2=0;loop2<jsonData[loop1].before.length;loop2++){
            textbox = textbox.replace(new RegExp(jsonData[loop1].before[loop2],"g"),jsonData[loop1].after);
        };
    };
    if(textbox != ""){
        document.getElementById('Discord').innerHTML = textbox;
    }else{
        document.getElementById('Discord').innerHTML = "結果";
    }
}

function copy(){
    if(textbox != ""){
        navigator.clipboard.writeText(textbox);
        alert("クリックボードにコピーしました");
    }
}