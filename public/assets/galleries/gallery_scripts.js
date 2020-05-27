function goBack() {
    window.history.back()
}

function doLayout() {
    let winHeight, winWidth;
    winHeight = window.innerHeight ? window.innerHeight : $(window).height();
    winWidth = window.innerWidth ? window.innerWidth : $(window).width();
    $('#juicebox-content').height(parseInt(winHeight) - 37).width(parseInt(winWidth)); //37 pixels prevents the thumbnails from being cut off
}

$(document).ready(function () {
    doLayout();
    $(window).bind('resize', doLayout);
    new juicebox({
        containerid: 'juicebox-container'
    });
});