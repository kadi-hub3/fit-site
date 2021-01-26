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




//Lopp Through Text Fade
// let texts = document.querySelectorAll(".text-item");

// let prev = null;
// let animate = (curr, currIndex) => {
//     let index = (currIndex + 1) % texts.length
//     setTimeout(() => {
//         if (prev) {
//             prev.className = "";
//         }
//         curr.className = "show";
//         prev = curr;
//         animate(texts[index], index);
//     }, 3000);
// }

// animate(texts[0], 0);


//Nav Opening & Closing
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}