export const engineeringDetails = {
    componentization: {
        title: "Componentização",
        content: `
            <p>
                Não enxergo componentes apenas como blocos reutilizáveis. Cada componente deve representar uma responsabilidade clara dentro da interface.
            </p>        

            <p>
                Quando um componente começa a acumular regras de negócio, estados diferentes ou responsabilidades distintas, normalmente é um sinal de que ele precisa ser dividido.
            </p>
        
            <p>
                Nos meus projetos procuro:
            </p>

            <ul>
                <li>Separar lógica de renderização;</li>

                <li>Reduzir acoplamento entre componentes;</li>

                <li>Reutilizar apenas quando isso reduz complexidade;</li>

                <li>Evitar abstrações prematuras.</li>
            </ul>

            <p>
                O objetivo não é criar centenas de componentes, mas facilitar manutenção e evolução do sistema.
            </p>
        `
    },

    performance: {
        title: "Performance",
        content: `
            <p>
                Performance não é apenas sobre velocidade de carregamento. Ela está diretamente relacionada à percepção do usuário e à eficiência com que a aplicação utiliza seus recursos.
            </p>

            <p>
                Uma interface rápida deve evitar trabalhos desnecessários, responder de forma previsível às interações e entregar feedback claro durante processos que levam tempo.
            </p>

            <p>
                Nos meus estudos procuro:
            </p>

            <ul>
                <li>Reduzir renderizações e atualizações desnecessárias;</li>

                <li>Carregar recursos apenas quando necessário;</li>

                <li>Utilizar estratégias como debounce e lazy loading quando fazem sentido;</li>

                <li>Criar estados de carregamento que mantenham o usuário informado;</li>

                <li>Evitar problemas de layout e processamento excessivo no navegador.</li>
            </ul>

            <p>
                O objetivo não é otimizar tudo antecipadamente, mas identificar gargalos reais e melhorar a experiência onde existe impacto para o usuário.
            </p>
        `
    },

    scalability: {
        title: "Escalabilidade",
        content: `
            <p>
                Escalabilidade não significa apenas suportar mais usuários ou mais funcionalidades. Também significa permitir que o código continue evoluindo sem aumentar sua complexidade de forma descontrolada.
            </p>

            <p>
                Uma aplicação bem estruturada deve facilitar novas implementações, correções e mudanças futuras.
            </p>

            <p>
                Nos meus projetos procuro:
            </p>

            <ul>
                <li>Separar responsabilidades entre diferentes partes do sistema;</li>

                <li>Manter módulos independentes e com baixo acoplamento;</li>

                <li>Criar estruturas que permitam evolução gradual;</li>

                <li>Evitar soluções específicas que dificultem mudanças futuras;</li>

                <li>Priorizar clareza antes de complexidade.</li>
            </ul>

            <p>
                O objetivo é construir aplicações preparadas para crescer, onde novas funcionalidades possam ser adicionadas sem comprometer a organização existente.
            </p>
        `
    },

    accessibility: {
        title: "Acessibilidade",
        content: `
            <p>
                Acessibilidade faz parte da qualidade de uma interface. Uma aplicação bem construída deve considerar diferentes formas de interação e diferentes necessidades dos usuários.
            </p>

            <p>
                Não se trata apenas de adicionar recursos extras, mas de desenvolver pensando desde o início em uma experiência mais inclusiva.
            </p>

            <p>
                Nos meus projetos procuro:
            </p>

            <ul>
                <li>Utilizar HTML semântico para melhorar interpretação da interface;</li>

                <li>Garantir navegação utilizando teclado;</li>

                <li>Aplicar atributos ARIA quando realmente são necessários;</li>

                <li>Criar estados visuais claros para interações;</li>

                <li>Considerar contraste, legibilidade e hierarquia das informações.</li>
            </ul>

            <p>
                O objetivo é criar interfaces que sejam compreensíveis, utilizáveis e acessíveis para o maior número possível de pessoas.
            </p>
        `
    }
}