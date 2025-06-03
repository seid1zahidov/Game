const Bmw = document.querySelector<HTMLElement>(".Bmw");
const Merc = document.querySelector<HTMLElement>(".Merc");

function movePlayer(element: HTMLElement, incrX: number, incrY: number): void {
    const x = Number(element.getAttribute('data-x') ?? '0') + incrX;
    const y = Number(element.getAttribute('data-y') ?? '0') + incrY;

    element.style.transform = `translate(${x}px, ${y}px) scaleX(${incrX >= 0 ? 1 : -1})`;

    element.setAttribute('data-x', x.toString());
    element.setAttribute('data-y', y.toString());
}

window.addEventListener('keydown', (e: KeyboardEvent) => {
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

window.addEventListener('keyup', () => {
    Bmw?.classList.remove('caminar');
    Merc?.classList.remove('caminar');
});
