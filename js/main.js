import { initHeader } from './core/header.js';
import { initTheme } from './core/theme.js';
import { initObservers } from './core/observers.js';
import { initProgress } from './core/progress.js';

import { initFilters } from './features/filters.js';
import { initModals } from './features/modals.js';
import { initNavigation } from './features/navigation.js';
import { initProjects } from './features/projects.js';
import { initArticles } from './features/articles.js';

import { runTests } from './tests/run-tests.js';

initHeader();
initTheme();
initObservers();
initProgress();

initFilters();
initModals();
initNavigation();
initProjects();
initArticles();

const isDevelopment = ['localhost', '127.0.0.1'].includes(location.hostname);

if (isDevelopment) {
    runTests();
}