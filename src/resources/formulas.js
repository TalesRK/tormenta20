import { getClassByKey, classesThatHaveMagic } from './classes'

export const calcModifierByAttribute = (value) => {
    return Math.floor((value - 10) / 2)
}

export const calcCostByAttribute = (value) => {
    switch (value) {
        case 8:
            return -2
        case 9:
            return -1
        case 10:
            return 0
        case 11:
            return 1
        case 12:
            return 2
        case 13:
            return 3
        case 14:
            return 4
        case 15:
            return 6
        case 16:
            return 8
        case 17:
            return 11
        case 18:
            return 14
    }
}

export const rollDice = (value) => {
    let quantity, dice, i
    ;[quantity, dice] = value.split('d')

    let result = 0

    for (i = 0; i < quantity; i++)
        result += 1 + Math.floor(Math.random() * dice)

    return result
}

export const calcMaxLife = (character) => {
    const selectedClass = getClassByKey(character.classe.key)
    const lifeModifier = calcModifierByAttribute(
        character.atributos.constituicao
    )
    const lifeByLevel =
        selectedClass.data.pontos_vida.por_nivel * (character.nivel - 1)

    return selectedClass.data.pontos_vida.inicial + lifeModifier + lifeByLevel
}

export const calcMaxMana = (character) => {
    const selectedClass = getClassByKey(character.classe.key)
    if (!classesThatHaveMagic.some((item) => item === selectedClass.key)) {
        return 0
    }
    const spellAttribute = getAttributeByAttKey(
        character.atributos,
        character.magia.atributo_chave
    )
    const attributeModifier = calcModifierByAttribute(spellAttribute)
    const manaByLevel =
        selectedClass.data.pontos_mana.por_nivel * character.nivel

    return attributeModifier + manaByLevel
}

const getAttributeByAttKey = (attributes, attributeKey) => {
    switch (attributeKey) {
        case 'FOR':
            return attributes.forca
        case 'DES':
            return attributes.destreza
        case 'CON':
            return attributes.constituicao
        case 'INT':
            return attributes.inteligencia
        case 'CAR':
            return attributes.carisma
        case 'SAB':
            return attributes.sabedoria
    }
}

export const getLifeOrManaValues = (maxValue) => {
    const initialValue = -maxValue
    const finalValue = maxValue * 3 + 1
    const result = []
    for (let i = initialValue; i < finalValue; i++) {
        result.push('' + i)
    }
    return result
}
