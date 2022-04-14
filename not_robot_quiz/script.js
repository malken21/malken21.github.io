let parameter = Number(new URL(window.location.href).searchParams.get('count'));

if (isNaN(parameter)) {
    parameter = 0;
}

function count() {
    document.getElementById("count").innerHTML = parameter;
}

let Reload = function () {
    setTimeout(function () {
        window.location.href = `./?count=${parameter + 1}`;
    }, 1000);
};
