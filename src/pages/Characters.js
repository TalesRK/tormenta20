import React from 'react';
import {Button, View, Text, StyleSheet, FlatList, RowItem} from 'react-native';

import common from '../styles/common.style';

const characterSheets = [
    {title: 'Combate'},
    {title: 'Proficiência'},
    {title: 'Magias'},
    {title: 'Itens'},
    {title: 'Notas'},
];

function Characters({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.mainCharacterInfo}>
                <View style={styles.attributeColumn}>
                    <View style={styles.attributeBox}>
                        <Text style={styles.textColor}>Atributo 1</Text>
                    </View>
                    <View style={styles.attributeBox}>
                        <Text style={styles.textColor}>Atributo 2</Text>
                    </View>
                </View>
                <View style={styles.characterImageColumn}>
                    <View style={styles.characterImage}>
                        <Text style={styles.textColor}>Foto personagem</Text>
                    </View>
                </View>
                <View style={styles.attributeColumn}>
                    <View style={styles.attributeBox}>
                        <Text style={styles.textColor}>Atributo 3</Text>
                    </View>
                    <View style={styles.attributeBox}>
                        <Text style={styles.textColor}>Atributo 4</Text>
                    </View>
                </View>
            </View>
            <View style={styles.characterTextData}>
                <View>
                    <Text style={styles.textColor}>
                        Nome: Nome Completo do Personagem
                    </Text>
                </View>
                <View style={styles.characterRaceAndClass}>
                    <Text style={styles.textColor}>Raça: Raça do PJ</Text>
                    <Text style={styles.textColor}>
                        Classe: Classe do PJ nível 3
                    </Text>
                </View>
            </View>
            <View style={styles.characterPages}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={characterSheets}
                    renderItem={({item}) => (
                        <View style={styles.sheetBox}>
                            <Text style={styles.textColor}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to volta"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#36393f',
        flex: 1,
    },
    mainCharacterInfo: {
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    attributeColumn: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    attributeBox: {
        width: 85,
        height: 85,
        ...common.foreground,
    },
    characterImage: {
        height: '80%',
        alignItems: 'center',
        ...common.foreground,
    },
    characterImageColumn: {
        justifyContent: 'center',
    },
    characterTextData: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    characterRaceAndClass: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    textColor: {
        ...common.text,
    },
    characterPages: {
        marginTop: 10,
        flexDirection: 'row',
    },
    sheetBox: {
        width: 90,
        height: 55,
        ...common.foreground,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Characters;

/*

                    ItemSeparatorComponent={
                        undefined
                        //     () => {
                        //     return (
                        //         <View
                        //             style={{
                        //                 height: '100%',
                        //                 width: 20,
                        //                 backgroundColor: '#CED0CE',
                        //             }}
                        //         />
                        //     );
                        // }
                    }
*/
