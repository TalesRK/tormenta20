import React from 'react'
import colors from '../styles/colors'
import { Icon } from 'react-native-elements'

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

export function translateKey(key) {
    const label = keyLabels[key]
    const attribute = keyLabels.atributos[key]
    const creatureHab = keyLabels.habilidades_criatura[key]
    return label || attribute || creatureHab
}

export const keyLabels = {
    poderes_gerais: 'Poderes gerais',
    pericias: 'Perícias',
    atributos: {
        constituicao: 'Constituição',
        sabedoria: 'Sabedoria',
        destreza: 'Destreza',
        forca: 'Força',
        inteligencia: 'Inteligência',
        carisma: 'Carisma',
    },
    habilidades_criatura: {
        VISAO_ESCURO: 'Visão no escuro',
        VISAO_PENUMBRA: 'Visão na penumbra',
    },
}

export const origens = {
    atributos: [
        { key: 'constituicao' },
        { key: 'sabedoria' },
        { key: 'destreza' },
        { key: 'forca' },
        { key: 'inteligencia' },
        { key: 'carisma' },
    ],
}

export const races = [
    {
        key: 'HUMANO',
        label: 'Humano',
        data: {
            atributos_escolher: {
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
        key: 'ANAO',
        label: 'Anão',
        data: {
            vida: {
                bonus_inicial: 3,
                bonus_por_nivel: 1,
            },
            deslocamento: {
                pontos: 9,
            },
            atributos: [
                { key: 'constituicao', value: 4 },
                { key: 'sabedoria', value: 2 },
                { key: 'destreza', value: -2 },
            ],
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
        key: 'DAHLLAN',
        label: 'Dahllan',
        data: {
            atributos: [
                { key: 'sabedoria', value: 4 },
                { key: 'destreza', value: 2 },
                { key: 'inteligencia', value: -2 },
            ],
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
        key: 'ELFO',
        label: 'Elfo',
        data: {
            atributos: [
                { key: 'inteligencia', value: 4 },
                { key: 'destreza', value: 2 },
                { key: 'constituicao', value: -2 },
            ],
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
        label: 'Sereia/Tritão',
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

export const attributeMapType = [
    {
        key: 'comprar',
        label: 'Comprar pontos',
        selected: true,
    },
    {
        key: 'rolar',
        label: 'Rolar dados',
    },
    {
        key: 'preencher',
        label: 'Preencher manualmente',
    },
]

export const buyAttributes = {
    pointsLeft: 20,
    attributes: [
        {
            label: 'FOR',
            key: 'forca',
            currentAttribute: 10,
            pointsBought: 0,
            icon: (
                <Icon
                    size={30}
                    name="arm-flex"
                    type="material-community"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'DES',
            key: 'destreza',
            currentAttribute: 10,
            pointsBought: 0,
            icon: (
                <Icon
                    size={30}
                    name="run"
                    type="material-community"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'CON',
            key: 'constituicao',
            currentAttribute: 10,
            pointsBought: 0,
            icon: (
                <Icon
                    size={30}
                    name="heartbeat"
                    type="font-awesome-5"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'INT',
            key: 'inteligencia',
            currentAttribute: 10,
            pointsBought: 0,
            icon: (
                <Icon
                    size={30}
                    name="brain"
                    type="font-awesome-5"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'SAB',
            key: 'sabedoria',
            currentAttribute: 10,
            pointsBought: 0,
            icon: (
                <Icon
                    size={30}
                    name="meditation"
                    type="material-community"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'CAR',
            key: 'carisma',
            currentAttribute: 10,
            pointsBought: 0,
            icon: (
                <Icon
                    size={30}
                    name="grin-wink"
                    type="font-awesome-5"
                    color={colors.red_1}
                />
            ),
        },
    ],
}

export const rollAttributes = {
    hasRolled: false,
    attributes: [
        {
            label: 'FOR',
            key: 'forca',
            currentAttribute: 10,
            hasFilled: false,
            icon: (
                <Icon
                    size={30}
                    name="arm-flex"
                    type="material-community"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'DES',
            key: 'destreza',
            currentAttribute: 10,
            hasFilled: false,
            icon: (
                <Icon
                    size={30}
                    name="run"
                    type="material-community"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'CON',
            key: 'constituicao',
            currentAttribute: 10,
            hasFilled: false,
            icon: (
                <Icon
                    size={30}
                    name="heartbeat"
                    type="font-awesome-5"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'INT',
            key: 'inteligencia',
            currentAttribute: 10,
            hasFilled: false,
            icon: (
                <Icon
                    size={30}
                    name="brain"
                    type="font-awesome-5"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'SAB',
            key: 'sabedoria',
            currentAttribute: 10,
            hasFilled: false,
            icon: (
                <Icon
                    size={30}
                    name="meditation"
                    type="material-community"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'CAR',
            key: 'carisma',
            currentAttribute: 10,
            hasFilled: false,
            icon: (
                <Icon
                    size={30}
                    name="grin-wink"
                    type="font-awesome-5"
                    color={colors.red_1}
                />
            ),
        },
    ],
}

export const fillAttributes = {
    attributes: [
        {
            label: 'FOR',
            key: 'forca',
            currentAttribute: 10,
            icon: (
                <Icon
                    size={30}
                    name="arm-flex"
                    type="material-community"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'DES',
            key: 'destreza',
            currentAttribute: 10,
            icon: (
                <Icon
                    size={30}
                    name="run"
                    type="material-community"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'CON',
            key: 'constituicao',
            currentAttribute: 10,
            icon: (
                <Icon
                    size={30}
                    name="heartbeat"
                    type="font-awesome-5"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'INT',
            key: 'inteligencia',
            currentAttribute: 10,
            icon: (
                <Icon
                    size={30}
                    name="brain"
                    type="font-awesome-5"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'SAB',
            key: 'sabedoria',
            currentAttribute: 10,
            icon: (
                <Icon
                    size={30}
                    name="meditation"
                    type="material-community"
                    color={colors.red_1}
                />
            ),
        },
        {
            label: 'CAR',
            key: 'carisma',
            currentAttribute: 10,
            icon: (
                <Icon
                    size={30}
                    name="grin-wink"
                    type="font-awesome-5"
                    color={colors.red_1}
                />
            ),
        },
    ],
}

export const spellsSchools = [
    {
        key: 'ABJUR',
        label: 'Abjuração (Abjur)',
        labelAbrev: 'Abjur',
        description:
            'Magias de proteção, que anulam outras magias ou expulsam criaturas invocadas de volta a seus planos de existência nativos.',
    },
    {
        key: 'ADIV',
        label: 'Adivinhação (Adiv)',
        labelAbrev: 'Adiv',
        description: 'Magias de detecção ou que vasculham passado e futuro.',
    },
    {
        key: 'CONV',
        label: 'Convocação (Conv)',
        labelAbrev: 'Conv',
        description:
            'Magias que transportam matéria. Esse transporte é realizado através dos Plano Astral, um espaço que existe entre os mundos; por isso, qualquer efeito que bloqueia viagens astrais também impede convocações. Criaturas convocadas, quando destruídas, desaparecem e são devolvidas a seus mundos nativos.',
    },
    {
        key: 'ENCAN',
        label: 'Encantamento (Encan)',
        labelAbrev: 'Encan',
        description:
            'Magias que afetam a mente. Não afetam criaturas com Inteligência nula, como alguns construtos e mortos-vivos.',
    },
    {
        key: 'EVOC',
        label: 'Evocação (Evoc)',
        labelAbrev: 'Evoc',
        description:
            'Magias que manipulam ou geram energia pura. Ácido, eletricidade, fogo e frio são as energias geradas pelos quatro elementos, respectivamente terra, ar, fogo e água. Magias de fogo funcionam sob a água, mas criam vapor quente em vez de chamas abertas. Luz é a manifestação de energia positiva, capaz de iluminar e curar. Por fim, essência é energia mágica pura.',
    },
    {
        key: 'ILUSAO',
        label: 'Ilusão',
        labelAbrev: 'Ilusão',
        description:
            'Essas magias fazem outros perceberem algo que não existe ou ignorarem algo real. Assim como encantamentos, ilusões não afetam criaturas sem mente (com Inteligência nula).',
    },
    {
        key: 'NECRO',
        label: 'Necromancia (Necro)',
        labelAbrev: 'Necro',
        description:
            'Magias que canalizam energia negativa, criando escuridão, drenando a força vital de criaturas vivas e criando mortos-vivos. Magias de necromancia causam dano de trevas.',
    },
    {
        key: 'TRANS',
        label: 'Transmutação (Trans)',
        labelAbrev: 'Trans',
        description:
            'Magias que alteram as propriedades físicas de uma criatura ou objeto.',
    },
]
