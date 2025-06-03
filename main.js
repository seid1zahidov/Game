var Bmw = document.querySelector(".Bmw");
var Merc = document.querySelector(".Merc");
function movePlayer(element, incrX, incrY) {
    var x = Number(element.getAttribute('data-x')) + incrX;
    var y = Number(element.getAttribute('data-y')) + incrY;
    if (incrX > 0) {
        element.style.transform = " translate(".concat(x, "px, ").concat(y, "px) scaleX(1)");
    }
    else {
        element.style.transform = " translate(".concat(x, "px, ").concat(y, "px) scaleX(-1)");
    }
    element.setAttribute('data-x', x.toString());
    element.setAttribute('data-y', y.toString());
}
window.addEventListener('keydown', function (e) {
    if (Bmw !== null) {
        if (e.key === 'ArrowRight') {
            Bmw.classList.add('caminar');
            movePlayer(Bmw, 10, 0);
        }
        else if (e.key === 'ArrowLeft') {
            Bmw.classList.add('caminar');
            movePlayer(Bmw, -10, 0);
        }else if(e.key === 'ArrowDown'){
            Bmw.classList.add('caminar')
            movePlayer(Bmw, 0, 10)
        }else if(e.key === 'ArrowUp'){
            Bmw.classList.add('caminar')
            movePlayer(Bmw, 0, -10)
        }
    }
        if (Merc !== null) {
        if (e.keyCode === 68) {
            Bmw.classList.add('caminar');
            movePlayer(Merc, 10, 0);
        }
        else if (e.keyCode === 65) {
            Merc.classList.add('caminar');
            movePlayer(Merc, -10, 0);
        }else if(e.keyCode === 83){
            Merc.classList.add('caminar')
            movePlayer(Merc, 0, 10)
        }else if(e.keyCode === 	50){
            Merc.classList.add('caminar')
            movePlayer(Merc, 0, -10)
        }
    }
});
window.addEventListener('keyup', function (e) {
    if (Bmw !== null) {
        Bmw.classList.remove('caminar');
    }
        if (Merc !== null) {
        Merc.classList.remove('caminar');
    }
});
