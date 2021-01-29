/**Slick js */

$(document).ready(function () {
    $('.slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true
    });
});


/*Menu animado*/
window.onscroll = function () {
    /*console.log('eje y: ' + window.scrollY);*/
    menuAnimado();
}

if (window.location.href.indexOf('index') > -1) {
    function menuAnimado() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            document.querySelector('.encabezado').style.top = '0';
        } else {
            document.querySelector('.encabezado').style.top = '-65px';
        }
    }
} else {
    function menuAnimado() {
        if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
            document.querySelector('.encabezado').style.top = '0';
        } else {
            document.querySelector('.encabezado').style.top = '-65px';
        }
    }
}





/*Menu-Movil*/

document.querySelector('.menu-movil').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('show');
});

/*Cerrar*/
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('show');
});


/*Acordeon*/
var mostrar = document.getElementsByClassName("btn");
var img = document.getElementsByClassName("img");
var i;
for (i = 0; i < mostrar.length; i++) {
    mostrar[i].addEventListener("click", function () {
        console.log("adasd");
        this.classList.toggle("activo");

        var mostrado = this.nextElementSibling;

        if (mostrado.style.maxHeight) {
            mostrado.style.maxHeight = null;



        } else {
            mostrado.style.maxHeight = mostrado.scrollHeight + "px";

        }

    });
}




// $(document).ready(function () {
//     if (window.location.href.indexOf('index') > -1) {
//         $('.bxslider').bxSlider({
//             mode: 'fade',
//             captions: true,
//             auto: true,
//             stopAutoOnClick: true,
//             infiniteLoop: true,
//             slideWidth: 1350
//         });
//     }
// });