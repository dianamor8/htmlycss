document.addEventListener('DOMContentLoaded', function () {
    //Cargado de navbar
    var sidesnav = document.querySelectorAll('.sidenav');
    var instances_sides = M.Sidenav.init(sidesnav, { edge: "left" });
    //Cargado de parallax
    var parallax = document.querySelectorAll('.parallax');
    var instances_parallax = M.Parallax.init(parallax);
    //Cargado de tap target
    var tap_target = document.querySelectorAll('.tap-target');
    var instances_tap_target = M.TapTarget.init(tap_target);


});


document.getElementById("info").addEventListener("click", function (event) {
    var instance = M.TapTarget.getInstance(document.getElementById("tap-target"));
    var div_texto = document.getElementById('texto-info');
    div_texto.innerHTML = '';
    var p = document.createElement('p');
    p.innerHTML = "Medidas: " + window.innerWidth + " x " + window.innerHeight;
    div_texto.appendChild(p);
    p = document.createElement('p');
    p.innerHTML = "Navegador: " + navigator.appCodeName + " versión " + navigator.appVersion;
    div_texto.appendChild(p);
    p = document.createElement('p');
    p.innerHTML = "Plataforma: " + navigator.platform;
    div_texto.appendChild(p);
    p = document.createElement('p');
    p.innerHTML = "Lenguaje: (" + navigator.language + ")";
    div_texto.appendChild(p);
    instance.open();
});








/*window.addEventListener("resize", function () {
    if(window.innerWidth<=993){
    }
});*/



