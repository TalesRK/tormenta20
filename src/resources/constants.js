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
