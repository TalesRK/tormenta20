import React from 'react'
import colors from '../styles/colors'
import { Icon } from 'react-native-elements'
import { racas } from '../resources/racas'
import { generalPowers, tormenta } from '../resources/generalPowers'
import { proficiencies } from './proficiencies'

export const initialValues = {
    characters: [],
    character: {
        vidaAtual: 0,
        manaAtual: 0,
        atributos: [],
        nome: '',
        nivel: 0,
        classe: {
            key: '',
            nivel: 0,
        },
        raca: '',
        origem: '',
        pericias: [],
        itens: [],
        itemsText: '',
        poderes: [],
        powersText: '',
        magia: {
            magias: [],
            quantidade_por_progresso: 0,
            tipo_progresso: '',
            atributo_chave: '',
        },
        notas: '',
    },
}

export const characterTabs = [
    { title: 'Combate', key: 'COMBAT' },
    { title: 'Poderes', key: 'POWERS' },
    { title: 'Perícias', key: 'SKILLS' },
    { title: 'Magias', key: 'SPELLS' },
    { title: 'Itens', key: 'ITEMS' },
    { title: 'Notas', key: 'NOTES' },
]

export function translateKey(key) {
    const label = keyLabels[key]
    const attribute = keyLabels.atributos[key]
    const creatureHab = keyLabels.habilidades_criatura[key]
    const originOptionType = keyLabels.originOptionTypes[key]
    const skillSource = keyLabels.skillSource[key]
    const keyLabel = keyLabelsList.find((item) => item.key === key)

    const data =
        label ||
        attribute ||
        creatureHab ||
        originOptionType ||
        skillSource ||
        (keyLabel?.label ?? '')

    if (!data) {
        console.error('Legenda não encontrada', key)
    }

    return data
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
    originOptionTypes: {
        ITEM: 'Item',
        PERICIA: 'Perícia',
        PODER: 'Poder',
    },
    skillSource: {
        CLASSE: 'Classe',
        PERICIAS: 'Sel. perícia',
        ORIGEM: 'Origem',
        RACA: 'Sel. raça',
    },
}

const keyLabelsList = [
    { key: 'CON', label: 'Constituição' },
    { key: 'SAB', label: 'Sabedoria' },
    { key: 'DES', label: 'Destreza' },
    { key: 'INT', label: 'Inteligência' },
    { key: 'CAR', label: 'Carisma' },
    { key: 'FOR', label: 'Força' },
]

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
            key: 'FOR',
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
            key: 'DES',
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
            key: 'CON',
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
            key: 'INT',
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
            key: 'SAB',
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
            key: 'CAR',
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
            key: 'FOR',
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
            key: 'DES',
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
            key: 'CON',
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
            key: 'INT',
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
            key: 'SAB',
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
            key: 'CAR',
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
            key: 'FOR',
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
            key: 'DES',
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
            key: 'CON',
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
            key: 'INT',
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
            key: 'SAB',
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
            key: 'CAR',
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

export const attributes = [
    {
        key: 'FOR',
        label: 'Força',
    },
    {
        key: 'DES',
        label: 'Destreza',
    },
    {
        key: 'CON',
        label: 'Constituição',
    },
    {
        key: 'INT',
        label: 'Inteligência',
    },
    {
        key: 'CAR',
        label: 'Carisma',
    },
    {
        key: 'SAB',
        label: 'Sabedoria',
    },
]

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

export const mapSourceTitle = (block) => {
    let blockSource

    if (block.valueSource) {
        switch (block.valueSource.type) {
            case 'RACE_SKILL':
                const raceOfThisItem = racas.find((item) => {
                    return item.raceSkills.some(
                        (skill) => skill.key === block.valueSource.sourceValue
                    )
                })
                const raceSkillOfThisItem = raceOfThisItem.raceSkills.find(
                    (skill) => skill.key === block.valueSource.sourceValue
                )
                blockSource = raceSkillOfThisItem.label
        }
    }
    if (block.source.select ?? false) {
        const nameFormatted = mapSourceName(
            block.source.dataSource,
            block.source.select
        )
        const prefix = blockSource && blockSource + ': '
        return `${prefix || ''}Selecione ${
            block.source.select
        } ${nameFormatted}`
    } else {
        console.error('nome não encontrado', { source })
        return 'nome não encontrado'
    }
}

export const mapDataSourceValues = (dataSource) => {
    switch (dataSource) {
        case 'attributes':
            return attributes
        case 'races':
            return racas
        case 'general_powers':
            return generalPowers
        case 'general_powers_tormenta':
            return tormenta.data
        case 'skills':
            return proficiencies
        default:
            return []
    }
}

const mapSourceName = (name, quantity) => {
    const plural = quantity > 1
    switch (name) {
        case 'races':
            return plural ? 'raças' : 'raça'
        case 'attributes':
            return plural ? 'atributos' : 'atributo'
        case 'general_powers':
            return plural ? 'poderes gerais' : 'poder geral'
        case 'general_powers_tormenta':
            return plural ? 'poderes da tormenta' : 'poder da tormenta'
        case 'skills':
            return plural ? 'perícias' : 'perícia'
        default:
            return plural ? 'opções' : 'opção'
    }
}
