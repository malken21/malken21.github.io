let parameter = Number(new URL(window.location.href).searchParams.get('count'));

if (isNaN(parameter)) {
    parameter = 0;
}

function count() {
    let test = document.getElementById("count");
    test.innerHTML = parameter;
}

var myAlert = function () {
    setTimeout(function () {
        window.location.href = `./?count=${parameter + 1}`;
    }, 1000);
};
