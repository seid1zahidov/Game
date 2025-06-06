var Bmw = document.querySelector(".Bmw");
var Merc = document.querySelector(".Merc");
function movePlayer(element, incrX, incrY) {
    var _a, _b;
    var x = Number((_a = element.getAttribute('data-x')) !== null && _a !== void 0 ? _a : '0') + incrX;
    var y = Number((_b = element.getAttribute('data-y')) !== null && _b !== void 0 ? _b : '0') + incrY;
    element.style.transform = "translate(".concat(x, "px, ").concat(y, "px) scaleX(").concat(incrX >= 0 ? 1 : -1, ")");
    element.setAttribute('data-x', x.toString());
    element.setAttribute('data-y', y.toString());
}
window.addEventListener('keydown', function (e) {
    if (Bmw) {
        switch (e.key) {
            case 'ArrowRight':
                Bmw.classList.add('caminar');
                movePlayer(Bmw, 10, 0);
                break;
            case 'ArrowLeft':
                Bmw.classList.add('caminar');
                movePlayer(Bmw, -10, 0);
                break;
            case 'ArrowDown':
                Bmw.classList.add('caminar');
                movePlayer(Bmw, 0, 10);
                break;
            case 'ArrowUp':
                Bmw.classList.add('caminar');
                movePlayer(Bmw, 0, -10);
                break;
        }
    }
    if (Merc) {
        switch (e.keyCode) {
            case 68: // D
                Merc.classList.add('caminar');
                movePlayer(Merc, 10, 0);
                break;
            case 65: // A
                Merc.classList.add('caminar');
                movePlayer(Merc, -10, 0);
                break;
            case 83: // S
                Merc.classList.add('caminar');
                movePlayer(Merc, 0, 10);
                break;
            case 87: // W
                Merc.classList.add('caminar');
                movePlayer(Merc, 0, -10);
                break;
        }
    }
});
window.addEventListener('keyup', function () {
    Bmw === null || Bmw === void 0 ? void 0 : Bmw.classList.remove('caminar');
    Merc === null || Merc === void 0 ? void 0 : Merc.classList.remove('caminar');
});
