import colors from '../styles/colors'

export const characterTabs = [
    { title: 'Combate', key: 'COMBAT' },
    { title: 'Proficiência', key: 'PROFICIENCY' },
    { title: 'Magias', key: 'SPELLS' },
    { title: 'Itens', key: 'ITEMS' },
    { title: 'Notas', key: 'NOTES' },
]

export const spells = [
    {
        title: 'Aliado Animal',
        spellCost: 15,
        spellDice: '1d8',
        school: 'Conv',
    },
    {
        title: 'Enxame de Pestes',
        spellCost: 20,
        spellDice: '1d20',
        school: 'Ilusão',
    },
    {
        title: 'Controlar Fogo',
        spellCost: 10,
        spellDice: '1d6',
        school: 'Adiv',
    },
    {
        title: 'Raio Solar',
        spellCost: 0,
        spellDice: '3d4',
        school: 'Evoc',
    },
    {
        title: 'Conjurar Mortos-Vivos',
        spellCost: 30,
        spellDice: '2d12',
        school: 'Necro',
    },
    {
        title: 'Aliado Animal',
        spellCost: 15,
        spellDice: '1d8',
        school: 'Conv',
    },
    {
        title: 'Enxame de Pestes',
        spellCost: 20,
        spellDice: '1d20',
        school: 'Ilusão',
    },
    {
        title: 'Controlar Fogo',
        spellCost: 10,
        spellDice: '1d6',
        school: 'Adiv',
    },
    {
        title: 'Raio Solar',
        spellCost: 0,
        spellDice: '3d4',
        school: 'Evoc',
    },
    {
        title: 'Conjurar Mortos-Vivos',
        spellCost: 30,
        spellDice: '2d12',
        school: 'Necro',
    },
    {
        title: 'Aliado Animal',
        spellCost: 15,
        spellDice: '1d8',
        school: 'Conv',
    },
    {
        title: 'Enxame de Pestes',
        spellCost: 20,
        spellDice: '1d20',
        school: 'Ilusão',
    },
    {
        title: 'Controlar Fogo',
        spellCost: 10,
        spellDice: '1d6',
        school: 'Adiv',
    },
    {
        title: 'Raio Solar',
        spellCost: 0,
        spellDice: '3d4',
        school: 'Evoc',
    },
    {
        title: 'Conjurar Mortos-Vivos',
        spellCost: 30,
        spellDice: '2d12',
        school: 'Necro',
    },
]

export const attributes = {
    life: {
        mainStat: {
            label: 'Vida',
            value: 18,
            textColor: colors.life,
        },
        attributes: [
            {
                label: 'Força',
                value: 18,
            },
            {
                label: 'Destreza',
                value: 18,
            },
            {
                label: 'Constituição',
                value: 18,
            },
        ],
    },
    mana: {
        mainStat: {
            label: 'Mana',
            value: 18,
            textColor: colors.mana,
        },
        attributes: [
            {
                label: 'Inteligência',
                value: 18,
            },
            {
                label: 'Sabedoria',
                value: 18,
            },
            {
                label: 'Carisma',
                value: 18,
            },
        ],
    },
}

export const creationCharacterPages = [
    {
        key: 'RACE',
        label: 'Raça',
    },
    {
        key: 'CLASS',
        label: 'Classe',
    },
    {
        key: 'HABILITIES',
        label: 'Pontos de Habilidade',
    },
    {
        key: 'BACKGROUND',
        label: 'Antepassado',
    },
    {
        key: 'PROFICIENCIES',
        label: 'ProficiênciasS',
    },
    {
        key: 'SPELLS',
        label: 'Magias',
    },
    {
        key: 'EQUIPMENTS',
        label: 'Equipamentos',
    },
]

export const races = [
    {
        key: 'HUMANO',
        label: 'Humano',
    },
    {
        key: 'ANAO',
        label: 'Anão',
    },
    {
        key: 'DAHLLAN',
        label: 'Dahllan',
    },
    {
        key: 'ELFO',
        label: 'Elfo',
    },
    {
        key: 'GOBLIN',
        label: 'Goblin',
    },
    {
        key: 'LEFOU',
        label: 'Lefou',
    },
    {
        key: 'MINOTAURO',
        label: 'Minotauro',
    },
    {
        key: 'QAREEN',
        label: 'Qareen',
    },
    {
        key: 'GOLEM',
        label: 'Golem',
    },
    {
        key: 'HYNNE',
        label: 'Hynne',
    },
    {
        key: 'KLIREN',
        label: 'Kliren',
    },
    {
        key: 'MEDUSA',
        label: 'Medusa',
    },
    {
        key: 'OSTEON',
        label: 'Osteon',
    },
    {
        key: 'TRITAO',
        label: 'Sereia/tritão',
    },
    {
        key: 'SILFIDE',
        label: 'Sílfide',
    },
    {
        key: 'SURAGGEL',
        label: 'Suraggel',
    },
    {
        key: 'TROG',
        label: 'Trog',
    },
]

