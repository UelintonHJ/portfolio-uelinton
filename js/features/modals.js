export function initModals() {
    const projectModal = document.querySelector('.modal-project');
    const projectTitle = projectModal.querySelector('.modal-title');
    const projectProblem = projectModal.querySelector('.modal-problem');
    const projectDecisions = projectModal.querySelector('.modal-decisions');
    const projectLearnings = projectModal.querySelector('.modal-learnings');
    const projectMistakes = projectModal.querySelector('.modal-mistakes');
    const projectDemo = projectModal.querySelector('.modal-demo');
    const projectRepo = projectModal.querySelector('.modal-repo');
    const projectClose = projectModal.querySelector('.modal-close');
    const projectRoadmap = projectModal.querySelector('.modal-roadmap');

    const articleModal = document.querySelector('.modal-article');
    const articleTitle = articleModal.querySelector('.modal-article-title');
    const articleContent = articleModal.querySelector('.modal-article-content');
    const articleClose = articleModal.querySelector('.modal-close');

    let lastFocusedElement = null;

    function trapFocus(modal, event) {
        if (event.key !== 'Tab') {
            return;
        }

        const focusableElements = modal.querySelectorAll(
            'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) {
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
            if (document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }

    function openProjectModal(data) {
        projectTitle.textContent = data.title;
        projectProblem.textContent = data.problem;
        projectDecisions.textContent = data.decisions;
        projectLearnings.textContent = data.learnings;
        projectMistakes.textContent = data.mistakes;
        projectRoadmap.innerHTML = '';
        projectDemo.href = data.demo;
        projectRepo.href = data.repo;

        if (data.roadmap) {
            data.roadmap.split('|').forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                projectRoadmap.appendChild(li);
            });
        }

        lastFocusedElement = document.activeElement;

        document.body.style.overflow = 'hidden';

        projectModal.classList.add('open');
        projectModal.setAttribute('aria-hidden', 'false');

        const firstFocusableElement = projectModal.querySelector(
            'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        firstFocusableElement?.focus();
    }

    function closeProjectModal() {
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        lastFocusedElement?.focus();
    }

    document.addEventListener('keydown', (event) => {
        if (projectModal.classList.contains('open')) {
            trapFocus(projectModal, event);
        }

        if (articleModal.classList.contains('open')) {
            trapFocus(articleModal, event);
        }
    });

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
            openProjectModal({
                title: btn.dataset.title,
                problem: btn.dataset.problem,
                decisions: btn.dataset.decisions,
                learnings: btn.dataset.learnings,
                mistakes: btn.dataset.mistakes,
                roadmap: btn.dataset.roadmap,
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
}
