import React from 'react';
import { View, StyleSheet, Text, Linking, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

const Detalhess = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const prestador = route.params.prestador;

    function handleNavigateToPrestadores() {
        navigation.goBack()
    }
    function handleNavigateToAvaliar() {
        navigation.navigate("Avaliar")
    }
    const message = `Olá ${prestador.nome}, estou interessado em seus serviços. Vim do Vale Serviços. Podemos conversar?`

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Vale Serviços - Contato`,
            recipients: [prestador.email],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+55${prestador.telefone}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.header, { marginLeft: 10, marginStart: 10, marginTop: 10 }]} onPress={handleNavigateToPrestadores}>
                <Text>
                    <Icon name="arrow-left" size={30} color="#0426B0" />
                </Text>
            </Text>

            <View>
                <Text style={[{ fontWeight: "bold", fontSize: 20, marginTop: 5, marginBottom: 5, textAlign: 'center' }]}>
                    Serviço de Limpeza
            </Text>
            </View>

            <View style={styles.icon, { marginBottom: 0 }}>
                <View style={styles.iconUser}>
                    <Text>
                        <FontAwesome name="user-circle-o" size={80} color="black" />
                    </Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Nome:</Text>
                <Text style={styles.dataValue}>{prestador.nome}</Text>
                <Text style={styles.description}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>{prestador.sobre}</Text>
                <Text style={[styles.description]}>Descrição do Serviço:</Text>
                <Text style={styles.dataValue}>{prestador.descricao}</Text>
                <Text style={styles.description}>Referência:</Text>
                <Text style={styles.dataValue}>{prestador.referencia}</Text>
                <Text style={styles.description}>Cidade:</Text>
                <Text style={styles.dataValue}>{prestador.city}/{prestador.uf}</Text>
            </View>

            <TouchableOpacity style={styles.buttonn}>
                <Text style={[styles.buttonText, { backgroundColor: '#191970' }]} onPress={handleNavigateToAvaliar}>
                    Avalie o serviço
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={sendMail}>
                    Email
                </Text>
                <Text style={styles.buttonText} onPress={sendWhatsapp}>
                    WhatsApp
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    descriptionContainer: {
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
    icon: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-between",
    },
    description: {
        paddingHorizontal: 15,
        fontSize: 16,
        flexDirection: 'row',
        color: 'black',
        fontWeight: 'bold',
    },
    dataValue: {
        flexDirection: 'row',
        fontSize: 16,
        marginBottom: 8,
        paddingHorizontal: 15,
        color: 'black',
    },
    iconUser: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonn: {
        marginTop: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 15,
    },
    button: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 15,
        marginBottom: 15,
        paddingEnd: 20,
        paddingStart: 20,
    },
    buttonText: {
        width: 150,
        height: 50,
        backgroundColor: "#0426B0",
        color: '#FFF',
        fontSize: 16,
        borderRadius: 5,
        textAlign: 'center',
        paddingTop: 12
    }
})
export default Detalhess;