export type Lang = 'pt' | 'en' | 'es';

export type Translation = {
    nav: {
        experience: string; suites: string; arraial: string; faq: string;
        contact: string; reserve: string;
    };
    hero: {
        location: string; titleA: string; titleB: string; titleC: string;
        sub: string; reserve: string; discover: string;
    };
    features: {
        eyebrow: string; titleA: string; titleB: string; lead: string;
        items: { title: string; text: string }[];
    };
    suites: {
        eyebrow: string; titleA: string; titleB: string; titleC: string;
        reserve: string;
        list: { title: string; desc: string; meta: string }[];
    };
    arraial: {
        eyebrow: string; titleA: string; titleB: string; lead: string; cta: string;
        experiences: { title: string; text: string }[];
    };
    testimonials: {
        eyebrow: string; titleA: string; titleB: string;
        list: { quote: string; author: string }[];
    };
    cta: {
        eyebrow: string; titleA: string; titleB: string;
        perks: string[]; reserve: string;
    };
    contact: {
        eyebrow: string; title: string; street: string;
        neighborhood: string; cta: string; pin: string;
    };
    faq: {
        eyebrow: string; titleA: string; titleB: string;
        items: { q: string; a: string }[];
    };
    booking: {
        checkin: string; checkout: string; guests: string; verify: string;
        adults: string; adultsSub: string;
        children: string; childrenSub: string;
        clear: string; done: string; placeholder: string;
        adult: string; adultPlural: string;
        child: string; childPlural: string;
        dateFormat: string;
    };
    footer: {
        tagline: string;
        navTitle: string; reserveTitle: string; socialTitle: string;
        availability: string; directContact: string; cancellation: string;
        copyright: string;
    };
    whatsapp: {
        contactMsg: string;
    };
};

