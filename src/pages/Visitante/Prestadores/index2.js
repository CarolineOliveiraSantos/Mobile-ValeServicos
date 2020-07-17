import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';

const Prestadores2 = () => {
    const navigation = useNavigation();

    function handleNavigateToPrincipall() {
        navigation.navigate('Principall')
    }
    function handleNavigateToDetalhes2() {
        navigation.navigate('Detalhes2')
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <View style={styles.container}>
                <Text style={[styles.header, { marginLeft: 10, marginStart: 10, marginTop: 10 }]} onPress={handleNavigateToPrincipall}>
                    <Text>
                        <Icon name="arrow-left" size={30} color="#0426B0" />
                    </Text>
                </Text>
                <Text style={styles.title}>Prestadores 2</Text>
                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 10}]}>Nome:</Text>
                <Text style={[styles.dataValue]}>Angélica da Silva Martins</Text>
                <Text style={[styles.description]}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>Faço bolos</Text>
                <Text style={[styles.description]}>Telefone:</Text>
                <Text style={styles.dataValue}>99999-8888</Text>
                </View>

                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 10}]}>Nome:</Text>
                <Text style={[styles.dataValue]}>Angélica da Silva Martins</Text>
                <Text style={[styles.description]}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>Faço bolos</Text>
                <Text style={[styles.description]}>Telefone:</Text>
                <Text style={styles.dataValue}>99999-8888</Text>
                </View>

                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 10}]}>Nome:</Text>
                <Text style={[styles.dataValue]}>Angélica da Silva Martins</Text>
                <Text style={[styles.description]}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>Faço bolos</Text>
                <Text style={[styles.description]}>Telefone:</Text>
                <Text style={styles.dataValue}>99999-8888</Text>
                </View>

                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 10}]}>Nome:</Text>
                <Text style={[styles.dataValue]}>Angélica da Silva Martins</Text>
                <Text style={[styles.description]}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>Faço bolos</Text>
                <Text style={[styles.description]}>Telefone:</Text>
                <Text style={styles.dataValue}>99999-8888</Text>
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        color: '#13131a',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    descriptionContainer: {
        height: 200,
        justifyContent: "space-between",
        marginStart: 10,
        marginEnd: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginBottom: 15,
        paddingHorizontal: 5,
        color: '#41414d',
        borderRadius: 5
    },
    description: {
        paddingHorizontal: 10,
        fontSize: 16,
        flexDirection: 'row',
        color: 'black',
        fontWeight: 'bold',
    },
    dataValue: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 15,
        color: 'black',
    }
})
export default Prestadores2;

