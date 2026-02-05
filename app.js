const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('shrink', window.scrollY > 50);
    });
};