export const racesData = [
    {
        raca: 'HUMANO',
        data: {
            escolher: {
                origem: 'atributos',
                escolhas: 3,
                pontos: 2,
            },
            opcoes: [
                {
                    escolher: {
                        origem: 'pericias',
                        escolhas: 2,
                        pontos: 1,
                    },
                },
                {
                    escolher: {
                        origem: 'pericias',
                        escolhas: 1,
                        pontos: 1,
                    },
                    escolher: {
                        origem: 'poderes_gerais',
                        escolhas: 1,
                        pontos: 1,
                    },
                },
            ],
        },
    },
    {
        raca: 'ANAO',
        data: {
            vida: {
                bonus_inicial: 3,
                bonus_por_nivel: 1,
            },
            deslocamento: {
                pontos: 9,
            },
            atributos: {
                constituicao: 4,
                sabedoria: 2,
                destreza: -2,
            },
            habilidades_criatura: ['VISAO_ESCURO'],
            armas: {
                bonus_ataque: {
                    pontos: 2,
                    tipos_armas: ['MACHADO', 'MARTELO', 'MARRETA', 'PICARETA'],
                },
            },
            tracos: {
                traco: {
                    titulo: 'Devagar e Sempre',
                    descricao:
                        'Seu deslocamento não é reduzido por uso de armadura ou excesso de carga.',
                },
                traco: {
                    titulo: 'Conhecimento das Rochas',
                    descricao:
                        'Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.',
                },
                traco: {
                    titulo: 'Tradição de Heredrimm',
                    descricao:
                        'Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.',
                },
            },
        },
    },
    {
        raca: 'DAHLLAN',
        data: {
            atributos: {
                inteligencia: -2,
                sabedoria: 4,
                destreza: 2,
            },
            magias: [
                {
                    magia: 'CONTROLAR_PLANTAS',
                    nivel: '1',
                },
            ],
            habilidades_raca: ['ARMADURA_ALLIHANNA', 'EMPATIA_SELVAGEM'],
            condicoes: {
                condicao: {
                    se: {
                        origem: 'habilidades_raca',
                        item: 'EMPATIA_SELVAGEM',
                        campo: 'quantidade',
                        valor: '>1',
                    },
                    entao: {
                        origem: 'pericias',
                        item: 'ADESTRAMENTO',
                        campo: 'pontos',
                        valor: '+2',
                    },
                },
            },
        },
    },
    {
        raca: 'ELFO',
        data: {
            atributos: {
                inteligencia: 4,
                constituicao: -2,
                destreza: 2,
            },
            deslocamento: {
                pontos: 12,
            },
            mana: {
                bonus_inicial: 1,
                bonus_por_nivel: 1,
            },
            habilidades_criatura: ['VISAO_PENUMBRA'],
            pericias: [
                {
                    pericia: 'MISTICISMO',
                    pontos: 2,
                },
                {
                    pericia: 'PERCEPCAO',
                    pontos: 2,
                },
            ],
        },
    },
    {
        raca: 'GOBLIN',
        data: {},
    },
    {
        raca: 'LEFOU',
        data: {},
    },
    {
        raca: 'MINOTAURO',
        data: {},
    },
    {
        raca: 'QAREEN',
        data: {},
    },
    {
        raca: 'GOLEM',
        data: {},
    },
    {
        raca: 'HYNNE',
        data: {},
    },
    {
        raca: 'KLIREN',
        data: {},
    },
    {
        raca: 'MEDUSA',
        data: {},
    },
    {
        raca: 'OSTEON',
        data: {},
    },
    {
        raca: 'TRITAO',
        data: {},
    },
    {
        raca: 'SILFIDE',
        data: {},
    },
    {
        raca: 'SURAGGEL',
        data: {},
    },
    {
        raca: 'TROG',
        data: {},
    },
]
