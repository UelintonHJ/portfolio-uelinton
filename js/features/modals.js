import { UI } from '../core/ui.js'
import { engineeringDetails } from '../data/engineering.js'

const modals = { project: null, article: null, engineering: null }

let lastFocusedElement = null;

export const Modal = {
    open(type, data) {
        UI.setState({
            modal: {
                isOpen: true,
                type,
                data
            }
        });
    },

    close() {
        UI.setState({
            modal: {
                isOpen: false,
                type: null,
                data: null
            }
        });
    }
}

export function initModals() {
    modals.project = document.querySelector('.modal-project');
    modals.article = document.querySelector('.modal-article');
    modals.engineering = document.querySelector('.modal-engineering');

    if (!modals.project || !modals.article || !modals.engineering) {
        console.error('Modal elements not found');
        return
    }

    registerKeyboardEvents();
    registerEngineeringCards();
    registerCloseButtons();
    registerBackdropEvents();
}

function registerKeyboardEvents() {
    document.addEventListener('keydown', onKeyDown);
}

function onKeyDown(event) {
    if (event.key === 'Escape' && UI.state.modal.isOpen) {
        Modal.close();
    }
}

function registerEngineeringCards() {
    document.querySelectorAll('.engineering-card').forEach(card => {
        card.addEventListener('click', onEngineeringCardClick);
    });
}

function onEngineeringCardClick(event) {
    const card = event.currentTarget;
    const id = card.dataset.engineering;

    Modal.open('engineering', engineeringDetails[id]);
}

function registerCloseButtons() {
    Object.values(modals).forEach(modal => {
        modal
            ?.querySelector('.modal-close')
            ?.addEventListener('click', Modal.close);
    });
}

function registerBackdropEvents() {
    Object.values(modals).forEach(modal => {
        modal?.addEventListener('click', onBackdropClick);
    });
}

function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
        Modal.close();
    }
}

const RENDERERS = {
    project: renderProject,
    article: renderArticle,
    engineering: renderEngineering
}

UI.subscribe(({ modal }) => {
    if (!modals.project || !modals.article) {
        return
    }

    if (!modal.isOpen) {
        closeAll();
        return
    }

    const el = modals[modal.type]

    if (!el) return;

    RENDERERS[modal.type]?.(
        el,
        modal.data
    );

    open(el);
})

const TEXT_FIELDS = {
    '.modal-title': 'title',
    '.modal-problem': 'problem',
    '.modal-decisions': 'decisions',
    '.modal-impact': 'impact',
    '.modal-learnings': 'learnings',
    '.modal-mistakes': 'mistakes'
}

const LINK_FIELDS = {
    '.modal-demo': 'demo',
    '.modal-repo': 'repo'
}

function renderProject(el, data) {
    updateFields(el, TEXT_FIELDS, (element, key) => {
        element.textContent = data[key];
    });

    updateFields(el, LINK_FIELDS, (element, key) => {
        element.href = data[key];
    });

    const roadmap = el.querySelector('.modal-roadmap')
    roadmap.innerHTML = '';

    if (data.roadmap?.length) {
        data.roadmap.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            roadmap.appendChild(li);
        });
    }
}

function updateFields(el, fields, callback) {
    Object.entries(fields).forEach(([selector, key]) => {
        const element = el.querySelector(selector);

        if (!element) return;

        callback(element, key);
    });
}

function renderArticle(el, data) {
    el.querySelector('.modal-article-title').textContent = data.title;
    el.querySelector('.modal-article-content').innerHTML = data.content;
}

function renderEngineering(el, data) {
    el.querySelector('.modal-engineering-title').textContent = data.title;
    el.querySelector('.modal-engineering-content').innerHTML = data.content;
}

function open(el) {
    lastFocusedElement = document.activeElement;

    document.body.style.overflow = 'hidden';

    el.classList.add('open');
    el.setAttribute('aria-hidden', 'false');

    const first = el.querySelector(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    first?.focus();
}

function closeAll() {
    Object.values(modals).forEach(el => {
        if (!el) return;

        el.classList.remove('open');
        el.setAttribute('aria-hidden', 'true');
    })

    document.body.style.overflow = '';
    lastFocusedElement?.focus();
}
