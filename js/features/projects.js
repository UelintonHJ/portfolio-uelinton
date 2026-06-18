import { Modal } from './modals.js'

export function initProjects() {
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            Modal.open('project', {
                title: btn.dataset.title,
                problem: btn.dataset.problem,
                decisions: btn.dataset.decisions,
                learnings: btn.dataset.learnings,
                mistakes: btn.dataset.mistakes,
                roadmap: btn.dataset.roadmap,
                demo: btn.dataset.demo,
                repo: btn.dataset.repo
            })
        })
    })
}
