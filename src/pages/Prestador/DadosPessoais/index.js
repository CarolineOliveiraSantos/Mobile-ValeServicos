import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';
import api from '../../../services/api';


const DadosPessoais = () => {
    const navigation = useNavigation();

    function handleNavigateToPrincipal() {
        navigation.goBack('Principal')
    }
    function handleNavigateToHome() {
        navigation.navigate('Home')
    }
    function handleNavigateToAlterarDados() {
        navigation.navigate('AlterarDados')
    }

    const createAlert = () =>
    Alert.alert(
      "Excluir",
      "Tem certeza que deseja excluir sua conta?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log(),
        },
        {
            text: "Excluir",
          onPress: () => console.log({handleNavigateToHome}),
        }
      ],
      { cancelable: false }
    );
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <View style={styles.container}>
                <Text style={[styles.header, { marginLeft: 20, marginStart: 20, marginTop: 10 }]} onPress={handleNavigateToPrincipal}>
                    <Text>
                        <Icon name="arrow-left" size={30} color="#0426B0" />
                    </Text>
                </Text>

                <Text style={styles.title}>Dados Pessoais</Text>
                <Text style={[styles.data, { marginTop: 0 }]}>Nome:</Text>
                <Text style={styles.dataValue}>Caroline</Text>

                <Text style={styles.data}>E-mail:</Text>
                <Text style={styles.dataValue}>caroline@email.com</Text>

                <Text style={styles.data}>CPF:</Text>
                <Text style={styles.dataValue}>123456789</Text>

                <Text style={styles.data}>Telefone:</Text>
                <Text style={styles.dataValue}>67999999999</Text>

                <Text style={styles.data}>Cidade:</Text>
                <Text style={styles.dataValue}>Nova Andradina</Text>

                <Text style={styles.title}>Dados Gerais</Text>
                <Text style={styles.data}>Sobre você:</Text>
                <Text style={styles.dataValue}>Uma aluna desesperada para terminar o TCC</Text>

                <Text style={styles.data}>Referência:</Text>
                <Text style={styles.dataValue}>Trabalhou na casa de cecilia</Text>

                <BaseButton style={styles.button}>
                    <Text style={styles.buttonText} onPress={createAlert}>
                        Excluir conta
                </Text>
                    <Text style={styles.buttonText} onPress={handleNavigateToAlterarDados}>
                        Editar
                </Text>
                </BaseButton>

            </View>
        </ScrollView>
        </>
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
    data: {
        paddingHorizontal: 24,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    dataValue: {
        paddingHorizontal: 24,
        fontSize: 16,
        marginBottom: 15,
        color: 'black'
    },
    button: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: "space-between",
        fontSize: 15,
        marginBottom: 15,
        paddingEnd: 20,
        paddingStart: 20,
    },
    buttonText: {
        width: 130,
        backgroundColor: "#0426B0",
        color: '#FFF',
        fontSize: 16,
        borderRadius: 5,
        textAlign: 'center',
        paddingTop: 12
    }
})
export default DadosPessoais;
