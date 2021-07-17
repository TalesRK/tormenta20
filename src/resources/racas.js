export const getRaceByKey = (key) => {
    return racas.find((item) => item.key === key)
}

export const racas = [
    {
        label: 'Humano',
        key: 'HUMANO',
        description:
            'O povo mais numeroso em Arton, humanos são considerados os escolhidos dos deuses, aqueles que governam o mundo. Em sua variedade e adaptabilidade, são encontrados em quase todos os pontos do continente — dos vales férteis do Reinado às vastidões áridas do Deserto da Perdição. São exploradores e desbravadores ambiciosos, sempre buscando algo além.',
        speed: 9,
        raceSkills: [
            {
                label: '+2 em Três Atributos Diferentes',
                key: 'HUMANO_2_EM_TRES_ATRIBUTOS_DIFERENTES',
                description:
                    'Filhos de Valkaria, Deusa da Ambição, humanos podem se destacar em qualquer caminho que escolherem.',
            },
            {
                label: 'Versátil',
                key: 'HUMANO_VERSATIL',
                description:
                    'Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral a sua escolha.',
            },
        ],
        choices: [
            {
                selectionRule: 'DEFAULT',
                key: 'HUMANO_2_EM_TRES_ATRIBUTOS_DIFERENTES_BLOCK',
                valueSource: {
                    type: 'RACE_SKILL',
                    sourceValue: 'HUMANO_2_EM_TRES_ATRIBUTOS_DIFERENTES',
                },
                source: {
                    key: 'HUMANO_3_ATRIBUTOS_SEL',
                    dataSource: 'attributes',
                    select: 3,
                    pointsEach: 2,
                },
            },
            {
                selectionRule: 'DEFAULT',
                key: 'HUMANO_VERSATIL_OPT',
                valueSource: {
                    type: 'RACE_SKILL',
                    sourceValue: 'HUMANO_VERSATIL',
                },
                source: {
                    key: 'HUMANO_VERSATIL_OPT_SEL',
                    select: 1,
                    options: [
                        {
                            key: 'HUMANO_VERSATIL_OPT_1_MAP',
                            label: '2 perícias',
                            addSelections: ['HUMANO_VERSATIL_OPT_1'],
                        },
                        {
                            key: 'HUMANO_VERSATIL_OPT_2_MAP',
                            label: '1 perícia + 1 poder geral',
                            addSelections: [
                                'HUMANO_VERSATIL_OPT_2_SEL_1',
                                'HUMANO_VERSATIL_OPT_2_SEL_2',
                            ],
                        },
                    ],
                },
            },
            {
                selectionRule: 'HUMANO_VERSATIL_OPT_1',
                key: 'HUMANO_VERSATIL_OPT_1',
                parent: 'HUMANO_VERSATIL_OPT_1_MAP',
                source: {
                    key: 'HUMANO_VERSATIL_OPT_1_SEL', //retirar key de todos os sources
                    dataSource: 'skills',
                    select: 2,
                },
            },
            {
                selectionRule: 'HUMANO_VERSATIL_OPT_2_SEL_1',
                key: 'HUMANO_VERSATIL_OPT_2_SEL_1',
                parent: 'HUMANO_VERSATIL_OPT_2_MAP',
                source: {
                    key: 'HUMANO_VERSATIL_OPT_2_SKILLS_SEL',
                    dataSource: 'skills',
                    select: 1,
                },
            },
            {
                selectionRule: 'HUMANO_VERSATIL_OPT_2_SEL_2',
                key: 'HUMANO_VERSATIL_OPT_2_SEL_2',
                parent: 'HUMANO_VERSATIL_OPT_2_MAP',
                source: {
                    key: 'HUMANO_VERSATIL_OPT_2_POWERS_SEL',
                    dataSource: 'general_powers',
                    select: 1,
                },
            },
        ],
    },
    {
        label: 'Anão',
        key: 'ANAO',
        description:
            'Anões são o mais resiliente dos povos. Em suas cidadelas subterrâneas, trabalham duro escavando minas e forjando metal em belas armas, armaduras e joias. São honestos e determinados, honrando a família e a tradição. Apesar de sua profunda paixão por forja e cerveja, pouca coisa é mais preciosa para um anão que cultivar uma barba longa e orgulhosa.',
        attributes: [
            { key: 'CON', points: 4 },
            { key: 'SAB', points: 2 },
            { key: 'DES', points: -2 },
        ],
        speed: 6,
        creatureSkills: ['VISAO_NO_ESCURO'],
        pontosVida: {
            inicial: 3,
            porNivel: 1,
        },
        raceSkills: [
            {
                label: 'Conhecimento das Rochas',
                key: 'ANAO_CONHECIMENTO_DAS_ROCHAS',
                description:
                    'Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.',
            },
            {
                label: 'Devagar e Sempre',
                key: 'ANAO_DEVAGAR_E_SEMPRE',
                description:
                    'Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento nunca é reduzido por uso de armadura ou excesso de carga.',
            },
            {
                label: 'Duro como Pedra',
                key: 'ANAO_DURO_COMO_PEDRA',
                description:
                    'Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.',
            },
            {
                label: 'Tradição de Heredrimm',
                key: 'ANAO_TRADICAO_DE_HEREDRIMM',
                description:
                    'Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.',
            },
        ],
    },
    {
        label: 'Dahllan',
        key: 'DAHLLAN',
        description:
            'Parte humanas, parte fadas, as dahllan são uma raça de mulheres com a seiva de árvores correndo nas veias. Falam com os animais, controlam as plantas — mas também são ferozes em batalha, retorcendo madeira para formar armaduras.',
        attributes: [
            { key: 'SAB', points: 4 },
            { key: 'DES', points: 2 },
            { key: 'INT', points: -2 },
        ],
        spells: ['CONTROLAR_PLANTAS'],
        speed: 9,
        raceSkills: [
            {
                label: 'Amiga das Plantas',
                key: 'DAHLLAN_AMIGA_DAS_PLANTAS',
                description:
                    'Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.',
            },
            {
                label: 'Armadura de Allihanna',
                key: 'DAHLLAN_ARMADURA_DE_ALLIHANNA',
                description:
                    'Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena.',
            },
            {
                label: 'Empatia Selvagem',
                key: 'DAHLLAN_EMPATIA_SELVAGEM',
                description:
                    'Você pode se comunicar com animais através de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e pedir favores de animais. Caso receba esta habilidade novamente, recebe +2 em testes de Adestramento.',
            },
        ],
    },
    {
        label: 'Elfo',
        key: 'ELFO',
        description:
            'Elfos são seres feitos para a beleza e para a guerra, tão habilidosos com magia quanto com espadas e arcos. Elegantes, astutos, de vidas quase eternas, parecem superiores aos humanos em tudo. Poderiam ter governado toda Arton, não fosse a arrogância herdada de sua deusa. Com a queda de Glórienn, os elfos se tornaram um povo sem uma deusa. Um povo independente. Enquanto alguns veem a falta de uma divindade como uma tragédia, outros acreditam que, pela primeira vez na história, são livres.',
        attributes: [
            { key: 'INT', points: 4 },
            { key: 'DES', points: 2 },
            { key: 'CON', points: -2 },
        ],
        speed: 12,
        pontosMana: {
            porNivel: 1,
        },
        creatureSkills: ['VISAO_NA_PENUMBRA'],
        bonusSkills: [
            {
                key: 'MISTICISMO',
                points: 2,
            },
            {
                key: 'PERCEPCAO',
                points: 2,
            },
        ],
        raceSkills: [
            {
                label: 'Graça de Glórienn',
                key: 'ELFO_GRACA_DE_GLORIENN',
                description: 'Seu deslocamento é 12m (em vez de 9m).',
            },
            {
                label: 'Herança Feérica',
                key: 'ELFO_HERANCA_FEERICA',
                description: 'Você recebe +1 ponto de mana por nível.',
            },
            {
                label: 'Sentidos Élficos',
                key: 'ELFO_SENTIDOS_ELFICOS',
                description:
                    'Você recebe visão na penumbra e +2 em Misticismo e Percepção.',
            },
        ],
    },
    {
        label: 'Goblin',
        key: 'GOBLIN',
        description:
            'Estes pequenos seres feiosos conseguiram um lugar entre os povos do Reinado. Podem ser encontrados em todas as grandes cidades, muitos vivendo na imundície, outros prosperando em carreiras que quase ninguém tentaria: espiões, aeronautas, engenhoqueiros. Onde o anão teimoso e o elfo empolado falham, o goblin pode dar um jeito. Porque ele não tem vergonha. Nem orgulho. Nem bom senso.',
        attributes: [
            { key: 'DES', points: 4 },
            { key: 'INT', points: 2 },
            { key: 'CAR', points: -2 },
        ],
        creatureSkills: ['VISAO_NO_ESCURO'],
        speed: 9,
        bonusSkills: [
            {
                key: 'FORTITUDE',
                points: 2,
            },
        ],
        raceSkills: [
            {
                label: 'Engenhoso',
                key: 'GOBLIN_ENGENHOSO',
                description:
                    'Você não sofre penalidades em testes de perícia por não usar kits (como kit de ladrão ou kit de ofício). Se usar o kit, recebe +2 no teste de perícia.',
            },
            {
                label: 'Espelunqueiro',
                key: 'GOBLIN_ESPELUNQUEIRO',
                description:
                    'Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.',
            },
            {
                label: 'Peste Esguia',
                key: 'GOBLIN_PESTE_ESGUIA',
                description:
                    'Seu tamanho é Pequeno, mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos.',
            },
            {
                label: 'Rato das Ruas',
                key: 'GOBLIN_RATO_DAS_RUAS',
                description:
                    'Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.',
            },
        ],
    },
    {
        label: 'Lefou',
        key: 'LEFOU',
        description:
            'Com a influência macabra da Tormenta permeando cada vez mais o mundo, surgiram os lefou. Estes meios-demônios de aparência grotesca passaram a nascer em famílias de outras raças, sendo logo sacrificados ou expulsos. Entre os que escapam, por sua facilidade em manifestar poderes aberrantes, muitos escolhem abraçar o mal, enquanto outros decidem combatê-lo.',
        atributos_opcoes: [
            '+2 em Três Atributos Diferentes (exceto Carisma), Carisma –2.',
        ],
        speed: 9,
        raceSkills: [
            {
                label: 'Cria da Tormenta',
                key: 'LEFOU_CRIA_DA_TORMENTA',
                description:
                    'Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.',
            },
            {
                label: 'Deformidade',
                key: 'LEFOU_DEFORMIDADE',
                description:
                    'Todo lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em duas perícias a sua escolha. Você pode trocar um desses bônus por um poder da Tormenta a sua escolha (esse poder não causa perda de Carisma).',
            },
        ],
        choices: [
            {
                selectionRule: 'DEFAULT',
                key: 'LEFOU_DEFORMIDADE_OPT',
                valueSource: {
                    type: 'RACE_SKILL',
                    sourceValue: 'LEFOU_DEFORMIDADE',
                },
                source: {
                    key: 'LEFOU_DEFORMIDADE_SEL',
                    select: 1,
                    options: [
                        {
                            key: 'LEFOU_DEFORMIDADE_OPT_1_MAP',
                            label: '+2 em 2 perícias',
                            addSelections: ['LEFOU_DEFORMIDADE_OPT_1'],
                        },
                        {
                            key: 'LEFOU_DEFORMIDADE_OPT_2_MAP',
                            label: '+2 em 1 perícia + 1 poder de Tormenta',
                            addSelections: [
                                'LEFOU_DEFORMIDADE_OPT_2_SEL_1',
                                'LEFOU_DEFORMIDADE_OPT_2_SEL_2',
                            ],
                        },
                    ],
                },
            },
            {
                selectionRule: 'LEFOU_DEFORMIDADE_OPT_1',
                key: 'LEFOU_DEFORMIDADE_OPT_1',
                parent: 'LEFOU_DEFORMIDADE_OPT_1_MAP',
                source: {
                    key: 'LEFOU_DEFORMIDADE_OPT_1_SEL',
                    dataSource: 'skills',
                    select: 2,
                    pointsEach: 2,
                },
            },
            {
                selectionRule: 'LEFOU_DEFORMIDADE_OPT_2_SEL_1',
                key: 'LEFOU_DEFORMIDADE_OPT_2_SEL_1',
                parent: 'LEFOU_DEFORMIDADE_OPT_2_MAP',
                source: {
                    key: 'LEFOU_DEFORMIDADE_OPT_2_SKILL_SEL',
                    dataSource: 'skills',
                    select: 1,
                },
            },
            {
                selectionRule: 'LEFOU_DEFORMIDADE_OPT_2_SEL_2',
                key: 'LEFOU_DEFORMIDADE_OPT_2_SEL_2',
                parent: 'LEFOU_DEFORMIDADE_OPT_2_MAP',
                source: {
                    key: 'LEFOU_DEFORMIDADE_OPT_2_POWER_SEL',
                    dataSource: 'general_powers_tormenta',
                    select: 1,
                },
            },
        ],
    },
    {
        label: 'Minotauro',
        key: 'MINOTAURO',
        description:
            'Povo guerreiro, orgulhoso e poderoso, criadores de uma civilização avançada, com a missão sagrada de proteger e governar os fracos — ou assim se enxergavam. Em seus tempos áureos, tomaram grande parte de Arton. Hoje, após a morte de sua divindade e a decadência de seu Império, os minotauros lutam para recuperar a glória perdida ou encontrar um novo papel no mundo.',
        attributes: [
            { key: 'FOR', points: 4 },
            { key: 'CON', points: 2 },
            { key: 'SAB', points: -2 },
        ],
        defenceBonus: 1,
        bonusAttack: ['CHIFRES'],
        speed: 9,
        raceSkills: [
            {
                label: 'Chifres',
                key: 'MINOTAURO_CHIFRES',
                description:
                    'Você possui um ataque natural de chifres (dano 1d6, crítico x2, perfuração). Quando usa a ação ataque, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.',
            },
            {
                label: 'Couro Rígido',
                key: 'MINOTAURO_COURO_RIGIDO',
                description:
                    'Sua pele é dura como a de um touro. Você recebe +1 na Defesa.',
            },
            {
                label: 'Faro',
                key: 'MINOTAURO_FARO',
                description:
                    'Seu focinho fornece um senso de olfato apurado. Você não fica desprevenido e sofre apenas camuflagem (em vez de camuflagem total) contra inimigos que não possa ver.',
            },
            {
                label: 'Medo de Altura',
                key: 'MINOTAURO_MEDO_DE_ALTURA',
                description:
                    'Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco) você fica abalado.',
            },
        ],
    },
    {
        label: 'Qareen',
        key: 'QAREEN',
        description:
            'Descendentes de poderosos gênios, os qareen são otimistas, generosos e prestativos, sempre ansiosos por ajudar. Consideram-se abençoados pela Deusa da Magia, exibindo como evidência a marca de Wynna em seus corpos. Sua magia é mais poderosa quando usada para realizar desejos de outros.',
        attributes: [
            { key: 'CAR', points: 4 },
            { key: 'INT', points: 2 },
            { key: 'SAB', points: -2 },
        ],
        bonusSpellQuantity: 1,
        speed: 9,
        raceSkills: [
            {
                label: 'Desejos',
                key: 'QAREEN_DESEJOS',
                description:
                    'Se lançar uma magia atendendo a um desejo (ou seja, lançar uma magia que alguém tenha pedido desde seu último turno), o custo da magia é reduzido em –1 PM (mínimo 1 PM). Fazer um desejo ao qareen é uma ação livre.',
            },
            {
                label: 'Resistência Elemental',
                key: 'QAREEN_RESISTENCIA_ELEMENTAL',
                description:
                    'Conforme sua ascendência, você recebe resistência a dano 10 a um tipo de dano: frio (qareen da água), trovão (qareen do ar), fogo (qareen do fogo), ácido (qareen da terra), eletricidade (qareen da luz) e trevas (qareen das trevas).',
            },
            {
                label: 'Tatuagem Mística',
                key: 'QAREEN_TATUAGEM_MISTICA',
                description:
                    'Você pode lançar uma magia de 1º círculo a sua escolha (atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.',
            },
        ],
    },
    {
        label: 'Golem',
        key: 'GOLEM',
        description:
            'Diz-se que estes seres são apenas construtos sem vida, criados não pelos deuses, mas por mortais. No entanto, são movidos por forças vivas — espíritos elementais selvagens, capturados e lacrados por meios mágicos em corpos de pedra e metal. Muitos conformam-se com seus papéis como trabalhadores e soldados, enquanto outros demonstram alta inteligência, personalidade e iniciativa. Podem fazer tudo que outras raças fazem, até mesmo conjurar magias arcanas ou divinas. Será que têm alma? Será que encontrarão os deuses quando chegar sua hora?',
        attributes: [
            { key: 'FOR', points: 4 },
            { key: 'CON', points: 2 },
            { key: 'CAR', points: -2 },
        ],
        speed: 6,
        defenceBonus: 2,
        armourPenalty: -2,
        creatureSkills: ['VISAO_NO_ESCURO', 'IMUNIDADE'],
        restrictions: ['ORIGIN'],
        raceSkills: [
            {
                label: 'Canalizar Reparos',
                key: 'GOLEM_CANALIZAR_REPAROS',
                description:
                    'Como uma ação completa, você pode gastar pontos de mana para recuperar pontos de vida, à taxa de 5 PV por PM.',
            },
            {
                label: 'Chassi',
                key: 'GOLEM_CHASSI',
                description:
                    'Seu corpo artificial é resistente, mas rígido. Você recebe +2 na Defesa, mas possui penalidade de armadura –2 e seu deslocamento é 6m. Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu chassi).',
            },
            {
                label: 'Criatura Artificial',
                key: 'GOLEM_CRIATURA_ARTIFICIAL',
                description:
                    'Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento e venenos. Além disso, não precisa respirar, se alimentar ou dormir. Por fim, não recupera pontos de vida por descanso e não se beneficia de magias de cura e itens ingeríveis (comidas, poções etc.). Você precisa ficar inerte por oito horas por dia para recarregar sua fonte de energia. Se fizer isso, recupera PM como se tivesse descansado em condições normais (golens não são afetados por condições boas ou ruins de descanso).',
            },
            {
                label: 'Espírito Elemental',
                key: 'GOLEM_ESPIRITO_ELEMENTAL',
                description:
                    'Escolha entre água (frio), ar (trovão), fogo (fogo) e terra (ácido). Você é imune a dano causado por essa energia. Além disso, se fosse sofrer dano mágico dessa energia, em vez disso cura PV em quantidade igual à metade do dano. Por exemplo, se um golem com espírito elemental do fogo é atingido por uma Bola de Fogo que causa 30 pontos de dano, em vez de sofrer esse dano, ele recupera 15 PV.',
            },
            {
                label: 'Sem Origem',
                key: 'GOLEM_SEM_ORIGEM',
                description:
                    'Como uma criatura artificial, você já foi construído “pronto”. Não teve uma infância, portanto, não tem direito a escolher uma origem e receber benefícios por ela.',
            },
        ],
    },
    {
        label: 'Hynne',
        key: 'HYNNE',
        speed: 6,
        description:
            "Também conhecidos como halflings ou 'pequeninos', os hynne são apreciadores de boa comida e casas aconchegantes, raras vezes escolhendo sair pelo mundo em aventuras perigosas. Quando decidem fazê-lo, contudo, recorrem à agilidade e encanto naturais para ludibriar os inimigos — mais de um taverneiro ou miliciano deixou-se enganar por suas mãos ligeiras e sorrisos inocentes. Foram recentemente forçados a fugir de seu antigo reino natal, sendo então acolhidos pelas Repúblicas Livres de Sambúrdia, onde cultivam ervas e especiarias valiosas. Para espanto de todos, também se tornaram astutos mercadores, muitos ascendendo a príncipes mercantes.",
        attributes: [
            { key: 'DES', points: 4 },
            { key: 'CAR', points: 2 },
            { key: 'FOR', points: -2 },
        ],
        bonusSkills: [
            {
                key: 'ENGANACAO',
                points: 2,
            },
            {
                key: 'ATLETISMO',
                points: 0,
                useAttribute: 'DES',
            },
        ],
        raceSkills: [
            {
                label: 'Arremessador',
                key: 'HYNNE_ARREMESSADOR',
                description:
                    'Seu dano com fundas e armas de arremesso aumenta em um passo.',
            },
            {
                label: 'Pequeno e Rechonchudo',
                key: 'HYNNE_PEQUENO_E_RECHONCHUDO',
                description:
                    'Seu tamanho é Pequeno e seu deslocamento é 6m. Você recebe +2 em Enganação e usa o modificador de Destreza para Atletismo (em vez de Força).',
            },
            {
                label: 'Sorte Salvadora',
                key: 'HYNNE_SORTE_SALVADORA',
                description:
                    'Você pode gastar 1 PM para rolar novamente um teste de resistência recém realizado.',
            },
        ],
    },
    {
        label: 'Kliren',
        key: 'KLIREN',
        description:
            'Estes visitantes de outro mundo seriam uma combinação entre humanos e gnomos — mas, afinal, o que são gnomos? São uma raça que talvez existisse em Arton, não fosse o envolvimento criminoso de seu deus Tilliann na criação da própria Tormenta. Seja como for, os kliren somam a alta inteligência gnômica e a curiosidade humana, resultando em seres de extrema engenhosidade, criatividade e talento com aparatos mecânicos. Seriam capazes de grandes feitos, talvez até dominar Arton, não fossem a impulsividade e imprudência que por vezes abreviam suas vidas...',
        attributes: [
            { key: 'INT', points: 4 },
            { key: 'CAR', points: 2 },
            { key: 'FOR', points: -2 },
        ],
        bonusSkills: [
            {
                key: 'OFICIO',
                points: 2,
            },
        ],
        speed: 9,
        raceSkills: [
            {
                label: 'Híbrido',
                key: 'KLIREN_HIBRIDO',
                description:
                    'Sua natureza multifacetada fez com que você aprendesse conhecimentos variados. Você se torna treinado em uma perícia a sua escolha (não precisa ser da sua classe).',
            },
            {
                label: 'Lógica Gnômica',
                key: 'KLIREN_LOGICA_GNOMICA',
                description:
                    'Quando faz um teste de atributo ou perícia, você pode gastar 2 PM para substituir o modificador de atributo utilizado por Inteligência. Por exemplo, ao fazer um teste de Atletismo você pode gastar 2 PM para usar seu modificador de Inteligência em vez do modificador de Força.',
            },
            {
                label: 'Ossos Frágeis',
                key: 'KLIREN_OSSOS_FRAGEIS',
                description:
                    'Você sofre 1 ponto de dano adicional por dado de dano de esmagamento. Por exemplo, se for atingido por uma clava (dano 1d6), sofre 1d6+1 pontos de dano. Se cair de 3m de altura (dano 2d6), sofre 2d6+2 pontos de dano.',
            },
            {
                label: 'Vanguardista',
                key: 'KLIREN_VANGUARDISTA',
                description:
                    'Você recebe +2 em testes de Ofício (um qualquer, a sua escolha). Além disso, você considera todas as armas de fogo como armas simples.',
            },
        ],
        choices: [
            {
                selectionRule: 'DEFAULT',
                key: 'KLIREN_HIBRIDO_BLOCK',
                valueSource: {
                    type: 'RACE_SKILL',
                    sourceValue: 'KLIREN_HIBRIDO',
                },
                source: {
                    key: 'KLIREN_HIBRIDO_SEL',
                    dataSource: 'skills',
                    select: 1,
                    trainedSkill: true,
                },
            },
        ],
    },
    {
        label: 'Medusa',
        key: 'MEDUSA',
        description:
            'Ainda que estas criaturas reclusas sejam famosas por transformar suas vítimas em pedra com um simples olhar, apenas as mais antigas e poderosas o fazem. Jovens medusas por vezes rejeitam a solidão e crueldade racial, aventurando-se no Reinado, até mesmo fazendo amigos ou integrando equipes de heróis. Conseguem se fazer passar por mulheres humanas, quando escondem o cabelo feito de serpentes. O único povo que não teme medusas são os anões, que as consideram belas musas.',
        attributes: [
            { key: 'DES', points: 4 },
            { key: 'CAR', points: 2 },
        ],
        creatureSkills: ['VISAO_NO_ESCURO'],
        speed: 9,
        raceSkills: [
            {
                label: 'Cria de Megalokk',
                key: 'MEDUSA_CRIA_DE_MEGALOKK',
                description:
                    'Você é uma criatura do tipo monstro e recebe visão no escuro.',
            },
            {
                label: 'Natureza Venenosa',
                key: 'MEDUSA_NATUREZA_VENENOSA',
                description:
                    'Você recebe resistência a veneno 5 e pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja empunhando. A arma causa 1d12 pontos de dano de veneno adicional. O veneno dura até acertar um ataque ou até o fim da cena (o que vier primeiro).',
            },
            {
                label: 'Olhar Atordoante',
                key: 'MEDUSA_OLHAR_ATORDOANTE',
                description:
                    'Você pode gastar uma ação de movimento e 1 PM para forçar uma criatura em alcance curto a fazer um teste de Fortitude (CD Car). Se a criatura falhar, fica atordoada por uma rodada. Se passar, fica imune a esta habilidade por um dia.',
            },
        ],
    },
    {
        label: 'Osteon',
        key: 'OSTEON',
        description:
            'Esqueletos sempre foram temidos como monstros profanos, movidos por puro rancor pelos vivos. Isso mudou; conhecidos coletivamente como osteon, estes esqueletos demonstram a mesma inteligência e consciência das raças vivas, sendo capazes de adotar quaisquer de suas profissões e devoções. Alguns atribuem seu surgimento à queda de Ragnar, antigo Deus da Morte; outros dizem ser consequência da ascensão de Ferren Asloth como um poderoso lich, transformando a nação de Aslothia em um reino necromante.',
        creatureSkills: ['VISAO_NO_ESCURO'],
        speed: 9,
        raceSkills: [
            {
                label: '+2 em Três Atributos Diferentes (exceto Constituição)',
                key: 'OSTEON_2_EM_TRES_ATRIBUTOS_EXCETO_CONSTITUICAO',
                description:
                    'Você recebe +2 em Três Atributos Diferentes (exceto Constituição), Constituição -2.',
            },
            {
                label: 'Armadura Óssea',
                key: 'OSTEON_ARMADURA_OSSEA',
                description:
                    'Você recebe resistência a corte, frio e perfuração 5.',
            },
            {
                label: 'Memória Póstuma',
                key: 'OSTEON_MEMORIA_POSTUMA',
                description:
                    'Você se torna treinado em uma perícia (não precisa ser da sua classe) ou recebe um poder geral a sua escolha. Como alternativa, você pode ser um osteon de outra raça humanoide que não humano. Neste caso, você ganha uma habilidade dessa raça a sua escolha. Se a raça era de tamanho diferente de Médio, você também possui sua categoria de tamanho.',
            },
            {
                label: 'Natureza Esquelética',
                key: 'OSTEON_NATUREZA_ESQUELETICA',
                description:
                    'Você é uma criatura do tipo morto-vivo. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento e venenos. Além disso,não precisa respirar, se alimentar ou dormir. Por fim, magias e habilidades de cura causam dano em você, mas dano de trevas recupera seus PV, e você não se beneficia por itens ingeríveis (comidas, poções etc.).',
            },
            {
                label: 'Preço da Não Vida',
                key: 'OSTEON_PRECO_DA_NAO_VIDA',
                description:
                    'Você precisa passar 8 horas sob a luz de estrelas ou no subterrâneo. Se fizer isso, recupera PV e PM como se tivesse descansado em condições normais. Caso contrário, não recupera PV e PM e sofre os mesmos efeitos de fome.',
            },
        ],
        choices: [
            {
                selectionRule: 'DEFAULT',
                key: 'OSTEON_2_EM_TRES_ATRIBUTOS_EXCETO_CONSTITUICAO_BLOCK',
                valueSource: {
                    type: 'RACE_SKILL',
                    sourceValue:
                        'OSTEON_2_EM_TRES_ATRIBUTOS_EXCETO_CONSTITUICAO',
                },
                source: {
                    key: 'OSTEON_2_EM_TRES_ATRIBUTOS_EXCETO_CONSTITUICAO_SEL',
                    select: 3,
                    pointsEach: 2,
                    dataType: 'attributes',
                    dataValues: [
                        { key: 'FOR', label: 'Força' },
                        { key: 'DES', label: 'Destreza' },
                        { key: 'INT', label: 'Inteligência' },
                        { key: 'CAR', label: 'Carisma' },
                        { key: 'SAB', label: 'Sabedoria' },
                    ],
                },
            },
            {
                selectionRule: 'DEFAULT',
                key: 'OSTEON_MEMORIA_POSTUMA_OPT',
                valueSource: {
                    type: 'RACE_SKILL',
                    sourceValue: 'OSTEON_MEMORIA_POSTUMA',
                },
                source: {
                    key: 'OSTEON_MEMORIA_POSTUMA_OPT_SEL',
                    select: 1,
                    options: [
                        {
                            key: 'OSTEON_MEMORIA_POSTUMA_OPT_1_MAP',
                            label: '1 perícia',
                            addSelections: ['OSTEON_MEMORIA_POSTUMA_OPT_1'],
                        },
                        {
                            key: 'OSTEON_MEMORIA_POSTUMA_OPT_2_MAP',
                            label: '1 poder geral',
                            addSelections: ['OSTEON_MEMORIA_POSTUMA_OPT_2'],
                        },
                    ],
                },
            },
            {
                selectionRule: 'OSTEON_MEMORIA_POSTUMA_OPT_1',
                key: 'OSTEON_MEMORIA_POSTUMA_OPT_1',
                parent: 'OSTEON_MEMORIA_POSTUMA_OPT_1_MAP',
                source: {
                    key: 'OSTEON_MEMORIA_POSTUMA_OPT_1_SEL',
                    dataSource: 'skills',
                    select: 1,
                },
            },
            {
                selectionRule: 'OSTEON_MEMORIA_POSTUMA_OPT_2',
                key: 'OSTEON_MEMORIA_POSTUMA_OPT_2',
                parent: 'OSTEON_MEMORIA_POSTUMA_OPT_2_MAP',
                source: {
                    key: 'OSTEON_MEMORIA_POSTUMA_OPT_2_SEL',
                    dataSource: 'general_powers',
                    select: 1,
                },
            },
        ],
    },
    {
        label: 'Sereia/Tritão',
        key: 'TRITAO',
        description:
            'Sendo chamadas sereias quando femininas e tritões quando masculinos, os membros desta raça de torso humanoide e corpo de peixe podem adotar forma bípede para caminhar em terras emersas — algo que têm feito com cada vez mais frequência. Enquanto algumas sereias temem ou desprezam os humanos, outras enxergam Arton como um mundo misterioso, exótico, cheio de oportunidades e aventuras.',
        speed: 9,
        raceSkills: [
            {
                label: '+2 em Três Atributos Diferentes',
                key: 'TRITAO_2_EM_TRES_ATRIBUTOS_DIFERENTES',
                description: 'Você recebe +2 em três atributos diferentes.',
            },
            {
                label: 'Canção dos Mares',
                key: 'TRITAO_CANCAO_DOS_MARES',
                description:
                    'Você pode lançar duas das magias a seguir: Amedrontar, Comando, Despedaçar, Enfeitiçar, Hipnotismo ou Sono (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.',
            },
            {
                label: 'Mestre do Tridente',
                key: 'TRITAO_MESTRE_DO_TRIDENTE',
                description:
                    'Para você, o tridente é uma arma simples. Além disso, você recebe +2 em rolagens de dano com azagaias, lanças e tridentes.',
            },
            {
                label: 'Transformação Anfíbia',
                key: 'TRITAO_TRANSFORMACAO_ANFIBIA',
                description:
                    'Você pode respirar debaixo d’água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d’água, sua cauda desaparece e dá lugar a pernas (deslocamento 9m). Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um bom banho!).',
            },
        ],
        choices: [
            {
                selectionRule: 'DEFAULT',
                key: 'TRITAO_2_EM_TRES_ATRIBUTOS_DIFERENTES_BLOCK',
                valueSource: {
                    type: 'RACE_SKILL',
                    sourceValue: 'TRITAO_2_EM_TRES_ATRIBUTOS_DIFERENTES',
                },
                source: {
                    key: 'TRITAO_2_EM_TRES_ATRIBUTOS_DIFERENTES_SEL',
                    dataSource: 'attributes',
                    select: 3,
                    pointsEach: 2,
                },
            },
            {
                selectionRule: 'DEFAULT',
                key: 'TRITAO_CANCAO_DOS_MARES_BLOCK',
                valueSource: {
                    type: 'RACE_SKILL',
                    sourceValue: 'TRITAO_CANCAO_DOS_MARES',
                },
                source: {
                    key: 'TRITAO_CANCAO_DOS_MARES_SEL',
                    select: 2,
                    dataType: 'spells',
                    dataValues: [
                        { key: 'AMEDRONTAR', label: 'Amedrontar' },
                        { key: 'COMANDO', label: 'Comando' },
                        { key: 'DESPEDACAR', label: 'Despedaçar' },
                        { key: 'ENFEITICAR', label: 'Enfeitiçar' },
                        { key: 'HIPNOTISMO', label: 'Hipnotismo' },
                        { key: 'SONO', label: 'Sono' },
                    ],
                },
            },
        ],
    },
    {
        label: 'Sílfide',
        key: 'SILFIDE',
        description:
            'Descendentes de extraplanares divinos, esta raça é formada por seres com traços angelicais ou demoníacos — ou ambos. Por serem ligados às forças opostas da luz e trevas, suraggel têm traços diferentes quando orientados para seu lado celestial, sendo então conhecidos como aggelus; ou para o lado abissal, assim sendo chamados sulfure. Sua natureza em geral combina com a ascendência, lembrando habitantes dos Mundos dos Deuses, mas eles também podem ser surpreendentes e contraditórios: não se espante muito ao conhecer um aggelus ladino ou um sulfure paladino.',
        attributes: [
            { key: 'CAR', points: 4 },
            { key: 'DES', points: 2 },
            { key: 'FOR', points: -4 },
        ],
        creatureSkills: ['VISAO_NA_PENUMBRA'],
        speed: 9,
        raceSkills: [
            {
                label: 'Asas de Borboleta',
                key: 'SILFIDE_ASAS_DE_BORBOLETA',
                description:
                    'Seu tamanho é Minúsculo. Você pode flutuar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para voar com deslocamento de 12m.',
            },
            {
                label: 'Espírito da Natureza',
                key: 'SILFIDE_ESPIRITO_DA_NATUREZA',
                description:
                    'Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.',
            },
            {
                label: 'Magia das Fadas',
                key: 'SILFIDE_MAGIA_DAS_FADAS',
                description:
                    'Você pode lançar duas das magias a seguir: Criar Ilusão, Enfeitiçar, Luz (como uma magia arcana) e Sono (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.',
            },
        ],
        choices: [
            {
                selectionRule: 'DEFAULT',
                key: 'SILFIDE_MAGIA_DAS_FADAS_BLOCK',
                valueSource: {
                    type: 'RACE_SKILL',
                    sourceValue: 'SILFIDE_MAGIA_DAS_FADAS',
                },
                source: {
                    key: 'SILFIDE_MAGIA_DAS_FADAS_SEL',
                    select: 2,
                    dataType: 'spells',
                    dataValues: [
                        { label: 'Criar Ilusão', key: 'CRIAR_ILUSAO' },
                        { label: 'Enfeitiçar', key: 'ENFEITICAR' },
                        { label: 'Luz', key: 'LUZ' },
                        { label: 'Sono', key: 'SONO' },
                    ],
                },
            },
        ],
    },
    {
        label: 'Suraggel (Aggelus)',
        key: 'SURAGGEL_AGGELUS',
        description:
            'Descendentes de extraplanares divinos, esta raça é formada por seres com traços angelicais ou demoníacos — ou ambos. Por serem ligados às forças opostas da luz e trevas, suraggel têm traços diferentes quando orientados para seu lado celestial, sendo então conhecidos como aggelus; ou para o lado abissal, assim sendo chamados sulfure. Sua natureza em geral combina com a ascendência, lembrando habitantes dos Mundos dos Deuses, mas eles também podem ser surpreendentes e contraditórios: não se espante muito ao conhecer um aggelus ladino ou um sulfure paladino.',
        attributes: [
            { key: 'SAB', points: 4 },
            { key: 'CAR', points: 2 },
            { key: 'DES', points: 4 },
        ],
        creatureSkills: ['VISAO_NO_ESCURO'],
        speed: 9,
        bonusSkills: [
            {
                key: 'DIPLOMACIA',
                points: 2,
            },
            {
                key: 'INTUICAO',
                points: 2,
            },
        ],
        spells: ['LUZ'],
        raceSkills: [
            {
                label: 'Herança Divina',
                key: 'SURAGGEL_HERANCA_DIVINA',
                description:
                    'Você é uma criatura do tipo espírito e recebe visão no escuro.',
            },
            {
                label: 'Luz Sagrada',
                key: 'SURAGGEL_AGGELUS_LUZ_SAGRADA',
                description:
                    'Você recebe +2 em Diplomacia e Intuição. Além disso, pode lançar Luz (como uma magia divina; atributo-chave Carisma). Caso aprenda novamente esta magia, o custo para lançá-la diminui em –1 PM.',
            },
        ],
    },
    {
        label: 'Suraggel (Sulfure)',
        key: 'SURAGGEL_SULFURE',
        description:
            'Descendentes de extraplanares divinos, esta raça é formada por seres com traços angelicais ou demoníacos — ou ambos. Por serem ligados às forças opostas da luz e trevas, suraggel têm traços diferentes quando orientados para seu lado celestial, sendo então conhecidos como aggelus; ou para o lado abissal, assim sendo chamados sulfure. Sua natureza em geral combina com a ascendência, lembrando habitantes dos Mundos dos Deuses, mas eles também podem ser surpreendentes e contraditórios: não se espante muito ao conhecer um aggelus ladino ou um sulfure paladino.',
        attributes: [
            { key: 'SAB', points: 4 },
            { key: 'DES', points: 4 },
            { key: 'INT', points: 2 },
        ],
        creatureSkills: ['VISAO_NO_ESCURO'],
        speed: 9,
        bonusSkills: [
            {
                key: 'ENGANACAO',
                points: 2,
            },
            {
                key: 'FURTIVIDADE',
                points: 2,
            },
        ],
        spells: ['ESCURIDAO'],
        raceSkills: [
            {
                label: 'Herança Divina',
                key: 'SURAGGEL_HERANCA_DIVINA',
                description:
                    'Você é uma criatura do tipo espírito e recebe visão no escuro.',
            },
            {
                label: 'Sombras Profanas',
                key: 'SURAGGEL_SULFURE_SOMBRAS_PROFANAS',
                description:
                    'Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar a magia Escuridão (como uma magia divina, atributo-chave Inteligência). Caso aprenda novamente esta magia, o custo para lançá-la diminui em –1 PM.',
            },
        ],
    },
    {
        label: 'Trog',
        key: 'TROG',
        description:
            "Trogloditas (ou 'trogs') são homens-lagarto primitivos e subterrâneos que odeiam todos os outros seres — especialmente os que sabem forjar aço, aquilo que mais cobiçam. Suas tribos tramam incursões contra povoados humanos, fazem emboscadas em estradas, atacam exploradores em masmorras. Uns poucos, no entanto, divergem da crueldade e selvageria inerentes à raça. Abandonam a tribo ou são expulsos. Escolhem caminhos surpreendentes, inesperados; tornam-se druidas, ou clérigos, ou bucaneiros, ou sabe-se lá o que mais. Enfim, acabam aceitos como colegas por aventureiros tão estranhos e deslocados quanto eles próprios.",
        attributes: [
            { key: 'CON', points: 4 },
            { key: 'FOR', points: 2 },
            { key: 'INT', points: -2 },
        ],
        bonusAttack: ['MORDIDA'],
        creatureSkills: ['VISAO_NO_ESCURO'],
        defenceBonus: 1,
        speed: 9,
        raceSkills: [
            {
                label: 'Mau Cheiro',
                key: 'TROG_MAU_CHEIRO',
                description:
                    'Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as criaturas (exceto trogs) em alcance curto devem passar em um teste de Fortitude (CD Con) ou ficarão enjoadas durante 1d6 rodadas. Uma criatura que passe no teste de resistência fica imune a esta habilidade por um dia.',
            },
            {
                label: 'Mordida',
                key: 'TROG_MORDIDA',
                description:
                    'Você possui um ataque natural de mordida (dano 1d6, crítico x2, perfuração). Quando usa a ação ataque, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.',
            },
            {
                label: 'Reptiliano',
                key: 'TROG_REPTILIANO',
                description:
                    'Você é uma criatura do tipo monstro e recebe visão no escuro, +1 na Defesa e, se estiver sem armadura ou roupas pesadas, +5 em Furtividade.',
            },
            {
                label: 'Sangue Frio',
                key: 'TROG_SANGUE_FRIO',
                description:
                    'Você sofre 1 ponto de dano adicional por cada dado de dano de frio.',
            },
        ],
    },
]
