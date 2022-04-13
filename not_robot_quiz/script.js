var onloadCallback = function () {
    grecaptcha.render('recaptcha', {
        'sitekey': "6LeTtYgdAAAAANgraANZ3KqodcCgWmONpdV4xsil",
        'callback': myAlert //コールバック関数名
    });
    var myAlert = function (response) {
        var fn = function () {
            console.log("1秒経過しました");
        };
        setTimeout(fn, 1000);
    };
};
