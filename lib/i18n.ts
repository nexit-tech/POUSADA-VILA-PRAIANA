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
        bookingIntro: string;
        bookingCheckin: string;
        bookingCheckout: string;
        bookingGuests: string;
    };
};

export const dict: Record<Lang, Translation> = {
    pt: {
        nav: {
            experience: 'Experiência', suites: 'Suítes', arraial: 'Arraial',
            faq: 'Dúvidas', contact: 'Contato', reserve: 'Reservar',
        },
        hero: {
            location: 'Arraial do Cabo · Rio de Janeiro',
            titleA: 'Onde o', titleB: 'mar', titleC: 'encontra o silêncio.',
            sub: 'Uma pousada boutique à beira do paraíso brasileiro.',
            reserve: 'Reservar agora', discover: 'Descobrir',
        },
        features: {
            eyebrow: 'A pousada',
            titleA: 'Um refúgio íntimo', titleB: 'à beira-mar.',
            lead: 'Na Vila Praiana, cada detalhe é pensado para o silêncio do mar e a leveza dos dias. Apenas oito suítes, atendimento personalizado e a alma local de quem nasceu em Arraial do Cabo.',
            items: [
                { title: 'Pé na areia',           text: 'A 80 metros da Prainha, com acesso direto pela vila.' },
                { title: 'Café artesanal',        text: 'Manhãs com frutas tropicais, pães da casa e vista para o mar.' },
                { title: 'Concierge local',       text: 'Passeios reservados com barqueiros nativos da região.' },
                { title: 'Boutique & silenciosa', text: 'Apenas 8 suítes — exclusividade em cada estadia.' },
            ],
        },
        suites: {
            eyebrow: 'Acomodações',
            titleA: 'Suítes', titleB: 'desenhadas', titleC: 'para o descanso.',
            reserve: 'Reservar',
            list: [
                { title: 'Suíte Vista Mar', desc: 'Varanda privativa com rede e horizonte azul. Cama king, banheira e amenities artesanais.', meta: 'Até 2 hóspedes · 38m²' },
                { title: 'Suíte Jardim',    desc: 'Imersa no verde da vila. Pé-direito alto, fibras naturais e ducha ao ar livre.',           meta: 'Até 3 hóspedes · 32m²' },
                { title: 'Master Praiana',  desc: 'Nossa suíte signature. Sala íntima, varanda ampliada e hidromassagem para dois.',          meta: 'Até 2 hóspedes · 55m²' },
            ],
        },
        arraial: {
            eyebrow: 'O destino',
            titleA: 'Arraial do Cabo,', titleB: 'o Caribe brasileiro.',
            lead: 'Águas transparentes, dunas, grutas e o silêncio do entardecer no Pontal. Um lugar onde o tempo desacelera e o mar tem cor de turquesa.',
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
                { quote: 'Um pedacinho do céu em Arraial. A vista, o café, o silêncio… voltaremos sempre.', author: '— Mariana & Felipe, São Paulo' },
                { quote: 'Atendimento impecável e suíte de revista. Sentimos a alma local em cada detalhe.', author: '— Camila R., Belo Horizonte' },
                { quote: 'O melhor concierge que já tivemos no Brasil. Passeios inesquecíveis.', author: '— Lucas A., Curitiba' },
            ],
        },
        cta: {
            eyebrow: 'Reserve direto',
            titleA: 'Sua estadia', titleB: 'começa aqui.',
            perks: ['✓ Melhor preço garantido', '✓ Cortesia de boas-vindas', '✓ Parcelamento em até 6x', '✓ Cancelamento flexível'],
            reserve: 'Reservar agora',
        },
        contact: {
            eyebrow: 'Encontre-nos',
            title: 'Arraial do Cabo · RJ',
            street: 'Rua das Conchas, 128',
            neighborhood: 'Praia dos Anjos · Arraial do Cabo / RJ',
            cta: 'Como chegar',
            pin: 'Vila Praiana',
        },
        faq: {
            eyebrow: 'Antes de reservar',
            titleA: 'Tudo o que você', titleB: 'precisa saber.',
            items: [
                { q: 'Quais os horários de check-in e check-out?', a: 'Check-in a partir das 14h e check-out até 12h. Possibilidade de early check-in e late check-out sob disponibilidade — basta combinar com o concierge.' },
                { q: 'O café da manhã está incluso?',              a: 'Sim. Café artesanal servido das 8h às 10h30, com frutas tropicais da estação, pães da casa, ovos preparados na hora e cafés especiais.' },
                { q: 'A pousada aceita pets?',                      a: 'Recebemos pets de pequeno porte (até 10kg) mediante consulta prévia. Há uma taxa de higienização e algumas suítes específicas pet-friendly.' },
                { q: 'Quão perto da praia vocês ficam?',            a: 'A 80 metros da Prainha, com acesso direto pela vila. Cinco minutos a pé até a Praia dos Anjos e dez até a Praia Grande.' },
                { q: 'Vocês têm estacionamento?',                   a: 'Sim, estacionamento privativo gratuito para hóspedes, com vagas cobertas (sob reserva). Em alta temporada, recomendamos reservar antecipadamente.' },
                { q: 'Como funciona o cancelamento?',               a: 'Cancelamento gratuito até 7 dias antes do check-in. Entre 7 e 3 dias, retemos 50%. Em menos de 72h, retemos a primeira diária. Reservas com tarifa não-reembolsável seguem condição própria.' },
                { q: 'Vocês organizam passeios?',                   a: 'Sim. Nosso concierge local cuida de tudo: passeios de barco às grutas e prainhas, mergulho, transporte do aeroporto, jantares românticos na praia e tours fotográficos.' },
                { q: 'Qual a melhor época para visitar?',           a: 'De dezembro a março, as águas são mais cristalinas e quentes — alta temporada. De abril a novembro, clima ameno, pousada mais reservada e diárias mais convidativas.' },
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
            tagline: 'Refúgio boutique em Arraial do Cabo.',
            navTitle: 'Navegar', reserveTitle: 'Reserva', socialTitle: 'Social',
            availability: 'Disponibilidade', directContact: 'Contato direto', cancellation: 'Política de cancelamento',
            copyright: '© 2026 Pousada Vila Praiana · Todos os direitos reservados',
        },
        whatsapp: {
            contactMsg: 'Olá, gostaria de informações sobre a Pousada Vila Praiana',
            bookingIntro: 'Olá! Gostaria de verificar disponibilidade.',
            bookingCheckin: 'Check-in', bookingCheckout: 'Check-out', bookingGuests: 'Hóspedes',
        },
    },

    en: {
        nav: {
            experience: 'Experience', suites: 'Suites', arraial: 'Arraial',
            faq: 'FAQ', contact: 'Contact', reserve: 'Book',
        },
        hero: {
            location: 'Arraial do Cabo · Rio de Janeiro',
            titleA: 'Where the', titleB: 'sea', titleC: 'meets the silence.',
            sub: 'A boutique inn by the edge of the Brazilian paradise.',
            reserve: 'Book now', discover: 'Discover',
        },
        features: {
            eyebrow: 'The inn',
            titleA: 'An intimate refuge', titleB: 'by the sea.',
            lead: 'At Vila Praiana, every detail is shaped by the silence of the ocean and the lightness of slow days. Only eight suites, personal service and the local soul of someone born in Arraial do Cabo.',
            items: [
                { title: 'Steps from the sand', text: '80 meters from Prainha, with direct access through the village.' },
                { title: 'Artisanal breakfast', text: 'Mornings with tropical fruit, homemade bread and ocean view.' },
                { title: 'Local concierge',     text: 'Private tours with native boatmen of the region.' },
                { title: 'Boutique & quiet',    text: 'Only 8 suites — exclusivity in every stay.' },
            ],
        },
        suites: {
            eyebrow: 'Accommodations',
            titleA: 'Suites', titleB: 'designed', titleC: 'for rest.',
            reserve: 'Book',
            list: [
                { title: 'Ocean View Suite', desc: 'Private balcony with hammock and blue horizon. King bed, soaking tub and artisanal amenities.', meta: 'Up to 2 guests · 38m²' },
                { title: 'Garden Suite',     desc: 'Wrapped by the green of the village. High ceilings, natural fibers and outdoor shower.',          meta: 'Up to 3 guests · 32m²' },
                { title: 'Praiana Master',   desc: 'Our signature suite. Intimate lounge, extended balcony and hydromassage for two.',                meta: 'Up to 2 guests · 55m²' },
            ],
        },
        arraial: {
            eyebrow: 'The destination',
            titleA: 'Arraial do Cabo,', titleB: 'the Brazilian Caribbean.',
            lead: 'Crystal waters, dunes, sea caves and the silence of dusk at Pontal. A place where time slows down and the ocean turns turquoise.',
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
                { quote: "A piece of heaven in Arraial. The view, the breakfast, the silence… we'll come back forever.", author: '— Mariana & Felipe, São Paulo' },
                { quote: 'Impeccable service and a magazine-worthy suite. We felt the local soul in every detail.',      author: '— Camila R., Belo Horizonte' },
                { quote: "The best concierge we've ever had in Brazil. Unforgettable tours.",                            author: '— Lucas A., Curitiba' },
            ],
        },
        cta: {
            eyebrow: 'Book direct',
            titleA: 'Your stay', titleB: 'starts here.',
            perks: ['✓ Best price guaranteed', '✓ Welcome amenity', '✓ Up to 6 installments', '✓ Flexible cancellation'],
            reserve: 'Book now',
        },
        contact: {
            eyebrow: 'Find us',
            title: 'Arraial do Cabo · RJ',
            street: '128 Conchas Street',
            neighborhood: 'Praia dos Anjos · Arraial do Cabo / RJ · Brazil',
            cta: 'Get directions',
            pin: 'Vila Praiana',
        },
        faq: {
            eyebrow: 'Before booking',
            titleA: 'Everything you', titleB: 'need to know.',
            items: [
                { q: 'What are the check-in and check-out times?', a: 'Check-in from 2pm and check-out by noon. Early check-in and late check-out are possible subject to availability — just ask the concierge.' },
                { q: 'Is breakfast included?',                     a: 'Yes. Artisanal breakfast served from 8am to 10:30am, with seasonal tropical fruit, homemade bread, eggs made to order and specialty coffee.' },
                { q: 'Are pets welcome?',                          a: 'We welcome small pets (up to 10kg) by prior request. There is a cleaning fee and a few specific pet-friendly suites.' },
                { q: 'How close is the beach?',                    a: '80 meters from Prainha, with direct access through the village. Five minutes on foot to Praia dos Anjos, ten to Praia Grande.' },
                { q: 'Is there parking?',                          a: 'Yes, free private parking for guests, with covered spots (on request). In high season we recommend booking your spot in advance.' },
                { q: 'How does cancellation work?',                a: 'Free cancellation up to 7 days before check-in. Between 7 and 3 days, we retain 50%. Less than 72h, we retain the first night. Non-refundable rates follow their own policy.' },
                { q: 'Do you organize tours?',                     a: 'Yes. Our local concierge handles it all: boat trips to the grottos and prainhas, diving, airport transfer, romantic beach dinners and photo tours.' },
                { q: 'When is the best time to visit?',            a: 'From December to March the waters are clearest and warmest — high season. From April to November, mild weather, a quieter inn and friendlier rates.' },
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
            tagline: 'Boutique refuge in Arraial do Cabo.',
            navTitle: 'Explore', reserveTitle: 'Booking', socialTitle: 'Social',
            availability: 'Availability', directContact: 'Direct contact', cancellation: 'Cancellation policy',
            copyright: '© 2026 Pousada Vila Praiana · All rights reserved',
        },
        whatsapp: {
            contactMsg: 'Hello, I would like information about Pousada Vila Praiana',
            bookingIntro: 'Hello! I would like to check availability.',
            bookingCheckin: 'Check-in', bookingCheckout: 'Check-out', bookingGuests: 'Guests',
        },
    },

    es: {
        nav: {
            experience: 'Experiencia', suites: 'Suites', arraial: 'Arraial',
            faq: 'Preguntas', contact: 'Contacto', reserve: 'Reservar',
        },
        hero: {
            location: 'Arraial do Cabo · Rio de Janeiro',
            titleA: 'Donde el', titleB: 'mar', titleC: 'encuentra el silencio.',
            sub: 'Una posada boutique a la orilla del paraíso brasileño.',
            reserve: 'Reservar ahora', discover: 'Descubrir',
        },
        features: {
            eyebrow: 'La posada',
            titleA: 'Un refugio íntimo', titleB: 'a la orilla del mar.',
            lead: 'En Vila Praiana cada detalle se piensa con el silencio del mar y la ligereza de los días lentos. Solo ocho suites, atención personalizada y el alma local de quien nació en Arraial do Cabo.',
            items: [
                { title: 'Pies en la arena',  text: 'A 80 metros de Prainha, con acceso directo por la villa.' },
                { title: 'Desayuno artesanal', text: 'Mañanas con frutas tropicales, panes de la casa y vista al mar.' },
                { title: 'Concierge local',    text: 'Paseos reservados con barqueros nativos de la región.' },
                { title: 'Boutique y silenciosa', text: 'Solo 8 suites — exclusividad en cada estancia.' },
            ],
        },
        suites: {
            eyebrow: 'Alojamiento',
            titleA: 'Suites', titleB: 'diseñadas', titleC: 'para el descanso.',
            reserve: 'Reservar',
            list: [
                { title: 'Suite Vista al Mar', desc: 'Balcón privado con hamaca y horizonte azul. Cama king, bañera y amenities artesanales.', meta: 'Hasta 2 huéspedes · 38m²' },
                { title: 'Suite Jardín',       desc: 'Inmersa en el verde de la villa. Techos altos, fibras naturales y ducha al aire libre.',  meta: 'Hasta 3 huéspedes · 32m²' },
                { title: 'Master Praiana',     desc: 'Nuestra suite signature. Salón íntimo, balcón ampliado e hidromasaje para dos.',          meta: 'Hasta 2 huéspedes · 55m²' },
            ],
        },
        arraial: {
            eyebrow: 'El destino',
            titleA: 'Arraial do Cabo,', titleB: 'el Caribe brasileño.',
            lead: 'Aguas transparentes, dunas, grutas y el silencio del atardecer en el Pontal. Un lugar donde el tiempo se ralentiza y el mar es turquesa.',
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
                { quote: 'Un pedacito de cielo en Arraial. La vista, el desayuno, el silencio… volveremos siempre.', author: '— Mariana & Felipe, São Paulo' },
                { quote: 'Atención impecable y suite de revista. Se siente el alma local en cada detalle.',          author: '— Camila R., Belo Horizonte' },
                { quote: 'El mejor concierge que tuvimos en Brasil. Paseos inolvidables.',                            author: '— Lucas A., Curitiba' },
            ],
        },
        cta: {
            eyebrow: 'Reserva directa',
            titleA: 'Tu estancia', titleB: 'comienza aquí.',
            perks: ['✓ Mejor precio garantizado', '✓ Cortesía de bienvenida', '✓ Hasta 6 cuotas', '✓ Cancelación flexible'],
            reserve: 'Reservar ahora',
        },
        contact: {
            eyebrow: 'Encuéntranos',
            title: 'Arraial do Cabo · RJ',
            street: 'Calle Conchas, 128',
            neighborhood: 'Praia dos Anjos · Arraial do Cabo / RJ · Brasil',
            cta: 'Cómo llegar',
            pin: 'Vila Praiana',
        },
        faq: {
            eyebrow: 'Antes de reservar',
            titleA: 'Todo lo que', titleB: 'necesitas saber.',
            items: [
                { q: '¿Cuáles son los horarios de entrada y salida?',     a: 'Entrada desde las 14h y salida hasta las 12h. Existe la posibilidad de early check-in y late check-out según disponibilidad — solo combine con el concierge.' },
                { q: '¿El desayuno está incluido?',                       a: 'Sí. Desayuno artesanal servido de 8h a 10:30h, con frutas tropicales de estación, panes de la casa, huevos al momento y cafés especiales.' },
                { q: '¿Aceptan mascotas?',                                a: 'Recibimos mascotas pequeñas (hasta 10kg) con consulta previa. Hay una tarifa de higienización y algunas suites específicas pet-friendly.' },
                { q: '¿Qué tan cerca están de la playa?',                  a: 'A 80 metros de Prainha, con acceso directo por la villa. Cinco minutos a pie hasta Praia dos Anjos y diez hasta Praia Grande.' },
                { q: '¿Hay estacionamiento?',                              a: 'Sí, estacionamiento privado y gratuito para huéspedes, con plazas cubiertas (bajo reserva). En temporada alta, recomendamos reservar con anticipación.' },
                { q: '¿Cómo funciona la cancelación?',                     a: 'Cancelación gratuita hasta 7 días antes del check-in. Entre 7 y 3 días, retenemos el 50%. Menos de 72h, retenemos la primera noche. Tarifas no reembolsables siguen su propia política.' },
                { q: '¿Organizan paseos?',                                 a: 'Sí. Nuestro concierge local se encarga de todo: paseos en barco a las grutas y prainhas, buceo, traslado del aeropuerto, cenas románticas en la playa y tours fotográficos.' },
                { q: '¿Cuál es la mejor época para visitar?',              a: 'De diciembre a marzo, las aguas son más cristalinas y cálidas — temporada alta. De abril a noviembre, clima suave, posada más reservada y tarifas más amigables.' },
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
            tagline: 'Refugio boutique en Arraial do Cabo.',
            navTitle: 'Explorar', reserveTitle: 'Reservas', socialTitle: 'Social',
            availability: 'Disponibilidad', directContact: 'Contacto directo', cancellation: 'Política de cancelación',
            copyright: '© 2026 Pousada Vila Praiana · Todos los derechos reservados',
        },
        whatsapp: {
            contactMsg: 'Hola, me gustaría recibir información sobre la Pousada Vila Praiana',
            bookingIntro: 'Hola! Me gustaría verificar la disponibilidad.',
            bookingCheckin: 'Entrada', bookingCheckout: 'Salida', bookingGuests: 'Huéspedes',
        },
    },
};
