import React, { useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import { Icon } from 'react-native-elements'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'
import {
    attributeMapType,
    buyAttributes,
    rollAttributes,
    fillAttributes,
} from '../resources/constants'
// Otimizar imports usando import * as Formulas from '../resources/formulas', uso: Formulas.calcCostByAttribute()
import {
    calcCostByAttribute,
    calcModifierByAttribute,
    rollDice,
} from '../resources/formulas'
import { useStateValue } from '../context/ContextProvider'

const CreateCharacterPoints = ({ navigation }) => {
    const [attMapTypeState, setAttMapType] = useState(attributeMapType)
    const [pointBuy, setPointBuy] = useState(buyAttributes)
    const [rollPoints, setRollPoints] = useState(rollAttributes)
    const [fillPoints, setFillPoints] = useState(fillAttributes)
    const [{ characterCreation }, dispatch] = useStateValue()

    const selectAttMapType = (index) => {
        const newAttMapType = [...attMapTypeState]
        newAttMapType.forEach((item) => (item.selected = false))

        const selectedAttMapType = newAttMapType[index]
        selectedAttMapType.selected = true

        setAttMapType(newAttMapType)
    }

    const renderType = (attMapType, index) => {
        return (
            <>
                <TouchableOpacity
                    key={attMapType.label + index + 'default'}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: colors.red_2,
                        borderRadius: 10,
                        marginBottom: 10,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        backgroundColor: colors.black_3,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => selectAttMapType(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {attMapType.label}
                    </Text>
                </TouchableOpacity>
            </>
        )
    }

    const renderTypeSelected = (attMapType, index) => {
        return (
            <>
                <TouchableOpacity
                    key={attMapType.label + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: colors.red_1,
                        borderRadius: 10,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        backgroundColor: colors.black_3,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => selectAttMapType(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {attMapType.label}
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        marginBottom: 10,
                        backgroundColor: colors.black_3,
                        width: '95%',
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        padding: '2%',
                    }}
                >
                    {renderAttData(attMapType)}
                </View>
            </>
        )
    }

    const renderAttData = (attMapType) => {
        if (attMapType.key === 'comprar') return renderBuyPoints()
        if (attMapType.key === 'rolar') return renderRollPoints()
        if (attMapType.key === 'preencher') return renderFillPoints()
    }

    const renderFillPoints = () => {
        return (
            <View>
                <View>
                    {fillPoints.attributes.map((opt, idx) => {
                        const modifier =
                            calcModifierByAttribute(opt.currentAttribute) || 0
                        return (
                            <View
                                key={opt.label + 'fillPoints'}
                                style={{
                                    flexDirection: 'row',
                                    paddingHorizontal: 10,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    borderColor: colors.black_2,
                                    marginBottom: 5,
                                }}
                            >
                                <View
                                    style={{
                                        alignItems: 'center',
                                        width: '20%',
                                    }}
                                >
                                    <Text style={[{ color: colors.white_1 }]}>
                                        {opt.label}
                                    </Text>
                                    {opt.icon}
                                </View>

                                <View
                                    style={{
                                        width: '50%',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <View
                                        style={{
                                            borderBottomColor: colors.red_1,
                                            borderBottomWidth: 1.3,
                                        }}
                                    >
                                        <TextInput
                                            placeholder="Atributo"
                                            onChangeText={(value) =>
                                                /*TODO quando digita e apaga o cursor vai pra direita, deve ficar no centro*/
                                                handleAttributeChange(
                                                    value,
                                                    idx
                                                )
                                            }
                                            value={'' + opt.currentAttribute}
                                            autoCompleteType={'off'}
                                            autoCorrect={false}
                                            keyboardType={'numeric'}
                                            textAlign={'center'}
                                            textContentType={'none'}
                                            maxLength={4}
                                            style={[
                                                {
                                                    color: colors.white_1,
                                                    fontSize: 18,
                                                    padding: 0,
                                                },
                                            ]}
                                            placeholderTextColor={
                                                colors.black_4
                                            }
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: '20%',
                                        flexDirection: 'row',
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={{ color: colors.white_1 }}>
                                        =
                                    </Text>
                                    <Text style={{ color: colors.white_1 }}>
                                        {modifier > 0
                                            ? `+${modifier}`
                                            : modifier}
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }

    const handleAttributeChange = (value, idx) => {
        if (value > 9999) {
            return
        }
        const newFillPoints = Object.assign({}, fillPoints)
        newFillPoints.attributes[idx].currentAttribute = value
        setFillPoints(newFillPoints)
    }

    const renderRollPoints = () => {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {rollPoints.attributes.map((opt, idx) => {
                        const modifier = calcModifierByAttribute(
                            opt.currentAttribute
                        )
                        return (
                            <View
                                key={opt.label + 'rollPoints'}
                                style={[
                                    {
                                        alignItems: 'center',
                                        width: '15%',
                                    },
                                ]}
                            >
                                <Text style={[{ color: colors.white_1 }]}>
                                    {opt.label}
                                </Text>
                                {opt.icon}
                                <Text style={[{ color: colors.white_1 }]}>
                                    {opt.currentAttribute}
                                </Text>

                                <View
                                    style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                        justifyContent: 'space-evenly',
                                    }}
                                >
                                    <Icon
                                        size={30}
                                        name="caret-left"
                                        type="font-awesome"
                                        color={colors.red_1}
                                        onPress={() =>
                                            replateToSide('left', idx)
                                        }
                                    />
                                    <Icon
                                        size={30}
                                        name="caret-right"
                                        type="font-awesome"
                                        color={colors.red_1}
                                        onPress={() =>
                                            replateToSide('right', idx)
                                        }
                                    />
                                </View>

                                <Text style={{ color: colors.white_1 }}>=</Text>
                                <Text style={{ color: colors.white_1 }}>
                                    {modifier > 0 ? `+${modifier}` : modifier}
                                </Text>
                            </View>
                        )
                    })}
                </View>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <TouchableOpacity
                        style={[
                            commonStyle.foreground,
                            {
                                height: 50,
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: colors.black_3,
                                borderWidth: 3,
                                borderColor: colors.red_1,
                                flexDirection: 'row',
                                width: '50%',
                            },
                        ]}
                        onPress={rollDices}
                    >
                        <Text style={[commonStyle.text, { marginRight: 15 }]}>
                            Rolar dados
                        </Text>
                        <Icon
                            size={30}
                            name="dice"
                            type="font-awesome-5"
                            color={colors.red_1}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const rollDices = () => {
        let dicesRolledSum = []
        let totalModifiers = 0
        for (let i = 1; i <= 6; i++) {
            const rolls = [
                rollDice('1d6'),
                rollDice('1d6'),
                rollDice('1d6'),
                rollDice('1d6'),
            ]

            rolls.sort(function (a, b) {
                return b - a
            })
            dicesRolledSum.push(rolls[0] + rolls[1] + rolls[2])
        }
        dicesRolledSum.forEach((val) => {
            totalModifiers += calcModifierByAttribute(val)
        })

        while (totalModifiers < 6) {
            dicesRolledSum.sort(function (a, b) {
                return b - a
            })
            dicesRolledSum.splice(5, 1)
            totalModifiers = 0

            const rolls = [
                rollDice('1d6'),
                rollDice('1d6'),
                rollDice('1d6'),
                rollDice('1d6'),
            ]

            rolls.sort(function (a, b) {
                return b - a
            })
            dicesRolledSum.push(rolls[0] + rolls[1] + rolls[2])

            dicesRolledSum.forEach((val) => {
                totalModifiers += calcModifierByAttribute(val)
            })
        }

        dicesRolledSum.sort(function (a, b) {
            return b - a
        })

        const newRollPoints = Object.assign({}, rollPoints)
        newRollPoints.attributes.map((att, idx) => {
            att.currentAttribute = dicesRolledSum[idx]
        })
        newRollPoints.hasRolled = true

        setRollPoints(newRollPoints)
    }

    const replateToSide = (side, actualIndex) => {
        const isLeft = side === 'left'
        let toIndex
        if (actualIndex === 0 && isLeft) {
            toIndex = 5
        } else if (actualIndex === 5 && !isLeft) {
            toIndex = 0
        } else {
            toIndex = isLeft ? actualIndex - 1 : actualIndex + 1
        }

        const newRollPoints = Object.assign({}, rollPoints)
        const aux = newRollPoints.attributes[actualIndex].currentAttribute
        newRollPoints.attributes[actualIndex].currentAttribute =
            newRollPoints.attributes[toIndex].currentAttribute
        newRollPoints.attributes[toIndex].currentAttribute = aux

        setRollPoints(newRollPoints)
    }

    const renderBuyPoints = () => {
        return (
            <View>
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        margin: 5,
                    }}
                >
                    <Text
                        style={{ color: colors.white_1, fontSize: 18 }}
                    >{`Pontos restantes: ${pointBuy.pointsLeft}`}</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {pointBuy.attributes.map((opt, idx) => {
                        const canGoDown = canChangeAttribute(opt, 'sell')
                        const canGoUp = canChangeAttribute(opt, 'buy')
                        const modifier = calcModifierByAttribute(
                            opt.currentAttribute
                        )

                        return (
                            <View
                                key={opt.label + 'pointBuy'}
                                style={[
                                    // commonStyle.showStuff,
                                    { alignItems: 'center', width: '15%' },
                                ]}
                            >
                                <Text style={[{ color: colors.white_1 }]}>
                                    {opt.label}
                                </Text>
                                {opt.icon}
                                <Text style={[{ color: colors.white_1 }]}>
                                    {opt.currentAttribute}
                                </Text>

                                <Icon
                                    size={30}
                                    name="caret-up"
                                    type="font-awesome"
                                    color={
                                        canGoUp ? colors.red_1 : colors.red_2
                                    }
                                    onPress={() =>
                                        canGoUp && buyPoint('buy', idx)
                                    }
                                />

                                <Text style={{ color: colors.white_1 }}>
                                    {opt.pointsBought}
                                </Text>

                                <Icon
                                    size={30}
                                    name="caret-down"
                                    type="font-awesome"
                                    color={
                                        canGoDown ? colors.red_1 : colors.red_2
                                    }
                                    onPress={() =>
                                        canGoDown && buyPoint('sell', idx)
                                    }
                                />

                                <Text style={{ color: colors.white_1 }}>=</Text>
                                <Text style={{ color: colors.white_1 }}>
                                    {modifier > 0 ? `+${modifier}` : modifier}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }

    const canChangeAttribute = (attribute, action) => {
        const isBuy = action === 'buy'

        if (
            (isBuy && attribute.currentAttribute + 1 > 18) ||
            (!isBuy && attribute.currentAttribute - 1 < 8)
        )
            return false

        let desiredAttributeQuantity = isBuy
            ? attribute.currentAttribute + 1
            : attribute.currentAttribute - 1
        const lastCost = calcCostByAttribute(attribute.currentAttribute)
        const cost = calcCostByAttribute(desiredAttributeQuantity)

        const costDifference = cost - lastCost
        return pointBuy.pointsLeft - costDifference >= 0
    }

    const buyPoint = (action, idx) => {
        const newPoints = Object.assign({}, pointBuy)
        const att = newPoints.attributes[idx]
        let desiredAttributeQuantity = att.currentAttribute
        const lastCost = calcCostByAttribute(att.currentAttribute)
        let cost

        if (action === 'buy') {
            att.pointsBought++
            desiredAttributeQuantity++
        } else {
            att.pointsBought--
            desiredAttributeQuantity--
        }

        att.currentAttribute = desiredAttributeQuantity
        cost = calcCostByAttribute(desiredAttributeQuantity)

        const costDifference = cost - lastCost

        newPoints.pointsLeft -= costDifference
        setPointBuy(newPoints)
    }

    const goToNextPage = () => {
        if (canProceed()) {
            const newCharacterCreation = Object.assign({}, characterCreation)

            const selectedType = attMapTypeState.find(
                (item) => item.selected
            ).key

            if (selectedType === 'comprar') {
                pointBuy.attributes.forEach((att) => {
                    newCharacterCreation.atributos[att.key] =
                        att.currentAttribute
                })
            } else if (selectedType === 'rolar') {
                rollPoints.attributes.forEach((att) => {
                    newCharacterCreation.atributos[att.key] =
                        att.currentAttribute
                })
            } else {
                fillPoints.attributes.forEach((att) => {
                    newCharacterCreation.atributos[att.key] =
                        att.currentAttribute
                })
            }

            dispatch({
                type: 'updateCharacterCreation',
                value: newCharacterCreation,
            })
            navigation.navigate('CreateCharacterProficiencies')
        }
    }

    const goToPreviousPage = () => {
        navigation.goBack()
    }

    const canProceed = () => {
        const isPointBuy = attMapTypeState.some(
            (item) => item.selected && item.key === 'comprar'
        )
        const hasNoPointsLeft = pointBuy.pointsLeft === 0

        const isRoll = attMapTypeState.some(
            (item) => item.selected && item.key === 'rolar'
        )
        const hasRolled = rollPoints.hasRolled

        const isFill = attMapTypeState.some(
            (item) => item.selected && item.key === 'preencher'
        )
        return (
            (isPointBuy && hasNoPointsLeft) || (isRoll && hasRolled) || isFill
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    height: '15%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingHorizontal: '8%',
                }}
            >
                <Text style={{ color: colors.white_1, fontSize: 20 }}>
                    Como deseja gerar seus atributos?
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: colors.black_2,
                    width: '100%',
                    height: '70%',
                }}
            >
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        width: '100%',
                        paddingTop: '5%',
                        paddingHorizontal: '5%',
                    }}
                >
                    {attMapTypeState.map((type, index) =>
                        type.selected
                            ? renderTypeSelected(type, index)
                            : renderType(type, index)
                    )}
                </ScrollView>
            </View>
            <View
                style={{
                    height: '15%',
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    onPress={goToPreviousPage}
                    style={[styles.button, styles.buttonSelected]}
                >
                    <Text style={styles.buttonText}>Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={goToNextPage}
                    style={[
                        styles.button,
                        canProceed() && styles.buttonSelected,
                    ]}
                >
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.black_1,
    },
    buttons: {
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    button: {
        width: '35%',
        height: '50%',
        ...commonStyle.foreground,
        backgroundColor: colors.black_3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.red_2,
        borderWidth: 3,
    },
    buttonSelected: {
        borderColor: colors.red_1,
        borderWidth: 3,
    },
    buttonText: {
        ...commonStyle.text,
    },
    itemTextColor: {
        color: 'white',
    },
})

export default CreateCharacterPoints
