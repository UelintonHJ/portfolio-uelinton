export function initProgress() {
    const progressBar = document.querySelector(".reading-progress");
    if (!progressBar) return;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / height) * 100;

        progressBar.style.width = progress + "%";
    });
}