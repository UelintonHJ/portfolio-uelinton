export const projects = [
    {
        id: 'product-list',
        image: 'assets/img/product-list-preview.png',
        tags: [
            'HTML',
            'CSS',
            'JS',
            'API',
            'UX',
            'UI',
        ],
        title: 'Product List',
        problem: 'Criar uma listagem de produtos com busca, filtros e paginação mantendo estado previsível e sincronizado com a URL sem usar frameworks.',
        decisions: 'Separei responsabilidades entre API, estado e UI. Implementei debounce configurável, controle de paginação reutilizável, skeleton loading e tratamento explícito de erro e estado vazio.',
        impact: 'Reduzi chamadas desnecessárias à API durante busca, melhorando a fluidez da interação e tornando o sistema mais responsivo em uso real.',
        learnings: 'Aprendi a estruturar aplicações em JavaScript puro pensando como produto: estado previsível, navegação consistente e feedback claro para o usuário.',
        mistakes: 'Hoje eu teria abstraído parte da lógica de paginação e filtros em módulos reutilizáveis mais cedo. Também organizaria melhor a sincronização entre URL e estado global para reduzir responsabilidade concentrada.',
        roadmap: [
            'Cache inteligente',
            'Persistência de filtros',
            'Testes E2E',
            'Virtualização da lista'
        ],
        demo: 'https://product-list-vanilla-js.vercel.app/',
        repo: 'https://github.com/UelintonHJ/product-list-vanilla-js'
    },
    {
        id: 'checkout-flow',
        image: 'assets/img/checkout-flow-preview.png',
        tags: [
            'React',
            'TailwindCSS',
            'TypeScript',
            'UX',
            'UI',

        ],
        title: 'Checkout Flow',
        problem: 'Simular um fluxo de checkout realista sem backend, garantindo clareza de estados (idle, loading, success, error) e evitando comportamento confuso durante falhas simuladas.',
        decisions: 'Implementei controle global de estado com Context API, criei estados explícitos para cada fase do fluxo e adicionei possibilidade de cancelar confirmação durante loading. Simulei erros como network, timeout e payment_refused para tornar o fluxo resiliente.',
        impact: 'Estruturei um fluxo de checkout com estados explícitos e previsíveis, melhorando a clareza do comportamento da interface em diferentes cenários (sucesso, erro, timeout e cancelamento). Isso reduziu ambiguidades no fluxo e aumentou a consistência da experiência do usuário durante interações críticas.',
        learnings: 'Aprendi a modelar estado de forma explícita e previsível. Entendi como pequenos detalhes de feedback visual reduzem fricção e melhoram percepção de qualidade.',
        mistakes: 'Hoje eu centralizaria ainda mais as transições de estado em uma máquina de estados explicíta para reduzir condicionais espalhadas e tornar o fluxo mais previsível.',
        roadmap: [
            'Integração com Stripe mock', 
            'Retry automático de requisições', 
            'Analytics de abandono de checkout', 
            'Validação avançada de formulário'
        ],
        demo: 'https://checkout-flow-liart.vercel.app/',
        repo: 'https://github.com/UelintonHJ/checkout-flow'
    },
    {
        id: 'saas-onboarding-simulation',
        image: 'assets/img/saas-onboarding-simulation-preview.png',
        tags: [
            'React',
            'TailwindCSS',
            'TypeScript',
            'UX',
            'UI',
        ],
        title: 'SaaS Onboarding Simulation',
        problem: 'Criar uma experiência de onboarding curta e clara, evitando sobrecarga cognitiva e abandono precoce nos primeiros segundos de uso.',
        decisions: 'Dividi o fluxo em etapas progressivas, adicionei indicador de progresso discreto, permiti pular onboarding e implementei persistência via localStorage. Usei microcopy estratégica e Framer Motion para transições suaves.',
        impact: 'Estruturei um onboarding em etapas progressivas para reduzir sobrecarga cognitiva e melhorar a clareza da jornada inicial do usuário. A inclusão de progresso visual, opção de pular e persistência de estado aumentou a previsibilidade do fluxo e reduziu fricção na ativação.',
        learnings: 'Aprendi que front-end não é apenas layout: decisões de fluxo e microcopy impactam ativação e retenção. Pequenas escolhas alteram a percepção de valor do produto.',
        mistakes: 'Hoje eu estruturaria melhor eventos de tracking desde o início para medir abandono e comportamento de navegação sem precisar adaptar o fluxo posterior.',
        roadmap: [
            'Tracking de abandono por etapa',
            'Testes de fluxo com usuários',
            'Personalização de onboarding',
            'Feature flags para experimentos A/B'
        ],
        demo: 'https://saas-onboarding-simulation.vercel.app/',
        repo: 'https://github.com/UelintonHJ/saas-onboarding-simulation'
    },
    {
        id: 'mini-login-system',
        image: 'assets/img/mini-login-system-preview.png',
        tags: [
            'React',
            'TailwindCSS',
            'TypeScript',
            'UX',
            'UI',
        ],
        title: 'Mini Login System',
        problem: 'Simular autenticação realista sem backend, garantindo proteção de rotas, expiração de sessão e mensagens contextuais claras.',
        decisions: 'Implementei  ProtectedRoute, controle de sessão com armazenamento local, mensagens dinâmicas de fluxo e feedback visual para erro de login. Adicionei simulação de expiração para tornar o fluxo mais realista.',
        impact: 'Estruturei um sistema de autenticação simulado com estados claros de sessão, incluindo login, logout e expiração. Isso aumentou a previsibilidade do fluxo e melhorou a comunicação visual de estados críticos como falha de login e sessão expirada.',
        learnings: 'Aprendi a estruturar fluxos condicionais baseados em autenticação e a importância de comunicar claramente estados como logout e sessão expirada.',
        mistakes: 'Hoje eu isolaria melhor a lógica de autenticação simulada da camada visual para facilitar futura integração com backend real.',
        roadmap: [
            'Refresh token simulado',
            'Integração com backend mockado',
            'Remember me persistente',
            'Rate limiting de tentativas'
        ],
        demo: 'https://mini-login-system-zeta.vercel.app',
        repo: 'https://github.com/UelintonHJ/mini-login-system'
    },
    {
        id: 'dashboard-de-metricas',
        image: 'assets/img/dashboard-metricas-preview.png',
        tags: [
            'React',
            'TailwindCSS',
            'TypeScript',
            'UX',
            'UI',
        ],
        title: 'Dashboard de Métricas',
        problem: 'Simular um painel de métricas com foco em leitura rápida, evitando excesso visual e garantindo interpretação clara dos dados.',
        decisions: 'Criei componentes desacoplados, utilizei cores semânticas para tendência (positivo/negativo), implementei skeleton loading e construí gráfico em SVG puro para controle total da renderização.',
        impact: 'Estruturei um dashboard com foco em leitura rápida e hierarquia visual clara, utilizando cores semânticas, skeleton loading e gráficos otimizados em SVG para melhorar a percepção e interpretação dos dados.',
        learnings: 'Aprendi a pensar em hierarquia visual, escaneabilidade e percepção de performance. Nem sempre é sobre usar bibliotecas, mas entender como a informação deve ser consumida.',
        mistakes: 'Hoje eu criaria uma camada de transformação de dados antes da renderização dos gráficos para evitar acoplamento entre visualização e estrutura de dados.',
        roadmap: [
            'Filtros avançados por período',
            'Exportação CSV',
            'Atualização em tempo real',
            'Dark mode'
        ],
        demo: 'https://dashboard-metricas-sepia.vercel.app/',
        repo: 'https://github.com/UelintonHJ/dashboard-metricas'
    },
]