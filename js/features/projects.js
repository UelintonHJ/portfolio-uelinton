import { Modal } from './modals.js';
import { projects } from '../data/projects.js';
import { qsa } from '../utils/dom.js';

export function initProjects() {
    qsa('.btn-details').forEach(button => {
        button.addEventListener('click', onProjectDetailsClick);
    });

    function onProjectDetailsClick(event) {
        const button = event.currentTarget;
        const projectId = button.dataset.project

        const project = projects.find(
            project => project.id === projectId
        );

        if (!project) {
            console.error(`Project not found: ${projectId}`);
            return
        }

        Modal.open('project', project)
    }
}