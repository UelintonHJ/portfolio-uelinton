import { initHeader } from './core/header.js';
import { initTheme } from './core/theme.js';
import { initObservers } from './core/observers.js';
import { initProgress } from './core/progress.js';

import { initFilters } from './features/filters.js';
import { initModals } from './features/modals.js';
import { initNavigation } from './features/navigation.js';

initHeader();
initTheme();
initObservers();
initProgress();
initFilters();
initModals();
initNavigation();