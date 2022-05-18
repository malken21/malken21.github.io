let parameter = Number(new URL(window.location.href).searchParams.get('count'));

if (isNaN(parameter)) {
    parameter = 0;
}

function count() {
    document.getElementById("count").innerHTML = parameter;
}

var Reload = function () {
    setTimeout(function () {
        window.location.href = `./?count=${parameter + 1}`;
    }, 1000);
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("./serviceWorker.js")
        .then(function (registration) {
            console.log(registration);
        }).catch(function (error) {
            console.log(error);
        });
}