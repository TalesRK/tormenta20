export const origins = [
    {
        key: 'ACOLITO',
        label: 'Acólito',
        description:
            'Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Símbolo sagrado de sua divindade, traje de sacerdote.',
            },
            { type: 'PERICIA', label: 'Cura', key: 'CURA' },
            { type: 'PERICIA', label: 'Religião', key: 'RELIGIAO' },
            { type: 'PERICIA', label: 'Vontade', key: 'VONTADE' },
            {
                type: 'PODER',
                label: 'Membro da Igreja',
                key: 'MEMBRO_DA_IGREJA',
            },
            {
                type: 'PODER',
                label: 'Vontade de Ferro',
                key: 'VONTADE_DE_FERRO',
            },
        ],
        specialPower: {
            label: 'Membro da Igreja',
            description:
                'Você consegue hospedagem e informação em qualquer templo de sua divindade, para você e seus aliados.',
        },
    },
    {
        key: 'AMIGO_DOS_ANIMAIS',
        label: 'Amigo dos animais',
        description:
            'Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete do Reino dos Cavalos ou mesmo tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial seria destinada a você.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Cão de guarda, cavalo, pônei ou trobo (escolha um).',
            },
            { type: 'PERICIA', label: 'Adestramento', key: 'ADESTRAMENTO' },
            { type: 'PERICIA', label: 'Cavalgar', key: 'CAVALGAR' },
            { type: 'PODER', label: 'Amigo Especial', key: 'AMIGO_ESPECIALL' },
        ],
        specialPower: {
            label: 'Amigo Especial',
            description:
                'Você recebe +5 em testes de Adestramento com animais comuns. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um aliado que fornece +2 em uma perícia a sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de aliados.',
        },
    },
    {
        key: 'AMNESICO',
        label: 'Amnésico',
        description:
            'Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou nem isso. Talvez tenha alguns itens pessoais, mas nenhuma ideia de como os conseguiu — podem ser relíquias de família, presentes de uma pessoa querida ou apenas coisas que pegou de uns viajantes mortos lá atrás. Você não sabe como recebeu seu treinamento; apenas tem uma intuição sobre aquilo que consegue fazer. Seus atuais companheiros são a única família que conhece. Quem sabe, viajando com eles, você descubra algo sobre seu passado',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Um ou mais itens (somando até T$ 100), que podem ser uma pista misteriosa da sua vida antiga. Em vez de dois benefícios de uma lista, você recebe uma perícia e um poder escolhidos pelo mestre e o poder Lembranças Graduais.',
            },
        ],

        specialPower: {
            label: 'Lembranças Graduais',
            description:
                'Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória.',
        },
    },
    {
        key: 'ARISTOCRATA',
        label: 'Aristocrata',
        description:
            'Você nasceu na nobreza. Recebeu educação sofisticada em assuntos acadêmicos, política mercantil, torneios de cavalaria ou mesmo conjuração arcana, dependendo das tradições em sua linhagem e desejos de seus pais. Você ainda procura cumprir seus compromissos como nobre? Luta para conciliar as expectativas da família com a vida de aventuras? Ou cortou totalmente seus laços com o passado, mantendo apenas alguns pertences valiosos e contatos úteis?',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Joia de família no valor de T$ 100, traje da corte.',
            },
            { type: 'PERICIA', label: 'Diplomacia', key: 'DIPLOMACIA' },
            { type: 'PERICIA', label: 'Enganação', key: 'ENGANACAO' },
            { type: 'PERICIA', label: 'Nobreza', key: 'NOBREZA' },
            { type: 'PODER', label: 'Comandar', key: 'COMANDAR' },
            { type: 'PODER', label: 'Sangue Azul', key: 'SANGUE_AZUL' },
        ],
        specialPower: {
            label: 'Sangue Azul',
            description:
                'Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc.',
        },
    },
    {
        key: 'ARTESAO',
        label: 'Artesão',
        description:
            'O alfaiate habilidoso em costurar as vestes da nobreza. O marceneiro capaz de consertar uma carroça. O armeiro que forja armas letais. Você foi treinado em sua família, ou por algum mestre, escola ou guilda, para fabricar itens importantes no mundo civilizado. Suas habilidades podem ter sido aprendidas para o trabalho, mas cedo ou tarde acabam se mostrando úteis durante as aventuras.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Kit de Ofício aprimorado (+2 em testes de Ofício).',
            },
            {
                type: 'PERICIA',
                label: 'Ofício (qualquer)',
                key: 'OFICIO_QUALQUER',
            },
            { type: 'PERICIA', label: 'Vontade', key: 'VONTADE' },
            {
                type: 'PODER',
                label: 'Frutos do Trabalho',
                key: 'FRUTOS_DO_TRABALHO',
            },
            { type: 'PODER', label: 'Sortudo', key: 'SORTUDO' },
        ],
        specialPower: {
            label: 'Frutos do Trabalho',
            description:
                'Quando passa em um teste de Ofício para Sustento, você recebe o dobro do dinheiro.',
        },
    },
    {
        key: 'ARTISTA',
        label: 'Artista',
        description:
            "Você possui talento, nasceu com um 'dom' — pelo menos é o que outras pessoas gostam de pensar. Será verdade? Ou será que você apenas sentiu atração por certa forma de arte e treinou muito, muito mesmo? Enquanto o artesão fabrica itens 'mundanos', o artista produz entretenimento, alimento para o coração e a alma. Talvez você apenas saiba entoar belas canções, aprendidas na infância com pais amorosos, ou ouvindo fadas na floresta. Ou talvez seja um ator ou dançarino formado em alguma escola de artes prestigiada.",

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Kit de disfarces ou instrumento musical.',
            },
            { type: 'PERICIA', label: 'Atuação', key: 'ATUACAO' },
            { type: 'PERICIA', label: 'Enganação', key: 'ENGANACAO' },
            { type: 'PODER', label: 'Atraente', key: 'ATRAENTE' },
            { type: 'PODER', label: 'Dom Artístico', key: 'DOM_ARTISTICO' },
            { type: 'PODER', label: 'Sortudo', key: 'SORTUDO' },
            { type: 'PODER', label: 'Torcida', key: 'TORCIDA' },
        ],
        specialPower: {
            label: 'Dom Artístico',
            description:
                'Quando usa a perícia Atuação para fazer uma apresentação e passa no teste, você ganha o dobro de tibares.',
        },
    },
    {
        key: 'ASSISTENTE_DE_LABORATORIO',
        label: 'Assistente de laboratório',
        description:
            'Você atuou como ajudante para um alquimista, inventor ou mago. Costumava tomar notas, limpar o laboratório, arrumar as ferramentas, vasculhar mercados em busca de ingredientes exóticos, recapturar a aberração antinatural que fugiu da jaula... enfim, não era o trabalho mais fácil, limpo ou seguro do mundo. Exposição prolongada a substâncias e experimentos perigosos talvez tenham prejudicado sua saúde (ou despertado suas habilidades de classe...).',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Um kit de Ofício (alquimia).',
            },
            {
                type: 'PERICIA',
                label: 'Ofício (alquimia)',
                key: 'OFICIO_ALQUIMIA',
            },
            { type: 'PERICIA', label: 'Misticismo', key: 'MISTICISMO' },
            { type: 'PODER', label: 'Esse Cheiro..', key: 'ESSE_CHEIRO' },
            { type: 'PODER', label: 'Venefício', key: 'VENEFICIO' },
            {
                type: 'PODER',
                label: 'Um poder da Tormenta. (Oh, aqueles experimentos!)',
            },
        ],
        specialPower: {
            label: 'Esse Cheiro...',
            description:
                'Você recebe +2 em Fortitude e passa automaticamente em testes de Ofício (alquimia) para identificar itens alquímicos.',
        },
    },
    {
        key: 'BATEDOR',
        label: 'Batedor',
        description:
            'Seja conduzindo caravanas através dos reinos, rastreando inimigos nos campos de batalha ou guiando exploradores nas vastidões selvagens, você aprendeu a achar caminhos e dirigir outros com segurança. Batedores podem surgir nas tribos mais primitivas, acompanhando grupos de caça, como profissionais sofisticados nas grandes cidades e forças militares ou ainda na perigosa atividade de caça-recompensas. Pouco importando a carreira que adotou mais tarde, como aventureiro, seu antigo treino acaba se revelando útil em numerosas ocasiões.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Barraca, uma arma simples ou marcial de ataque à distância.',
            },
            { type: 'PERICIA', label: 'Furtividade', key: 'FURTIVIDADE' },
            { type: 'PERICIA', label: 'Percepção', key: 'PERCEPCAO' },
            { type: 'PERICIA', label: 'Sobrevivência', key: 'SOBREVIVENCIA' },
            { type: 'PODER', label: 'À Prova de Tudo', key: 'A_PROVA_DE_TUDO' },
            {
                type: 'PODER',
                label: 'Estilo de Disparo',
                key: 'ESTILO_DE_DISPARO',
            },
            {
                type: 'PODER',
                label: 'Sentidos Aguçados',
                key: 'SENTIDOS_AGUCADOS',
            },
        ],
        specialPower: {
            label: 'À Prova de Tudo',
            description:
                'Você não sofre penalidade em deslocamento e Sobrevivência por clima ruim e por terreno difícil natural.',
        },
    },
    {
        key: 'CAPANGA',
        label: 'Capanga',
        description:
            "Agilidade e esperteza são importantes no mundo do crime, mas não são tudo; às vezes é preciso esmurrar alguém. Por ser grande, forte ou mal-encarado, você acabou trabalhando como músculos para algum bandido, ou integrando um bando, quadrilha ou guilda de ladrões. Talvez você não fosse muito bom em bater carteiras nas ruas do Reino da Intriga, mas sabia erguer alguém pelo tornozelo e sacudir até as moedas caírem. Hoje, como aventureiro, você provavelmente deixou essa época para trás — pelo menos até que alguém precise ser 'convencido' a colaborar.",

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Tatuagem ou outro adereço de sua gangue aprimorado (+2 em Intimidação), uma arma simples corpo a corpo.',
            },
            { type: 'PERICIA', label: 'Luta', key: 'LUTA' },
            { type: 'PERICIA', label: 'Intimidação', key: 'INTIMIDACAO' },
            { type: 'PODER', label: 'Confissão', key: 'CONFISSAO' },
            {
                type: 'PODER',
                label: 'Um poder de combate',
                key: 'UM_PODER_DE_COMBATE',
            },
        ],
        specialPower: {
            label: 'Confissão',
            description:
                'Você pode usar Intimidação para obter informação sem custo (veja Investigação).',
        },
    },
    {
        key: 'CHARLATAO',
        label: 'Charlatão',
        description:
            'Você sempre teve talento para resolver problemas com conversa, sincera ou nem tanto. Talvez tenha aprendido andando com más companhias. Por ser pequeno e fraco em meio a guerreiros truculentos, talvez fosse pura questão de sobrevivência. Ou foi tocado pelo Deus da Trapaça, da Traição ou outra entidade traiçoeira. Seja como for, após um pouco de diálogo, você percebe o que as pessoas mais querem ou temem, usando palavras para vencer obstáculos e abrir caminhos tão facilmente quanto espadas e magias. Ou melhor.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Joia falsificada (valor aparente de T$ 100, sem valor real), kit de disfarces (esse é de verdade).',
            },
            { type: 'PERICIA', label: 'Enganação', key: 'ENGANACAO' },
            { type: 'PERICIA', label: 'Jogatina', key: 'JOGATINA' },
            {
                type: 'PODER',
                label: 'Alpinista Social',
                key: 'ALPINISTA_SOCIAL',
            },
            {
                type: 'PODER',
                label: 'Aparência Inofensiva',
                key: 'APARENCIA_INOFENSIVA',
            },
            { type: 'PODER', label: 'Sortudo', key: 'SORTUDO' },
        ],
        specialPower: {
            label: 'Alpinista Social',
            description:
                'Você pode substituir testes de Diplomacia por testes de Enganação.',
        },
    },
    {
        key: 'CIRCENSE',
        label: 'Circense',
        description:
            'Você adquiriu treinamento com acrobacia, malabarismo, mágica ou outra forma de arte circense. Talvez tenha aprendido sozinho, durante as brincadeiras de infância. Talvez tenha sido ensinado por um ente querido, tornando essa arte uma forte ligação com seu passado. Ou ainda, é possível que tenha sido forçado a aprender um ou outro truque para sobreviver nas ruas. De qualquer forma, são aptidões que podem acabar sendo úteis em suas aventuras.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Traje de artista, três bolas coloridas para malabarismo, um baralho.',
            },
            { type: 'PERICIA', label: 'Acrobacia', key: 'ACROBACIA' },
            { type: 'PERICIA', label: 'Atuação', key: 'ATUACAO' },
            { type: 'PERICIA', label: 'Reflexos', key: 'REFLEXOS' },
            { type: 'PODER', label: 'Acrobático', key: 'ACROBATICO' },
            { type: 'PODER', label: 'Torcida', key: 'TORCIDA' },
            {
                type: 'PODER',
                label: 'Truque de Mágica',
                key: 'TRUQUE_DE_MAGICA',
            },
        ],
        specialPower: {
            label: 'Truque de Mágica',
            description:
                "Você pode lançar 'Explosão de Chamas', 'Hipnotismo' e 'Transmutar Objetos', mas apenas com o aprimoramento Truque. Esta não é uma habilidade mágica — os efeitos provêm de truques e prestidigitação.",
        },
    },
    {
        key: 'CRIMINOSO',
        label: 'Criminoso',
        description:
            'Fazer o bem é bonito, mas não enche barriga — pelo menos, assim você foi ensinado. Por necessidade, ambição ou apenas sem conhecer outra vida, você foi um bandido durante boa parte da juventude. Furtava bolsas, trapaceava em jogos de taverna, emboscava viajantes nas estradas ou até aceitava contratos para matar. Agia sozinho, com seu próprio bando, pertencia a uma guilda de ladrões. Tornar-se aventureiro talvez seja uma forma de expiar por seus crimes, ou apenas o passo seguinte; em vez de mercadores, roubar tesouros de dragões!',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Kit de ladrão ou kit de disfarces.',
            },
            { type: 'PERICIA', label: 'Enganação', key: 'ENGANACAO' },
            { type: 'PERICIA', label: 'Furtividade', key: 'FURTIVIDADE' },
            { type: 'PERICIA', label: 'Ladinagem', key: 'LADINAGEM' },
            { type: 'PODER', label: 'Punguista', key: 'PUNGUISTA' },
            { type: 'PODER', label: 'Venefício', key: 'VENEFICIO' },
        ],
        specialPower: {
            label: 'Punguista',
            description:
                'Você pode fazer um teste de Ladinagem para Sustento, como a perícia Ofício.',
        },
    },
    {
        key: 'CURANDEIRO',
        label: 'Curandeiro',
        description:
            'Que bom seria se a cura milagrosa dos clérigos estivesse ao alcance de todos! Talvez você tenha sido ajudante do curandeiro da vila, testemunhando quando ele tratava doenças e lesões sem conjurar qualquer magia. Ou teve um estudo formal e sofisticado de medicina no Colégio Real de Médicos no Reino sem Deuses. De qualquer modo, você é treinado em curar com remédios e tratamentos naturais — algo sempre útil em grupos de aventureiros, mesmo quando há um clérigo por perto.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Bálsamo restaurador, kit de medicamentos.',
            },
            { type: 'PERICIA', label: 'Cura', key: 'CURA' },
            { type: 'PERICIA', label: 'Vontade', key: 'VONTADE' },
            { type: 'PODER', label: 'Medicina', key: 'MEDICINA' },
            { type: 'PODER', label: 'Médico de Campo', key: 'MEDICO_DE_CAMPO' },
            { type: 'PODER', label: 'Venefício', key: 'VENEFICIO' },
        ],
        specialPower: {
            label: 'Médico de Campo',
            description:
                'Quando você faz primeiros socorros em um personagem com 0 ou menos PV, ele recupera 1d6 PV.',
        },
    },
    {
        key: 'EREMITA',
        label: 'Eremita',
        description:
            'Você passou parte da vida isolado, afastado da sociedade. Foi banido ainda criança, por nascer lefou ou com alguma deformidade da Tormenta. Ouviu um chamado dos deuses, buscando o isolamento para meditar sobre seu significado. Viveu enclausurado em um mosteiro, mantendo contato apenas com poucos monges silenciosos. Ou foi praticante de artes arcanas proibidas, mantendo-se longe de olhares curiosos. A vida simples o tornou forte de corpo e espírito. Mas, em algum momento, você decidiu que bastava — ou teve sua tranquilidade interrompida.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Barraca, kit de medicamentos.',
            },
            { type: 'PERICIA', label: 'Misticismo', key: 'MISTICISMO' },
            { type: 'PERICIA', label: 'Religião', key: 'RELIGIAO' },
            { type: 'PERICIA', label: 'Sobrevivência', key: 'SOBREVIVENCIA' },
            { type: 'PODER', label: 'Busca Interior', key: 'BUSCA_INTERIOR' },
            { type: 'PODER', label: 'Lobo Solitário', key: 'LOBO_SOLITARIO' },
        ],
        specialPower: {
            label: 'Busca Interior',
            description:
                'Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre.',
        },
    },
    {
        key: 'ESCRAVO',
        label: 'Escravo',
        description:
            'Ainda que escravidão seja ilegal no Reinado, em Arton a liberdade não é para todos. De minotauros odiosos no Império da Força aos cruéis mestres subterrâneos do Reino dos Trolls, várias culturas praticam a escravidão. Você já nasceu escravo, ou fez parte de um povo derrotado na guerra, ou apenas foi capturado em alguma rua escura para depois despertar na jaula, em algum mercado clandestino? Encontrou uma chance de escapar, tornando-se agora um escravo foragido? Recebeu a liberdade como recompensa por realizar um grande favor a seu dono? Foi resgatado por aventureiros que agora se tornaram sua nova família?',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Algemas, uma ferramenta pesada (mesmas estatísticas de uma maça).',
            },
            { type: 'PERICIA', label: 'Atletismo', key: 'ATLETISMO' },
            { type: 'PERICIA', label: 'Fortitude', key: 'FORTITUDE' },
            { type: 'PERICIA', label: 'Furtividade', key: 'FURTIVIDADE' },
            {
                type: 'PODER',
                label: 'Desejo de Liberdade',
                key: 'DESEJO_DE_LIBERDADE',
            },
            { type: 'PERICIA', label: 'Vontade', key: 'VONTADE' },
        ],
        specialPower: {
            label: 'Desejo de Liberdade',
            description:
                "Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra efeitos que possam aprisioná-lo, como a manobra agarrar ou a magia 'Imobilizar'.",
        },
    },
    {
        key: 'ESTUDIOSO',
        label: 'Estudioso',
        description:
            'Não importa se você já nasceu apaixonado por certo assunto, testemunhou um evento incrível que atiçou sua curiosidade ou se viu forçado a estudar por imposição familiar. Longos anos de sua vida foram gastos em meio a livros e pergaminhos. Da engenharia dos anões à geopolítica do Reinado, das táticas militares puristas aos sistemas de conjuração da Academia Arcana, da anatomia dos dragões aos enigmas cósmicos da Tormenta... em Arton não faltam campos a conquistar, segredos a desvendar. Agora, como aventureiro, você tem a chance de vivenciar aquilo que aprendeu e também auxiliar o grupo com o fruto de seus estudos.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Um livro aprimorado (+2 em Conhecimento, Guerra ou Misticismo), outros três livros comuns a sua escolha.',
            },
            { type: 'PERICIA', label: 'Conhecimento', key: 'CONHECIMENTO' },
            { type: 'PERICIA', label: 'Guerra', key: 'GUERRA' },
            { type: 'PERICIA', label: 'Misticismo', key: 'MISTICISMO' },
            {
                type: 'PODER',
                label: 'Aparência Inofensiva',
                key: 'APARENCIA_INOFENSIVA',
            },
            {
                type: 'PODER',
                label: 'Palpite Fundamentado',
                key: 'PALPITE_FUNDAMENTADO',
            },
        ],
        specialPower: {
            label: 'Palpite Fundamentado',
            description:
                'Você pode gastar 2 PM para substituir um teste de qualquer perícia originalmente baseada em Inteligência ou Sabedoria por um teste de Conhecimento.',
        },
    },
    {
        key: 'FAZENDEIRO',
        label: 'Fazendeiro',
        description:
            'Boa parte da população de Arton jamais conheceu outro modo de viver. Em algum lugar na perigosa transição entre os ermos e as cidades, você trabalhou duro em campos e fazendas. Cultivando a terra ou criando animais, viveu longos anos em contato com a natureza, orando e trabalhando por boas colheitas ou gado saudável, só ocasionalmente visitando povoados para negociar sua produção. Por que essa vida tranquila acabou? Sua família foi assassinada por goblins? Sua fazenda foi devastada por um dragão? Ou você apenas foi atraído pelo chamado da aventura?',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Uma ferramenta agrícola (mesmas estatísticas de uma lança), 10 rações de viagem, um animal não combativo (como uma galinha, porco ou ovelha).',
            },
            { type: 'PERICIA', label: 'Adestramento', key: 'ADESTRAMENTO' },
            { type: 'PERICIA', label: 'Cavalgar', key: 'CAVALGAR' },
            {
                type: 'PERICIA',
                label: 'Ofício (fazendeiro)',
                key: 'OFICIO_FAZENDEIRO',
            },
            { type: 'PERICIA', label: 'Sobrevivência', key: 'SOBREVIVENCIA' },
            { type: 'PODER', label: 'Água no Feijão', key: 'AGUA_NO_FEIJAO' },
            { type: 'PODER', label: 'Ginete', key: 'GINETE' },
        ],
        specialPower: {
            label: 'Água no Feijão',
            description:
                'Você gasta apenas metade da matéria-prima para testes de Ofício (cozinheiro).',
        },
    },
    {
        key: 'FORASTEIRO',
        label: 'Forasteiro',
        description:
            'Você veio de longe. Sua cultura nativa é quase ou totalmente desconhecida no Reinado, tornando-o uma figura exótica, de hábitos estranhos. Você pertence a uma tribo perdida nas Montanhas Sanguinárias? Nasceu em uma bela cidade de cúpulas douradas no Deserto da Perdição? Navegou em navios audazes desde os Reinos de Moreania? Talvez você até tenha chegado de outro mundo, através de algum portal mágico. Será que conseguiu ajustar-se a este Reinado, agora chamando-o de lar? Ou procura até hoje o caminho de volta para casa?',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Um diário de viagens, um traje de viajante estrangeiro, um instrumento musical exótico.',
            },
            { type: 'PERICIA', label: 'Cavalgar', key: 'CAVALGAR' },
            { type: 'PERICIA', label: 'Pilotagem', key: 'PILOTAGEM' },
            { type: 'PERICIA', label: 'Sobrevivência', key: 'SOBREVIVENCIA' },
            { type: 'PODER', label: 'Cultura Exótica', key: 'CULTURA_EXOTICA' },
            { type: 'PODER', label: 'Lobo Solitário', key: 'LOBO_SOLITARIO' },
        ],
        specialPower: {
            label: 'Cultura Exótica',
            description:
                'Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de perícia somente treinada, mesmo sem ser treinado na perícia.',
        },
    },
    {
        key: 'GLADIADOR',
        label: 'Gladiador',
        description:
            'Em vários pontos do Reinado combates de arena são um entretenimento popular — a ponto de atrair muitos jovens praticantes. Podem ser combates até a morte ou apenas encenações elaboradas ou ainda corridas de cavalo, arquearia e outros esportes não tão sangrentos. Você acabou envolvido nesse mundo glamoroso por ser tradição em sua família, por admirar algum gladiador renomado ou apenas por sede de fama e fortuna. Um evento traumático, uma desilusão ou o puro tédio levou você a abandonar as arenas e aplausos, usando sua experiência em torneios para viver aventuras.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Uma arma marcial ou exótica, um item sem valor recebido de um admirador.',
            },
            { type: 'PERICIA', label: 'Atuação', key: 'ATUACAO' },
            { type: 'PERICIA', label: 'Luta', key: 'LUTA' },
            { type: 'PODER', label: 'Atraente', key: 'ATRAENTE' },
            { type: 'PODER', label: 'Pão e Circo', key: 'PAO_E_CIRCO' },
            { type: 'PODER', label: 'Torcida', key: 'TORCIDA' },
            {
                type: 'PODER',
                label: 'Um poder de combate',
                key: 'UM_PODER_DE_COMBATE',
            },
        ],
        specialPower: {
            label: 'Pão e Circo',
            description:
                "Por seu treino em combates de exibição, você sabe 'bater sem machucar'. Pode escolher causar dano não letal sem sofrer a penalidade de –5.",
        },
    },
    {
        key: 'GUARDA',
        label: 'Guarda',
        description:
            "Você atuou como agente da lei em uma vila ou cidade. Nem de longe uma profissão tão glamorosa ou emocionante quanto parece; boa parte de seu trabalho resumia-se a guardar um portão, fazer rondas tediosas ou recolher bêbados em tavernas. Pelo menos você recebeu algum treino em investigação e combate. Também tem consigo alguma boa arma, que 'esqueceu' de devolver quando abandonou a milícia para se tornar aventureiro.",

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Apito, insígnia da milícia, uma arma marcial.',
            },
            { type: 'PERICIA', label: 'Investigação', key: 'INVESTIGACAO' },
            { type: 'PERICIA', label: 'Luta', key: 'LUTA' },
            { type: 'PERICIA', label: 'Percepção', key: 'PERCEPCAO' },
            { type: 'PODER', label: 'Investigador', key: 'INVESTIGADOR' },
            { type: 'PODER', label: 'Detetive', key: 'DETETIVE' },
            {
                type: 'PODER',
                label: 'Um poder de combate',
                key: 'UM_PODER_DE_COMBATE',
            },
        ],
        specialPower: {
            label: 'Detetive',
            description:
                'Você pode substituir testes de Percepção e Intuição por testes de Investigação.',
        },
    },
    {
        key: 'HERDEIRO',
        label: 'Herdeiro',
        description:
            'Você pertence a uma linhagem de nobres, mercadores, conjuradores, acadêmicos, assassinos, ou outra atividade tradicional em sua família — tão tradicional que, de você, não se espera outra coisa. Pode ser uma longa e antiquíssima ascendência, traçada até antes da Grande Batalha, ou você apenas é filho de uma importante personalidade. Talvez tenha nascido em alguma ordem de cavalaria no Reino da Ordem da Luz, ou uma influente estirpe da nobreza do Reino Capital, ou como filho de um célebre arquimago com planos de enviá -lo à Academia Arcana, ou até cresceu em um culto familiar secreto a um deus maligno. Graças a essa herança, recebeu treino e equipamento adequados. Mas você pretende mesmo seguir esse caminho?',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Um símbolo de sua herança, como um anel de sinete ou manto cerimonial. Enquanto estiver com esse item, você pode ser reconhecido por sua descendência, o que pode ser bom... ou não!',
            },
            { type: 'PERICIA', label: 'Misticismo', key: 'MISTICISMO' },
            { type: 'PERICIA', label: 'Nobreza', key: 'NOBREZA' },
            {
                type: 'PERICIA',
                label: 'Ofício (qualquer)',
                key: 'OFICIO_QUALQUER',
            },
            { type: 'PODER', label: 'Comandar', key: 'COMANDAR' },
            { type: 'PODER', label: 'Herança', key: 'HERANCA' },
        ],
        specialPower: {
            label: 'Herança',
            description:
                'Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000.',
        },
    },
    {
        key: 'HEROI_CAMPONES',
        label: 'Herói camponês',
        description:
            'Quando o povoado foi atacado por goblins, você empunhou o forcado para expulsá-los. Quando o estábulo pegou fogo, você se arriscou para salvar todos os animais. Quando todos temiam a mansão assombrada na colina, você encontrou a carta de amor perdida que trouxe descanso à alma torturada. Você era o campeão local, amado pelo povo, mas também destinado a feitos maiores. Houve comoção quando você partiu para uma vida de aventuras, mas ninguém deixou de orar por seu sucesso. Talvez você até tenha sido presenteado com alguma arma ou item há tempos guardado no povoado.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Um kit de Ofício ou uma arma simples, traje de plebeu.',
            },
            { type: 'PERICIA', label: 'Adestramento', key: 'ADESTRAMENTO' },
            {
                type: 'PERICIA',
                label: 'Ofício (qualquer)',
                key: 'OFICIO_QUALQUER',
            },
            {
                type: 'PODER',
                label: 'Amigo dos Plebeus',
                key: 'AMIGO_DOS_PLEBEUS',
            },
            { type: 'PODER', label: 'Sortudo', key: 'SORTUDO' },
            { type: 'PODER', label: 'Surto Heroico', key: 'SURTO_HEROICO' },
            { type: 'PODER', label: 'Torcida', key: 'TORCIDA' },
        ],
        specialPower: {
            label: 'Amigo dos Plebeus',
            description:
                'Você consegue hospedagem gratuita, para você e seus aliados, em famílias ou comunidades plebeias.',
        },
    },
    {
        key: 'MARUJO',
        label: 'Marujo',
        description:
            'Você foi tripulante em uma embarcação — um barco pesqueiro, caravela pirata, galeão explorador, trirreme dos minotauros, junco tamuraniano... — provavelmente no Mar Negro ou no Mar do Dragão Rei, mas talvez ao longo do imenso Rio dos Deuses. Você também pode ter trabalhado em um veículo exótico, como um dirigível goblin, ou mesmo em uma embarcação mágica, como as naves vivas gog’magogue que viajam entre mundos!',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'T$ 2d6 (seu último salário), corda.',
            },
            { type: 'PERICIA', label: 'Atletismo', key: 'ATLETISMO' },
            { type: 'PERICIA', label: 'Jogatina', key: 'JOGATINA' },
            {
                type: 'PERICIA',
                label: 'Ofício (marinheiro)',
                key: 'OFICIO_MARINHEIRO',
            },
            { type: 'PERICIA', label: 'Pilotagem', key: 'PILOTAGEM' },
            { type: 'PODER', label: 'Acrobáitco', key: 'ACROBAITCO' },
            {
                type: 'PODER',
                label: 'Passagem de Navio',
                key: 'PASSAGEM_DE_NAVIO',
            },
        ],
        specialPower: {
            label: 'Passagem de Navio',
            description:
                'Você consegue transporte marítimo para você e seus companheiros, sem custos, desde que todos paguem com trabalho (passar em pelo menos um teste de perícia adequado durante a viagem).',
        },
    },
    {
        key: 'MATEIRO',
        label: 'Mateiro',
        description:
            'Nem todos em Arton vivem em cidades confortavelmente abastecidas por fazendeiros, mineiros ou pescadores — muitas comunidades ainda obtêm sustento através da caça. Você aprendeu cedo a abater animais selvagens para colocar comida na mesa, ou como esporte de gosto duvidoso. Se você caça com reverência a Deusa da Natureza ou apenas coleciona troféus com orgulho, a escolha é sua. De qualquer forma, para alguém habituado a flechar cervos e colocar armadilhas para coelhos, combater ogros, demônios e dragões seria apenas o passo seguinte.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Uma barraca, um arco curto, 20 flechas.',
            },
            { type: 'PERICIA', label: 'Atletismo', key: 'ATLETISMO' },
            { type: 'PERICIA', label: 'Furtividade', key: 'FURTIVIDADE' },
            { type: 'PERICIA', label: 'Sobrevivência', key: 'SOBREVIVENCIA' },
            { type: 'PODER', label: 'Lobo Solitário', key: 'LOBO_SOLITARIO' },
            {
                type: 'PODER',
                label: 'Sentidos Aguçados',
                key: 'SENTIDOS_AGUCADOS',
            },
            {
                type: 'PODER',
                label: 'Vendedor de Carcaças',
                key: 'VENDEDOR_DE_CARCACAS',
            },
        ],
        specialPower: {
            label: 'Vendedor de Carcaças',
            description:
                'Você pode fazer um teste de Sobrevivência para Sustento, como a perícia Ofício.',
        },
    },
    {
        key: 'MEMBRO_DE_GUILDA',
        label: 'Membro de guilda',
        description:
            'Você foi, ou ainda é, membro atuante em uma grande guilda — uma associação de artesãos, mercadores, magos, criminosos ou mesmo aventureiros. A guilda forneceu o treinamento e equipamento necessários para suas atividades, esperando que você seja útil em troca. Você se manteve fiel a seus patronos, cumprindo missões e colhendo os benefícios de pertencer a uma vasta organização? Ou deixou essa vida para trás, sendo agora desprezado ou até caçado por seus antigos mestres?',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Kit de ladrão ou kit de ofício.',
            },
            { type: 'PERICIA', label: 'Diplomacia', key: 'DIPLOMACIA' },
            { type: 'PERICIA', label: 'Enganação', key: 'ENGANACAO' },
            { type: 'PERICIA', label: 'Misticismo', key: 'MISTICISMO' },
            {
                type: 'PERICIA',
                label: 'Ofício (qualquer)',
                key: 'OFICIO_QUALQUER',
            },
            { type: 'PODER', label: 'Foco em perícia', key: 'FOCO_EM_PERICIA' },
            {
                type: 'PODER',
                label: 'Rede de Contatos',
                key: 'REDE_DE_CONTATOS',
            },
        ],
        specialPower: {
            label: 'Rede de Contatos',
            description:
                'Graças à influência de sua guilda, você pode usar Diplomacia para obter informação sem custo (veja Investigação).',
        },
    },
    {
        key: 'MERCADOR',
        label: 'Mercador',
        description:
            'Seguindo uma tradição de família, após herdar um estabelecimento ou apenas como um jovem empregado, você atuou como comerciante — pelo menos por algum tempo. Uma tenda modesta em algum grande mercado urbano? Uma caravana mercante cruzando o Reinado? Um belo bazar na prestigiada cidade voadora de Vectora? Após alguns anos de negociações e jornadas (nem tão tranquilas quanto outros imaginam), você talvez não tenha ficado rico, mas reuniu algum equipamento e dinheiro suficientes para começar carreira como aventureiro.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Uma carroça, um trobo, mercadorias para vender no valor de T$ 100.',
            },
            { type: 'PERICIA', label: 'Diplomacia', key: 'DIPLOMACIA' },
            { type: 'PERICIA', label: 'Intuição', key: 'INTUICAO' },
            {
                type: 'PERICIA',
                label: 'Ofício (qualquer)',
                key: 'OFICIO_QUALQUER',
            },
            { type: 'PODER', label: 'Negociação', key: 'NEGOCIACAO' },
            { type: 'PODER', label: 'Proficiência', key: 'PROFICIENCIA' },
            { type: 'PODER', label: 'Sortudo', key: 'SORTUDO' },
        ],
        specialPower: {
            label: 'Negociação',
            description:
                'Você pode vender itens 10% mais caro (não cumulativo com barganha).',
        },
    },
    {
        key: 'MINERADOR',
        label: 'Minerador',
        description:
            'Ser aventureiro é a profissão mais perigosa de todas; ser mineiro, talvez a segunda mais perigosa. Você mergulhou nas profundezas da terra atrás de metais necessários à civilização ou riquezas em gemas preciosas. Enquanto humanos e outras raças consideram essa vida um pesadelo, quase todos os anões acreditam ser a mais feliz das carreiras. A escuridão e o sufocamento dos subterrâneos talvez tenham sido assustadores, mas trouxeram a você bens materiais valiosos, bem como informação profunda (sem trocadilhos) sobre túneis e masmorras.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Gemas preciosas no valor de T$ 100, picareta.',
            },
            { type: 'PERICIA', label: 'Atletismo', key: 'ATLETISMO' },
            { type: 'PERICIA', label: 'Fortitude', key: 'FORTITUDE' },
            {
                type: 'PERICIA',
                label: 'Ofício (minerador)',
                key: 'OFICIO_MINERADOR',
            },
            { type: 'PODER', label: 'Ataque Poderoso', key: 'ATAQUE_PODEROSO' },
            { type: 'PODER', label: 'Escavador', key: 'ESCAVADOR' },
            {
                type: 'PODER',
                label: 'Sentidos Aguçados',
                key: 'SENTIDOS_AGUCADOS',
            },
        ],
        specialPower: {
            label: 'Escavador',
            description:
                'Você se torna proficiente em picareta e não sofre penalidade em deslocamento por terreno difícil em masmorras e subterrâneos.',
        },
    },
    {
        key: 'NOMADE',
        label: 'Nômade',
        description:
            'Até onde se lembra, você nunca pertenceu a um só lugar. Sua família viajava constantemente, como parte de alguma grande caravana comercial, peregrinação religiosa ou algum povo primitivo que nunca praticou agricultura. Ou talvez suas razões para viajar sejam bastante diferentes e pessoais — após a quase extinção de seu povo, muitos elfos temem criar raízes, enquanto a Deusa da Ambição exige que seus devotos se mantenham sempre em viagem. Para você, habituado às estradas e sem laços com nenhuma terra, bastou um pequeno passo para se tornar aventureiro.',

        options: [
            { type: 'ITEM', key: 'ITEM', label: 'Bordão, bússola.' },
            { type: 'PERICIA', label: 'Cavalgar', key: 'CAVALGAR' },
            { type: 'PERICIA', label: 'Pilotagem', key: 'PILOTAGEM' },
            { type: 'PERICIA', label: 'Sobrevivência', key: 'SOBREVIVENCIA' },
            { type: 'PODER', label: 'Lobo Solitário', key: 'LOBO_SOLITARIO' },
            { type: 'PODER', label: 'Mochileiro', key: 'MOCHILEIRO' },
            {
                type: 'PODER',
                label: 'Sentidos Aguçados',
                key: 'SENTIDOS_AGUCADOS',
            },
        ],
        specialPower: {
            label: 'Mochileiro',
            description:
                'Você não sofre a penalidade de armadura e a redução de deslocamento por transportar carga pesada.',
        },
    },
    {
        key: 'PIVETE',
        label: 'Pivete',
        description:
            'Você era uma criança de rua. Não conheceu seus pais, foi abandonado por eles ou fugiu para evitar maus tratos. Sem muitas escolhas na vida, aprendeu cedo a sobreviver em grandes cidades, pedindo esmolas, roubando bolsas ou cumprindo pequenas tarefas para bandidos. Tornar-se aventureiro não parecia apenas um jeito de ficar rico e famoso, mas também a única chance de uma vida melhor. Talvez você não tenha as armaduras e mantos chiques de seus companheiros, mas sabe se virar nas ruas melhor que ninguém.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: ' Kit de ladrão, traje de plebeu, um animal urbano (como um cão, gato, rato ou pombo).',
            },
            { type: 'PERICIA', label: 'Furtividade', key: 'FURTIVIDADE' },
            { type: 'PERICIA', label: 'Iniciativa', key: 'INICIATIVA' },
            { type: 'PERICIA', label: 'Ladinagem', key: 'LADINAGEM' },
            { type: 'PODER', label: 'Acrobático', key: 'ACROBATICO' },
            {
                type: 'PODER',
                label: 'Aparência Inofensiva',
                key: 'APARENCIA_INOFENSIVA',
            },
            { type: 'PODER', label: 'Quebra-galho', key: 'QUEBRA_GALHO' },
        ],
        specialPower: {
            label: 'Quebra-galho',
            description:
                'Em cidades ou metrópoles, você pode comprar qualquer item não superior ou mágico por metade do custo normal. Esses itens não podem ser vendidos (são velhos, sujos, furtados...).',
        },
    },
    {
        key: 'REFUGIADO',
        label: 'Refugiado',
        description:
            'Neste mundo assolado por tantas guerras e tragédias, você acabou sobrevivendo a alguma delas. Sendo elfo, estava presente durante a sofrida queda do Reino Élfico. Escapou à destruição do Império de Jade. Teve sorte em sair do caminho de Mestre Arsenal, conseguiu esconder-se das forças puristas ou testemunhou a chegada da Flecha de Fogo e viveu para contar a história. Trauma e privações talvez tenham tornado você amargo, sombrio, embrutecido... mas também um sobrevivente tenaz, acostumado a uma vida perigosa.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Um item estrangeiro de até T$ 100.',
            },
            { type: 'PERICIA', label: 'Fortitude', key: 'FORTITUDE' },
            { type: 'PERICIA', label: 'Reflexos', key: 'REFLEXOS' },
            { type: 'PERICIA', label: 'Vontade', key: 'VONTADE' },
            { type: 'PODER', label: 'Estoico', key: 'ESTOICO' },
            {
                type: 'PODER',
                label: 'Vontade de Ferro',
                key: 'VONTADE_DE_FERRO',
            },
        ],
        specialPower: {
            label: 'Estoico',
            description:
                'Sua recuperação de pontos de vida e pontos de mana com descanso aumenta em uma categoria: normal em condições ruins, confortável em condições normais e assim por diante.',
        },
    },
    {
        key: 'SEGUIDOR',
        label: 'Seguidor',
        description:
            'Você não nasceu herói, mas viveu algum tempo na companhia de um. Pode ter sido escudeiro de um cavaleiro da Justiça, garoto de recados para um ladino, criado de um nobre... enfim, um ajudante para um aventureiro de verdade. Durante esse tempo adquiriu aprendizado valioso, testemunhou eventos incríveis, mas você não seria um seguidor para sempre. Como ocorreu a separação? Você apenas disse adeus e trilhou seu próprio caminho? Seu mestre desapareceu de forma misteriosa ou foi assassinado diante de seus olhos? Você ficou com parte de seus itens, como presente ou lembrança?',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Um item recebido de seu mestre no valor de até T$ 100.',
            },
            { type: 'PERICIA', label: 'Adestramento', key: 'ADESTRAMENTO' },
            {
                type: 'PERICIA',
                label: 'Ofício (qualquer)',
                key: 'OFICIO_QUALQUER',
            },
            { type: 'PODER', label: 'Antigo Mestre', key: 'ANTIGO_MESTRE' },
            { type: 'PODER', label: 'Proficiência', key: 'PROFICIENCIA' },
            { type: 'PODER', label: 'Surto Heroico', key: 'SURTO_HEROICO' },
        ],
        specialPower: {
            label: 'Antigo Mestre',
            description:
                'Você ainda mantém contato com o herói que costumava servir. A critério do mestre, em uma emergência, você pode receber alguma ajuda — ou então uma bela bronca por esperar que heróis poderosos resolvam o seu problema!',
        },
    },
    {
        key: 'SELVAGEM',
        label: 'Selvagem',
        description:
            'Você nasceu em uma tribo de bárbaros incultos ou tem uma origem bem mais exótica. Perdeu-se dos pais verdadeiros em alguma região remota, sobrevivendo graças aos cuidados de um eremita, ou criado por animais, ou por pura bondade dos deuses. Você pode nem mesmo ter nascido de pais humanoides — talvez seja cria de dragões, demônios ou deuses, com poderes a serem revelados no momento certo. Será que você ainda teme a civilização, assustando-se com uma simples fogueira? Ou já aprendeu algumas coisas, graças a seus novos companheiros?',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Uma arma simples, um pequeno animal de estimação como um pássaro ou esquilo.',
            },
            { type: 'PERICIA', label: 'Percepção', key: 'PERCEPCAO' },
            { type: 'PERICIA', label: 'Reflexos', key: 'REFLEXOS' },
            { type: 'PERICIA', label: 'Sobrevivência', key: 'SOBREVIVENCIA' },
            { type: 'PODER', label: 'Lobo Solitário', key: 'LOBO_SOLITARIO' },
            { type: 'PODER', label: 'Vida Rústica', key: 'VIDA_RUSTICA' },
            { type: 'PODER', label: 'Vitalidade', key: 'VITALIDADE' },
        ],
        specialPower: {
            label: 'Vida Rústica',
            description:
                'Você come coisas que fariam um avestruz vomitar e também consegue descansar nos lugares mais desconfortáveis (mesmo dormindo ao relento, sua recuperação de PV e PM nunca é inferior a seu próprio nível).',
        },
    },
    {
        key: 'SOLDADO',
        label: 'Soldado',
        description:
            'Reino Capital. Reino da Ordem da Luz. A Supremacia Purista. Em Arton existem vastas forças militares. Ainda jovem, você se alistou (ou foi convocado) como soldado em um grande exército. Independentemente de sua função exata dentro da máquina de guerra — infantaria, cavalaria, arqueiro, cozinheiro... —, você recebeu algum treinamento em combate e equipamento decente. Mas em alguma ocasião você abandonou a vida militar para se tornar aventureiro. Foi dispensado com honras, após uma grande façanha? Sobreviveu a um conflito sangrento? Desertou antes de um massacre?',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Uma arma marcial, um uniforme militar, uma insígnia de seu exército.',
            },
            { type: 'PERICIA', label: 'Fortitude', key: 'FORTITUDE' },
            { type: 'PERICIA', label: 'Guerra', key: 'GUERRA' },
            { type: 'PERICIA', label: 'Luta', key: 'LUTA' },
            { type: 'PERICIA', label: 'Pontaria', key: 'PONTARIA' },
            { type: 'PODER', label: 'Influência', key: 'INFLUENCIA' },
            {
                type: 'PODER',
                label: 'Um poder de combate',
                key: 'UM_PODER_DE_COMBATE',
            },
        ],
        specialPower: {
            label: 'Influência Militar',
            description:
                'Você fez amigos nas forças armadas. Onde houver acampamentos ou bases militares, você pode conseguir hospedagem e informações para você e seus aliados.',
        },
    },
    {
        key: 'TAVERNEIRO',
        label: 'Taverneiro',
        description:
            'Não é incomum que heróis aposentados se tornem donos de tavernas ou estalagens, mas o contrário também pode ocorrer. Você foi dono, filho do dono ou empregado em algum lugar frequentado por aventureiros — esses tipos sempre cheios de ouro e bravatas, atiçando sua ambição. Claro, eles nem sempre mencionam os horrores, amputações e mortes! Ainda assim, parece bem melhor que a vida atrás do balcão, limpando canecas sujas. Você ouviu todas as grandes histórias, trocou socos em algumas brigas e até ganhou uma lembrança ou outra de algum herói bêbado.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Rolo de macarrão ou martelo de carne (mesmas estatísticas de uma clava), uma panela, um avental, uma caneca e um pano sujo.',
            },
            { type: 'PERICIA', label: 'Diplomacia', key: 'DIPLOMACIA' },
            { type: 'PERICIA', label: 'Jogatina', key: 'JOGATINA' },
            {
                type: 'PERICIA',
                label: 'Ofício (culinária)',
                key: 'OFICIO_CULINARIA',
            },
            { type: 'PODER', label: 'Gororoba', key: 'GOROROBA' },
            { type: 'PODER', label: 'Proficiência', key: 'PROFICIENCIA' },
            { type: 'PODER', label: 'Vitalidade', key: 'VITALIDADE' },
        ],
        specialPower: {
            label: 'Gororoba',
            description:
                'Você prepara comidas em uma categoria de tempo menor (uma hora para comidas de até T$ 10, um dia para comidas de até T$ 100 etc.). Você ainda pode sofrer uma penalidade de –5 no teste de Ofício para diminuir o tempo em mais uma categoria (uma hora baixa para dez minutos).',
        },
    },
    {
        key: 'TRABALHADOR',
        label: 'Trabalhador',
        description:
            'Nenhum glamour aqui, apenas trabalho braçal pesado. De origem humilde, sem grandes chances na vida, você trabalhou duro desde muito jovem. Transportou pedras na construção de templos e castelos, carregou sacas de grãos em fazendas, empilhou cargas em portos, puxou arado feito um animal de tração. Talvez sua vida tenha sido um pouco melhor, como servo em um palácio. Ou muito pior, arrastando ou queimando corpos em campos de batalha. Não é surpresa que a carreira como aventureiro, mesmo perigosa, tenha parecido muito mais atraente.',

        options: [
            {
                type: 'ITEM',
                key: 'ITEM',
                label: 'Uma ferramenta pesada (mesmas estatísticas de uma maça ou lança, a sua escolha).',
            },
            { type: 'PERICIA', label: 'Atletismo', key: 'ATLETISMO' },
            { type: 'PERICIA', label: 'Fortitude', key: 'FORTITUDE' },
            { type: 'PODER', label: 'Atlético', key: 'ATLETICO' },
            { type: 'PODER', label: 'Esforçado', key: 'ESFORCADO' },
        ],
        specialPower: {
            label: 'Esforçado',
            description:
                'Você não teme trabalho duro, nem prazos apertados. Você recebe um bônus de +2 em todos os testes de perícias estendidos.',
        },
    },
]
