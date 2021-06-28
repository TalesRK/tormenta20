import { getClassByKey, classesThatHaveMagic } from './classes'
import { proficiencies } from './proficiencies'
import { getRaceByKey } from './racas'

export const calcAttributeByKey = (character, attributeKey) => {
    const race = getRaceByKey(character.raca)

    const attributesArray = character.atributos.concat(race.attributes || [])

    const value = attributesArray
        .filter((att) => att.key === attributeKey)
        .map((att) => att.points)
        .reduce((a, b) => a + b, 0)

    return value
}

export const calcModifierByKey = (character, attributeKey) => {
    const attribute = calcAttributeByKey(character, attributeKey)
    return calcModifierByAttribute(attribute)
}

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
    //todo read from race
    const selectedClass = getClassByKey(character.classe.key)
    const lifeModifier = calcModifierByKey(character, 'CON')
    const baseClassLifeByLevel =
        selectedClass.data.pontos_vida.por_nivel < 1
            ? 1
            : selectedClass.data.pontos_vida.por_nivel

    const lifeByLevel = baseClassLifeByLevel * (character.nivel - 1)

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
    return attributes
        .filter((att) => att.key === attributeKey)
        .map((att) => att.points)
        .reduce((a, b) => a + b, 0)
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

export const calcSkillModifier = (character, skillKey) => {
    const skillData = proficiencies.find((item) => item.key === skillKey)
    const charSkillData = character.pericias.find(
        (item) => item.key === skillKey
    )
    const skillAttribute = getAttributeByAttKey(
        character.atributos,
        skillData.attribute
    )

    const levelModifier = Math.floor(character.nivel / 2)
    const attributeModifier = calcModifierByAttribute(skillAttribute)

    let trainedSkillBonus = 0
    if (charSkillData) {
        trainedSkillBonus = 2
        if (character.nivel >= 7) trainedSkillBonus = 4
        if (character.nivel >= 15) trainedSkillBonus = 6
    }

    return levelModifier + attributeModifier + trainedSkillBonus
}
