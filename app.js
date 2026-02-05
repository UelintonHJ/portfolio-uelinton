function handleHeaderShrink(header) {
    let isShrunk = false;
    const shrinkThreshold = 60;
    const expandThreshold = 20;

    let ticking = false;

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
            window.requestAnimationFrame(update);
            ticking = true;
        }
    });
}

const header = document.querySelector('header');
if (header) handleHeaderShrink(header);