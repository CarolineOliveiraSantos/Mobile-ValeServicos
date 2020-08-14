import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import api from "../../../services/api";

const ListaServicos = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const prestadorId = route.params.prestador.id;
    const prestador = route.params.prestador;

    const [servicos, setServicos] = useState([]);
    // console.log(servicos)

    function handleNavigateToPrincipal() {
        navigation.navigate('Principal')
    }
    function handleNavigateToVerServicos(servico, prestador) {
        navigation.navigate('VerServicos', {servico, prestador})
    }

    useEffect(() => {
        api.get(`profile`, {
            headers: {
                Authorization: prestadorId,
            }
        }).then(response => {
            setServicos(response.data);
        })
    }, [servicos]);

    return (
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <View style={styles.container}>
                <Text style={[styles.header, { marginLeft: 20, marginStart: 20, marginTop: 10 }]} onPress={handleNavigateToPrincipal}>
                    <Text>
                        <Icon name="arrow-left" size={30} color="#0426B0" />
                    </Text>
                </Text>
                <Text style={styles.title}>Meus Serviços</Text>
                    {servicos.map((servico) => (
                        <View style={styles.dataContainer} keyExtractor={servico => String(servico.id)}>
                            {/* <Text style={styles.dataValue}>{servico.imagem}</Text> */}
                            <Text style={styles.dataValue}>Imagem</Text>
                            <Text style={styles.dataValue}>{servico.descricao}</Text>
                            <Text style={styles.dataValue} onPress={() => handleNavigateToVerServicos(servico, prestador)}>
                                <AntDesign name="arrowright" size={26} color="black" />
                            </Text>
                        </View>
                    ))}
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
        flexDirection: "row",
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

