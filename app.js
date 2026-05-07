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

const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
}

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 24 24" style="color: rgb(74, 85, 101);"><path fill="currentColor" d="M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20"></path></svg>`;

const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 24 24" style="color: rgb(74, 85, 101);"><path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"></path></svg>`;

function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    themeToggle.setAttribute(
        'aria-pressed',
        theme === 'dark'
    );
    themeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
});

const projectFilterButtons = document.querySelectorAll('.project-filters .filter-btn')
const projectCards = document.querySelectorAll('.projects .card');

projectFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        projectFilterButtons.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const category = btn.dataset.category;

        projectCards.forEach(card => {
            const cardCategories = (card.dataset.category || '').split(' ');
            const shouldShow =
                category === 'all' || cardCategories.includes(category);

            card.classList.toggle('is-hidden', !shouldShow);
        });
    });
});

const articleFilterButtons = document.querySelectorAll('.article-filters .filter-btn');
const articleCards = document.querySelectorAll('.articles .card');

articleFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        articleFilterButtons.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const category = btn.dataset.category;

        articleCards.forEach(card => {
            const cardCategories = (card.dataset.category || '').split(' ');
            const shouldShow =
                category === 'all' || cardCategories.includes(category);

            card.classList.toggle('is-hidden', !shouldShow);
        });
    });
});

const projectModal = document.querySelector('.modal-project');
const projectTitle = projectModal.querySelector('.modal-title');
const projectProblem = projectModal.querySelector('.modal-problem');
const projectDecisions = projectModal.querySelector('.modal-decisions');
const projectLearnings = projectModal.querySelector('.modal-learnings');
const projectDemo = projectModal.querySelector('.modal-demo');
const projectRepo = projectModal.querySelector('.modal-repo');
const projectClose = projectModal.querySelector('.modal-close');

const articleModal = document.querySelector('.modal-article');
const articleTitle = articleModal.querySelector('.modal-article-title');
const articleContent = articleModal.querySelector('.modal-article-content');
const articleClose = articleModal.querySelector('.modal-close');

function openProjetctModal(data) {
    projectTitle.textContent = data.title;
    projectProblem.textContent = data.problem;
    projectDecisions.textContent = data.decisions;
    projectLearnings.textContent = data.learnings;
    projectDemo.href = data.demo;
    projectRepo.href = data.repo;

    document.body.style.overflow = 'hidden';
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
}

function closeProjectModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function openArticleModal(data) {
    articleTitle.textContent = data.title;
    articleContent.innerHTML = data.content;

    document.body.style.overflow = 'hidden';
    articleModal.classList.add('open');
    articleModal.setAttribute('aria-hidden', 'false');
}

function closeArticleModal() {
    articleModal.classList.remove('open');
    articleModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.querySelectorAll('.projects .details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        openProjetctModal({
            title: btn.dataset.title,
            problem: btn.dataset.problem,
            decisions: btn.dataset.decisions,
            learnings: btn.dataset.learnings,
            demo: btn.dataset.demo,
            repo: btn.dataset.repo
        });
    });
});

document.querySelectorAll('.articles .details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        openArticleModal({
            title: btn.dataset.title,
            content: btn.dataset.content
        });
    });
});

projectClose.addEventListener('click', closeProjectModal);
articleClose.addEventListener('click', closeArticleModal);

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
});

articleModal.addEventListener('click', (e) => {
    if (e.target === articleModal) closeArticleModal();
});

const progressBar = document.querySelector(".reading-progress");

if (progressBar) {
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const height =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / height) * 100;

        document.querySelector(".reading-progress").style.width =
            progress + "%";
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return;
    }

    if (projectModal.classList.contains('open')) {
        closeProjectModal();
    }

    if (articleModal.classList.contains('open')) {
        closeArticleModal();
    }
});