export const dict: Record<Lang, Translation> = {
    pt: {
        nav: {
            experience: 'A pousada', suites: 'Quartos', arraial: 'Arraial',
            faq: 'Dúvidas', contact: 'Contato', reserve: 'Reservar',
        },
        hero: {
            location: 'Arraial do Cabo · Rio de Janeiro',
            titleA: 'Hospede-se', titleB: 'no coração', titleC: 'de Arraial.',
            sub: 'A poucos passos das três praias mais lindas — Prainha, Praia Grande e Praia dos Anjos.',
            reserve: 'Reservar agora', discover: 'Conhecer a pousada',
        },
        features: {
            eyebrow: 'A pousada',
            titleA: 'Conforto no centro', titleB: 'de Arraial do Cabo.',
            lead: 'A poucos minutos das praias e cercada por tudo o que você precisa, a Vila Praiana é o ponto de partida ideal pra descobrir o melhor de Arraial — com toda a comodidade do centro.',
            items: [
                { title: 'Localização privilegiada', text: 'No centro de Arraial, a 10 minutos a pé das três praias principais.' },
                { title: 'Café da manhã incluso',    text: 'Comece o dia com energia: frutas, pães e cafés especiais.' },
                { title: 'Suítes confortáveis',      text: 'Ar-condicionado, Smart TV e tudo que você precisa para descansar bem.' },
                { title: 'Tudo a passos',            text: 'Restaurantes, mercados, bares e farmácias ao redor da pousada.' },
            ],
        },
        suites: {
            eyebrow: 'Acomodações',
            titleA: 'Quartos pensados', titleB: 'para o seu', titleC: 'descanso.',
            reserve: 'Reservar',
            list: [
                {
                    title: 'Quarto Standard Duplo',
                    desc:  'Suíte espaçosa para casais, com ar-condicionado, Smart TV e o conforto necessário para um descanso tranquilo no coração de Arraial.',
                    meta:  'Até 2 hóspedes · Cama de casal',
                },
                {
                    title: 'Quarto Família',
                    desc:  'Suíte ampla com cama de casal, camas de solteiro, frigobar, Smart TV e ar-condicionado. Ideal para famílias que viajam juntas.',
                    meta:  'Até 4 hóspedes · 1 casal + 2 solteiros',
                },
            ],
        },
        arraial: {
            eyebrow: 'O destino',
            titleA: 'Arraial do Cabo,', titleB: 'o Caribe brasileiro.',
            lead: 'Águas transparentes, dunas e o silêncio do entardecer no Pontal. A 10 minutos a pé da pousada você encontra Prainha, Praia Grande e Praia dos Anjos — três cartões-postais da cidade.',
            cta: 'Falar com o concierge',
            experiences: [
                { title: 'Passeio de barco', text: 'Gruta Azul, Prainhas do Pontal e Praia do Forno.' },
                { title: 'Pôr do sol',       text: 'Trilha curta até o mirante mais bonito da região.' },
                { title: 'Mergulho',         text: 'Águas cristalinas e fauna marinha exuberante.' },
                { title: 'Gastronomia',      text: 'Frutos do mar fresquíssimos e cozinha caiçara.' },
            ],
        },
        testimonials: {
            eyebrow: 'Hóspedes',
            titleA: 'O que dizem', titleB: 'de nós.',
            list: [
                { quote: 'Localização perfeita — saímos da pousada e em 10 minutos estávamos na praia. Café da manhã delicioso e atendimento super atencioso.', author: '— Mariana & Felipe, São Paulo' },
                { quote: 'Quarto família espaçoso, super confortável, e cercado por tudo. Voltaremos com certeza.', author: '— Camila R., Belo Horizonte' },
                { quote: 'A melhor escolha em Arraial do Cabo. Pertinho de tudo e com aquele charme de pousada de verdade.', author: '— Lucas A., Curitiba' },
            ],
        },
        cta: {
            eyebrow: 'Reserve direto',
            titleA: 'Sua estadia', titleB: 'começa aqui.',
            perks: ['✓ Melhor preço garantido', '✓ Café da manhã incluso', '✓ Localização central', '✓ Cancelamento flexível'],
            reserve: 'Reservar agora',
        },
        contact: {
            eyebrow: 'Encontre-nos',
            title: 'Arraial do Cabo · RJ',
            street: 'Praça da Independência, 18 · Centro',
            neighborhood: 'Arraial do Cabo · RJ · CEP 28930-000',
            cta: 'Como chegar',
            pin: 'Vila Praiana',
        },
        faq: {
            eyebrow: 'Antes de reservar',
            titleA: 'Tudo o que você', titleB: 'precisa saber.',
            items: [
                { q: 'Quais os horários de check-in e check-out?',
                  a: 'Check-in a partir das 14h e check-out até 12h. Early check-in e late check-out sob disponibilidade — basta combinar com a recepção.' },
                { q: 'O café da manhã está incluso?',
                  a: 'Sim! O café da manhã está incluso em todas as reservas — frutas, pães, ovos e cafés especiais para começar o dia com energia.' },
                { q: 'Qual a distância da pousada até as praias?',
                  a: 'Estamos no centro de Arraial do Cabo, a 10 minutos a pé das três praias mais belas: Prainha, Praia Grande e Praia dos Anjos.' },
                { q: 'O que tem perto da pousada?',
                  a: 'Tudo. Restaurantes, mercados, bares, bancos e farmácias estão a passos da pousada — é a vantagem de ficar no centro.' },
                { q: 'Quais os tipos de quarto?',
                  a: 'Temos quartos Standard Duplo (ideais para casais) e Quartos Família (com cama de casal + camas de solteiro). Todos com ar-condicionado, Smart TV e total conforto.' },
                { q: 'A pousada aceita pets?',
                  a: 'Recebemos pets de pequeno porte mediante consulta prévia. Entre em contato pelo WhatsApp para confirmar disponibilidade.' },
                { q: 'Como funciona o cancelamento?',
                  a: 'Cancelamento gratuito até 7 dias antes do check-in. Em prazos mais curtos, aplicam-se taxas específicas conforme a tarifa contratada.' },
                { q: 'Qual a melhor época para visitar?',
                  a: 'De dezembro a março, as águas são mais cristalinas e quentes — alta temporada. De abril a novembro, clima ameno e diárias mais convidativas.' },
            ],
        },
        booking: {
            checkin: 'Check-in', checkout: 'Check-out',
            guests: 'Hóspedes', verify: 'Verificar disponibilidade',
            adults: 'Adultos', adultsSub: '13 anos ou mais',
            children: 'Crianças', childrenSub: 'até 12 anos',
            clear: 'Limpar', done: 'Concluído', placeholder: '— escolher',
            adult: 'adulto', adultPlural: 'adultos',
            child: 'criança', childPlural: 'crianças',
            dateFormat: "dd 'de' MMM",
        },
        footer: {
            tagline: 'Sua pousada no coração de Arraial do Cabo.',
            navTitle: 'Navegar', reserveTitle: 'Reservar', socialTitle: 'Social',
            availability: 'Disponibilidade', directContact: 'Contato direto', cancellation: 'Política de cancelamento',
            copyright: '© 2026 Pousada Vila Praiana · Todos os direitos reservados',
        },
        whatsapp: {
            contactMsg: 'Olá, gostaria de informações sobre a Pousada Vila Praiana',
        },
    },

    en: {
        nav: {
            experience: 'The inn', suites: 'Rooms', arraial: 'Arraial',
            faq: 'FAQ', contact: 'Contact', reserve: 'Book',
        },
        hero: {
            location: 'Arraial do Cabo · Rio de Janeiro',
            titleA: 'Stay in', titleB: 'the heart', titleC: 'of Arraial.',
            sub: 'Steps away from the three most beautiful beaches — Prainha, Praia Grande and Praia dos Anjos.',
            reserve: 'Book now', discover: 'Discover the inn',
        },
        features: {
            eyebrow: 'The inn',
            titleA: 'Comfort in the heart', titleB: 'of Arraial do Cabo.',
            lead: 'Minutes from the beaches and surrounded by everything you need, Vila Praiana is the ideal base to discover the best of Arraial — with all the convenience of being downtown.',
            items: [
                { title: 'Prime location',     text: 'In the heart of Arraial, a 10-minute walk to the three main beaches.' },
                { title: 'Breakfast included', text: 'Start the day right: tropical fruit, fresh bread and specialty coffee.' },
                { title: 'Comfortable rooms',  text: 'Air conditioning, Smart TV and all you need to rest well.' },
                { title: 'Everything nearby',  text: 'Restaurants, markets, bars and pharmacies right around the corner.' },
            ],
        },
        suites: {
            eyebrow: 'Accommodations',
            titleA: 'Rooms designed', titleB: 'for your', titleC: 'rest.',
            reserve: 'Book',
            list: [
                {
                    title: 'Standard Double Room',
                    desc:  'Spacious suite for couples with air conditioning, Smart TV and all the comfort for a peaceful stay in the heart of Arraial.',
                    meta:  'Up to 2 guests · Queen bed',
                },
                {
                    title: 'Family Room',
                    desc:  'Roomy suite with a queen bed, single beds, mini-fridge, Smart TV and air conditioning. Ideal for families traveling together.',
                    meta:  'Up to 4 guests · 1 queen + 2 singles',
                },
            ],
        },
        arraial: {
            eyebrow: 'The destination',
            titleA: 'Arraial do Cabo,', titleB: 'the Brazilian Caribbean.',
            lead: "Crystal waters, dunes and the silence of dusk at Pontal. A 10-minute walk from the inn you'll find Prainha, Praia Grande and Praia dos Anjos — three of the city's iconic postcards.",
            cta: 'Talk to the concierge',
            experiences: [
                { title: 'Boat trip',  text: 'Blue Grotto, Prainhas do Pontal and Praia do Forno.' },
                { title: 'Sunset',     text: 'A short trail to the most beautiful viewpoint in the region.' },
                { title: 'Diving',     text: 'Crystal-clear waters and rich marine life.' },
                { title: 'Gastronomy', text: 'The freshest seafood and traditional caiçara cuisine.' },
            ],
        },
        testimonials: {
            eyebrow: 'Guests',
            titleA: 'What they say', titleB: 'about us.',
            list: [
                { quote: 'Perfect location — we left the inn and within 10 minutes we were on the beach. Delicious breakfast and attentive service.', author: '— Mariana & Felipe, São Paulo' },
                { quote: 'Family room was spacious and comfortable, and surrounded by everything. We will definitely be back.', author: '— Camila R., Belo Horizonte' },
                { quote: 'The best choice in Arraial do Cabo. Close to everything and with the charm of a real boutique inn.', author: '— Lucas A., Curitiba' },
            ],
        },
        cta: {
            eyebrow: 'Book direct',
            titleA: 'Your stay', titleB: 'starts here.',
            perks: ['✓ Best price guaranteed', '✓ Breakfast included', '✓ Central location', '✓ Flexible cancellation'],
            reserve: 'Book now',
        },
        contact: {
            eyebrow: 'Find us',
            title: 'Arraial do Cabo · RJ',
            street: 'Praça da Independência, 18 · Centro',
            neighborhood: 'Arraial do Cabo · RJ · Brazil · 28930-000',
            cta: 'Get directions',
            pin: 'Vila Praiana',
        },
        faq: {
            eyebrow: 'Before booking',
            titleA: 'Everything you', titleB: 'need to know.',
            items: [
                { q: 'What are the check-in and check-out times?',
                  a: 'Check-in from 2pm and check-out by noon. Early check-in and late check-out are possible subject to availability — just ask the front desk.' },
                { q: 'Is breakfast included?',
                  a: 'Yes! Breakfast is included in every booking — fruit, bread, eggs and specialty coffee to start the day right.' },
                { q: 'How far is the inn from the beaches?',
                  a: "We are in downtown Arraial do Cabo, a 10-minute walk to the three most beautiful beaches: Prainha, Praia Grande and Praia dos Anjos." },
                { q: 'What is nearby?',
                  a: 'Everything. Restaurants, markets, bars, banks and pharmacies are steps from the inn — the advantage of staying downtown.' },
                { q: 'What types of rooms do you have?',
                  a: 'We have Standard Double rooms (ideal for couples) and Family Rooms (with queen + single beds). All with air conditioning, Smart TV and full comfort.' },
                { q: 'Are pets welcome?',
                  a: 'We welcome small pets by prior request. Get in touch via WhatsApp to confirm availability.' },
                { q: 'How does cancellation work?',
                  a: 'Free cancellation up to 7 days before check-in. Shorter notice has specific fees according to the booked rate.' },
                { q: 'When is the best time to visit?',
                  a: 'From December to March the waters are clearest and warmest — high season. From April to November, mild weather and friendlier rates.' },
            ],
        },
        booking: {
            checkin: 'Check-in', checkout: 'Check-out',
            guests: 'Guests', verify: 'Check availability',
            adults: 'Adults', adultsSub: '13 years or older',
            children: 'Children', childrenSub: 'up to 12 years',
            clear: 'Clear', done: 'Done', placeholder: '— choose',
            adult: 'adult', adultPlural: 'adults',
            child: 'child', childPlural: 'children',
            dateFormat: 'MMM dd',
        },
        footer: {
            tagline: 'Your inn in the heart of Arraial do Cabo.',
            navTitle: 'Explore', reserveTitle: 'Booking', socialTitle: 'Social',
            availability: 'Availability', directContact: 'Direct contact', cancellation: 'Cancellation policy',
            copyright: '© 2026 Pousada Vila Praiana · All rights reserved',
        },
        whatsapp: {
            contactMsg: 'Hello, I would like information about Pousada Vila Praiana',
        },
    },

    es: {
        nav: {
            experience: 'La posada', suites: 'Habitaciones', arraial: 'Arraial',
            faq: 'Preguntas', contact: 'Contacto', reserve: 'Reservar',
        },
        hero: {
            location: 'Arraial do Cabo · Rio de Janeiro',
            titleA: 'Alójate en', titleB: 'el corazón', titleC: 'de Arraial.',
            sub: 'A pocos pasos de las tres playas más hermosas — Prainha, Praia Grande y Praia dos Anjos.',
            reserve: 'Reservar ahora', discover: 'Conocer la posada',
        },
        features: {
            eyebrow: 'La posada',
            titleA: 'Confort en el centro', titleB: 'de Arraial do Cabo.',
            lead: 'A pocos minutos de las playas y rodeada por todo lo que necesitas, Vila Praiana es el punto de partida ideal para descubrir lo mejor de Arraial — con toda la comodidad del centro.',
            items: [
                { title: 'Ubicación privilegiada', text: 'En el centro de Arraial, a 10 minutos a pie de las tres playas principales.' },
                { title: 'Desayuno incluido',      text: 'Comienza el día con energía: frutas, panes y cafés especiales.' },
                { title: 'Habitaciones confortables', text: 'Aire acondicionado, Smart TV y todo lo necesario para descansar bien.' },
                { title: 'Todo a pocos pasos',     text: 'Restaurantes, mercados, bares y farmacias alrededor de la posada.' },
            ],
        },
        suites: {
            eyebrow: 'Alojamiento',
            titleA: 'Habitaciones pensadas', titleB: 'para tu', titleC: 'descanso.',
            reserve: 'Reservar',
            list: [
                {
                    title: 'Habitación Doble Standard',
                    desc:  'Suite amplia para parejas, con aire acondicionado, Smart TV y todo el confort para un descanso tranquilo en el corazón de Arraial.',
                    meta:  'Hasta 2 huéspedes · Cama doble',
                },
                {
                    title: 'Habitación Familiar',
                    desc:  'Suite espaciosa con cama doble, camas individuales, frigobar, Smart TV y aire acondicionado. Ideal para familias.',
                    meta:  'Hasta 4 huéspedes · 1 doble + 2 individuales',
                },
            ],
        },
        arraial: {
            eyebrow: 'El destino',
            titleA: 'Arraial do Cabo,', titleB: 'el Caribe brasileño.',
            lead: 'Aguas transparentes, dunas y el silencio del atardecer en el Pontal. A 10 minutos a pie de la posada encuentras Prainha, Praia Grande y Praia dos Anjos — tres postales de la ciudad.',
            cta: 'Hablar con el concierge',
            experiences: [
                { title: 'Paseo en barco', text: 'Gruta Azul, Prainhas do Pontal y Praia do Forno.' },
                { title: 'Atardecer',      text: 'Una breve caminata hasta el mirador más hermoso de la región.' },
                { title: 'Buceo',          text: 'Aguas cristalinas y fauna marina exuberante.' },
                { title: 'Gastronomía',    text: 'Mariscos fresquísimos y cocina caiçara tradicional.' },
            ],
        },
        testimonials: {
            eyebrow: 'Huéspedes',
            titleA: 'Lo que dicen', titleB: 'sobre nosotros.',
            list: [
                { quote: 'Ubicación perfecta — salimos de la posada y en 10 minutos estábamos en la playa. Desayuno delicioso y atención muy atenta.', author: '— Mariana & Felipe, São Paulo' },
                { quote: 'La habitación familiar fue amplia y muy cómoda, rodeada de todo. Sin duda volveremos.', author: '— Camila R., Belo Horizonte' },
                { quote: 'La mejor opción en Arraial do Cabo. Cerca de todo y con el encanto de una posada de verdad.', author: '— Lucas A., Curitiba' },
            ],
        },
        cta: {
            eyebrow: 'Reserva directa',
            titleA: 'Tu estancia', titleB: 'comienza aquí.',
            perks: ['✓ Mejor precio garantizado', '✓ Desayuno incluido', '✓ Ubicación céntrica', '✓ Cancelación flexible'],
            reserve: 'Reservar ahora',
        },
        contact: {
            eyebrow: 'Encuéntranos',
            title: 'Arraial do Cabo · RJ',
            street: 'Praça da Independência, 18 · Centro',
            neighborhood: 'Arraial do Cabo · RJ · Brasil · CEP 28930-000',
            cta: 'Cómo llegar',
            pin: 'Vila Praiana',
        },
        faq: {
            eyebrow: 'Antes de reservar',
            titleA: 'Todo lo que', titleB: 'necesitas saber.',
            items: [
                { q: '¿Cuáles son los horarios de entrada y salida?',
                  a: 'Entrada desde las 14h y salida hasta las 12h. Early check-in y late check-out según disponibilidad — combine con la recepción.' },
                { q: '¿El desayuno está incluido?',
                  a: '¡Sí! El desayuno está incluido en todas las reservas — frutas, panes, huevos y cafés especiales para comenzar el día.' },
                { q: '¿A qué distancia están las playas?',
                  a: 'Estamos en el centro de Arraial do Cabo, a 10 minutos a pie de las tres playas más hermosas: Prainha, Praia Grande y Praia dos Anjos.' },
                { q: '¿Qué hay cerca de la posada?',
                  a: 'Todo. Restaurantes, mercados, bares, bancos y farmacias están a pocos pasos — la ventaja de estar en el centro.' },
                { q: '¿Qué tipos de habitaciones tienen?',
                  a: 'Tenemos Habitaciones Doble Standard (ideales para parejas) y Habitaciones Familiares (con cama doble + camas individuales). Todas con aire acondicionado, Smart TV y total confort.' },
                { q: '¿Aceptan mascotas?',
                  a: 'Recibimos mascotas pequeñas con consulta previa. Contáctanos por WhatsApp para confirmar disponibilidad.' },
                { q: '¿Cómo funciona la cancelación?',
                  a: 'Cancelación gratuita hasta 7 días antes del check-in. En plazos más cortos, se aplican tarifas específicas según la tarifa contratada.' },
                { q: '¿Cuál es la mejor época para visitar?',
                  a: 'De diciembre a marzo, las aguas son más cristalinas y cálidas — temporada alta. De abril a noviembre, clima suave y tarifas más amigables.' },
            ],
        },
        booking: {
            checkin: 'Entrada', checkout: 'Salida',
            guests: 'Huéspedes', verify: 'Verificar disponibilidad',
            adults: 'Adultos', adultsSub: '13 años o más',
            children: 'Niños', childrenSub: 'hasta 12 años',
            clear: 'Limpiar', done: 'Hecho', placeholder: '— elegir',
            adult: 'adulto', adultPlural: 'adultos',
            child: 'niño', childPlural: 'niños',
            dateFormat: "dd 'de' MMM",
        },
        footer: {
            tagline: 'Tu posada en el corazón de Arraial do Cabo.',
            navTitle: 'Explorar', reserveTitle: 'Reservas', socialTitle: 'Social',
            availability: 'Disponibilidad', directContact: 'Contacto directo', cancellation: 'Política de cancelación',
            copyright: '© 2026 Pousada Vila Praiana · Todos los derechos reservados',
        },
        whatsapp: {
            contactMsg: 'Hola, me gustaría recibir información sobre la Pousada Vila Praiana',
        },
    },
};
