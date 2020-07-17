import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const ListaServicos = () => {
    const navigation = useNavigation();

    function handleNavigateToPrincipal() {
        navigation.navigate('Principal')
    }
    function handleNavigateToVerServicos() {
        navigation.navigate('VerServicos')
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <View style={styles.container}>
                <Text style={[styles.header, { marginLeft: 20, marginStart: 20, marginTop: 10 }]} onPress={handleNavigateToPrincipal}>
                    <Text>
                        <Icon name="arrow-left" size={30} color="#0426B0" />
                    </Text>
                </Text>
                <Text style={styles.title}>Meus Serviços</Text>
                <View style={styles.dataContainer}>
                <Text style={styles.dataValue}>Imagem</Text>
                <Text style={styles.dataValue}>Limpeza em Geral</Text>
                <Text style={styles.dataValue} onPress={handleNavigateToVerServicos}>
                <AntDesign name="arrowright" size={26} color="black" />
                </Text>
                </View>

                <View style={styles.dataContainer}>
                <Text style={styles.dataValue}>Imagem</Text>
                <Text style={styles.dataValue}>Cuidador</Text>
                <Text style={styles.dataValue} onPress={handleNavigateToVerServicos}>
                <AntDesign name="arrowright" size={26} color="black" />
                </Text>
                </View>

                <View style={styles.dataContainer}>
                <Text style={styles.dataValue}>Imagem</Text>
                <Text style={styles.dataValue}>Jardinagem</Text>
                <Text style={styles.dataValue} onPress={handleNavigateToVerServicos}>
                <AntDesign name="arrowright" size={26} color="black" />
                </Text>
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
    dataContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 15
    },
    dataValue: {
        paddingHorizontal: 20,
        marginTop: 7,
        fontSize: 16,
        marginBottom: 18,
        color: 'black',
        paddingTop: 13
    }
})
export default ListaServicos;

