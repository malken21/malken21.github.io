var myAlert = function (response) {
    var fn = function () {

        let url = new URL(window.location.href);
        let params = url.searchParams;

        window.location.href = `./?count=${params.get('count')+1}`;
    };
    setTimeout(fn, 1000);
};
