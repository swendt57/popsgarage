function goBack() {
    // window.history.back()
    window.location = "/livery/chrysler_crown_imperial";
}

function doLayout() {
    let winHeight, winWidth;
    winHeight = window.innerHeight ? window.innerHeight : $(window).height();
    winWidth = window.innerWidth ? window.innerWidth : $(window).width();
    $('#juicebox-content').height(parseInt(winHeight)).width(parseInt(winWidth));
}

$(document).ready(function () {
    doLayout();
    $(window).bind('resize', doLayout);
    new juicebox({
        containerid: 'juicebox-container'
    });
});