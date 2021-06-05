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
