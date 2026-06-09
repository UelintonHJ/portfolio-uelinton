export function initHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    let isShrunk = false;
    let ticking = false;

    const shrinkThreshold = 60;
    const expandThreshold = 20;

    function update() {
        const scroll = window.scrollY;

        if (!isShrunk && scroll > shrinkThreshold) {
            header.classList.add('shrink');
            isShrunk = true;
        } else if (isShrunk && scroll < expandThreshold) {
            header.classList.remove('shrink');
            isShrunk = false;
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    });
}