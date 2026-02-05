function handleHeaderShrink(header) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        if (Math.abs(window.scrollY - lastScroll) < 10) return;
        header.classList.toggle('shrink', window.scrollY > 50);
        lastScroll = window.scrollY;
    });
}

const header = document.querySelector('header');
if (header) handleHeaderShrink(header);