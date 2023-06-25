window.sr = ScrollReveal({
    reset: true
})

ScrollReveal().reveal('.main__subTitile', {
    delay: 150
})
ScrollReveal().reveal('.sectionSobre__textContainer__text', {
    delay: 150
})
ScrollReveal().reveal('.sectionSobre__imgContainer__img', {
    delay: 150
})
ScrollReveal().reveal('.cardBody__text', {
    delay: 150
})

var statusLogin = localStorage['statusLogin'];

if (statusLogin == 'true'){
    document.getElementById("div_login").style.visibility = "hidden";
    document.getElementById("addAlojamento").style.visibility = "visible";
}else{
    document.getElementById("addAlojamento").style.visibility = "hidden";
    document.getElementById("div_login").style.visibility = "visible";
}