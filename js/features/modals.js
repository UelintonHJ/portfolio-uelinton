import { UI } from '../core/ui.js'

const modals = { project: null, article: null }

let lastFocusedElement = null

export const Modal = {
    open(type, data) {
        UI.setState({
            modal: {
                isOpen: true,
                type,
                data
            }
        })
    },

    close() {
        UI.setState({
            modal: {
                isOpen: false,
                type: null,
                data: null
            }
        })
    }
}

export function initModals() {
    modals.project = document.querySelector('.modal-project')
    modals.article = document.querySelector('.modal-article')

    if (!modals.project || !modals.article) {
        console.error('Modal elements not found')
        return
    }

    const projectClose = modals.project.querySelector('.modal-close')
    const articleClose = modals.article.querySelector('.modal-close')

    projectClose?.addEventListener('click', () => {
        Modal.close()
    })

    articleClose?.addEventListener('click', () => {
        Modal.close()
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && UI.state.modal.isOpen) {
            Modal.close()
        }
    })

    modals.project.addEventListener('click', (event) => {
        if (event.target === modals.project) {
            Modal.close()
        }
    })

    modals.article.addEventListener('click', (event) => {
        if (event.target === modals.article) {
            Modal.close()
        }
    })
}

UI.subscribe(({ modal }) => {
    if (!modals.project || !modals.article) {
        return
    }

    if (!modal.isOpen) {
        closeAll()
        return
    }

    const el = modals[modal.type]

    if (!el) return

    const renderers = {
        project: renderProject,
        article: renderArticle
    }

    renderers[modal.type]?.(
        el,
        modal.data
    )

    open(el)
})

function renderProject(el, data) {

    const textFields = {
        '.modal-title': 'title',
        '.modal-problem': 'problem',
        '.modal-decisions': 'decisions',
        '.modal-impact': 'impact',
        '.modal-learnings': 'learnings',
        '.modal-mistakes': 'mistakes'
    }

    const linkFields = {
        '.modal-demo': 'demo',
        '.modal-repo': 'repo'
    }

    Object.entries(textFields).forEach(([selector, key]) => {
        const element = el.querySelector(selector)

        if (!element) return

        element.textContent = data[key]
    })

    Object.entries(linkFields).forEach(([selector, key]) => {
        const element = el.querySelector(selector)

        if (!element) return

        element.href = data[key]
    })

    const roadmap = el.querySelector('.modal-roadmap')
    roadmap.innerHTML = ''

    if (data.roadmap?.length) {
        data.roadmap.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item
            roadmap.appendChild(li)
        })
    }
}

function renderArticle(el, data) {
    el.querySelector('.modal-article-title').textContent = data.title
    el.querySelector('.modal-article-content').innerHTML = data.content
}

function open(el) {
    lastFocusedElement = document.activeElement

    document.body.style.overflow = 'hidden'

    el.classList.add('open')
    el.setAttribute('aria-hidden', 'false')

    const first = el.querySelector(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )

    first?.focus()
}

function closeAll() {
    Object.values(modals).forEach(el => {
        if (!el) return

        el.classList.remove('open')
        el.setAttribute('aria-hidden', 'true')
    })

    document.body.style.overflow = ''
    lastFocusedElement?.focus()
}
