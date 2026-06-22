import { Modal } from './modals.js'
import { projects } from '../data/projects.js'

export function initProjects() {
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const project = projects.find(
                p => p.id === btn.dataset.projectId
            )

            if (!project) {
                console.error(
                    `Project not found: ${btn.dataset.projectId}`
                )

                return
            }

            Modal.open('project', project)
        })
    })
}
