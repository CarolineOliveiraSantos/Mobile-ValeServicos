import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather as Icon } from '@expo/vector-icons';


const AlterarDados = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [prestadores, setPrestadores] = useState([route.params.prestador]);
    console.log(route.params.prestador)

    function handleNavigateToPrincipal() {
        navigation.navigate("Principal");
    }
    function handleNavigateToDadosPessoais() {
        navigation.navigate("DadosPessoais");
    }

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cidade, setCidade] = useState("");
    const [tipodetrabalho, setTipodetrabalho] = useState("");
    const [referencia, setReferencia] = useState("");
    const [sobre, setSobre] = useState("");

    const prestadorCpf = prestadores.cpf;

    async function handleAlterar() {
          const data = { 
              nome,
              email,
              telefone,
              city,
              tipodetrabalho,
              referencia,
              sobre
         };
          try {
            const response = await api.put(`editarprestador/${prestadorCpf}`, data);
            navigation.navigate("DadosPessoais");
          } catch (err) {
            alert("Erro ao alterar dados, tente novamente.");
          }
      }
      const erroRecuperar = () =>
        Alert.alert("Erro ao Alterar Dados", "Tente novamente!", [
          {
            text: "Ok",
            onPress: () => console.log(),
          },
        ]);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
                <Text style={[styles.header, { marginLeft: 10, marginStart: 10}]} onPress={handleNavigateToPrincipal}>
                    <Text>
                        <Icon name="arrow-left" size={30} color="#0426B0" />
                    </Text>
                </Text>
                <View style={styles.buttonIcon}>
                    <Text>
                        <FontAwesome5 name="user-circle" size={70} color="#0426B0" />
                    </Text>
                </View>
                <Text style={styles.text}>
                    Editar Dados
        </Text>
                <TextInput style={styles.input} value={nome} onChangeText={setNome} autoCorrect={false} placeholder="Digite seu nome" />
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Digite sua e-mail" />
                <TextInput style={styles.input} value={cpf} keyboardType="number-pad" onChangeText={setCpf} placeholder="Digite seu CPF" />
                <TextInput style={styles.input} value={telefone} keyboardType="number-pad" onChangeText={setTelefone} placeholder="Digite seu telefone" />
                <TextInput style={styles.input} value={cidade} onChangeText={setCidade} autoCorrect={false} placeholder="Digite sua cidade" />
                <TextInput style={styles.input} value={tipodetrabalho} onChangeText={setTipodetrabalho} placeholder="Tipo de trabalho" />
                <TextInput style={styles.input} value={referencia} onChangeText={setReferencia} autoCorrect={false} placeholder="Referência" />
                <TextInput style={styles.input} value={sobre} onChangeText={setSobre} placeholder="Fale sobre você" />
                <BaseButton style={styles.button} onPress={handleAlterar}>
                    <Text style={styles.buttonText}>
                        Alterar
        </Text>
                </BaseButton>
                <BaseButton style={styles.button} onPress={handleNavigateToPrincipal}>
                    <Text style={styles.buttonText}>
                        Cancelar
        </Text>
                </BaseButton>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        // marginTop: 30,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    text: {
        textAlign: "center",
        marginBottom: 15,
        fontSize: 20,
    },
    buttonIcon: {
        alignItems: "center",
        marginBottom: 7,
    },
    input: {
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#0426B0",
        height: 60,
        flexDirection: "row",
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        marginTop: 8,
    },
    link: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        fontSize: 16,
        marginTop: 10,
    },
    buttonText: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
    },
});
export default AlterarDados;