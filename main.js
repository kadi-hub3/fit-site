//First Second slider/workout

$("#slideshow1 > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow1 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow1');
}, 3000);

$("#slideshow2 > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow2 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow2');
}, 3000);


//Nav Opening & Closing
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}