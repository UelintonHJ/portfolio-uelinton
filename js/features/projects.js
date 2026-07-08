import { Modal } from './modals.js'
import { projects } from '../data/projects.js'

export function initProjects() {
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const project = projects.find(
                p => p.id === btn.dataset.project
            )

            if (!project) {
                console.error(
                    `Project not found: ${btn.dataset.project}`
                )

                return
            }

            Modal.open('project', project)
        })
    })
}
