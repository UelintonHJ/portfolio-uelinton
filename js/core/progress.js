export function initProgress() {
    const progressBar = document.querySelector(".reading-progress");

    if (!progressBar) return;

    let ticking = false;

    function updateProgress() {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollHeight <= 0) {
            progressBar.style.width = '0%';
            return;
        }

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = `${progress}%`;
    }

    function onScroll() {
        if (ticking) return;

        requestAnimationFrame(() => {
            updateProgress();
            ticking = false;
        });

        ticking = true;
    }

    window.addEventListener("scroll", onScroll);

    updateProgress();
}