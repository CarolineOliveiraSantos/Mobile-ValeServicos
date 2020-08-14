import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert} from 'react-native';
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';
import api from "../../../services/api";

const VerServicos = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const servico = route.params.servico;
    const prestadorCpf = route.params.prestador.cpf;
    const prestadorId = route.params.prestador.id;
    const [prestadores, setPrestadores] = useState([]);

    function handleNavigateToPrincipal() {
        navigation.navigate('Principal')
    }
    function handleNavigateToListaServicos() {
        navigation.navigate('ListaServicos')
    }
    function handleNavigateToAlterarServicos() {
        navigation.navigate('AlterarServicos')
    }

    useEffect(() => {
        api.get(`profile/${prestadorCpf}`, {
            headers: {
                Authorization: prestadorCpf,
            }
        }).then(response => {
            setPrestadores(response.data);
        })
    }, [prestadores]);

    const id = route.params.servico.id
  async function handleDeleteAccount() {
    try {
      await api.delete(`removeservico/${id}`,  {
        headers: {
            Authorization: prestadorId,
        }});
      setPrestadores(prestadores.filter((prestador) => prestador.id !== id));
      return handleNavigateToListaServicos()
    } catch (err) {
      alert("Erro ao excluir serviço, tente novamente.");
    }
  }

  const createAlert = () =>
    Alert.alert(
      "Excluir",
      "Tem certeza que deseja excluir esse serviço?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log(),
        },
        {
          text: "Excluir",
          onPress: () => {return handleDeleteAccount()},
        },
      ],
      { cancelable: false }
    );


    return (
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <View style={styles.container}>
                <Text style={[styles.header, { marginLeft: 20, marginStart: 20, marginTop: 10 }]} onPress={handleNavigateToListaServicos}>
                    <Text>
                        <Icon name="arrow-left" size={30} color="#0426B0" />
                    </Text>
                </Text>
                <Text style={styles.title}>Serviço</Text>
                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 7}]}>Imagem:</Text>
                <Text style={styles.dataValue}>Tem que por a imagem</Text>
                <Text style={styles.description}>Serviço:</Text>
                <Text style={styles.dataValue}>Limpeza em Geral</Text>
                <Text style={styles.description}>Descrição do Serviço:</Text>
                <Text style={styles.dataValue}>{servico.descricao}</Text>
                </View>

                <BaseButton style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleNavigateToAlterarServicos}>
                    Editar
                </Text>
                    <Text style={styles.buttonText} onPress={createAlert}>
                    Excluir
                </Text>
                </BaseButton>

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
        flex: 1,
        justifyContent: "space-between",
        marginStart: 10,
        marginEnd: 10,
        flexDirection: 'column',
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
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 10,
        color: 'black',
    },
    button: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: "space-between",
        fontSize: 15,
        marginBottom: 15,
        paddingEnd: 10,
        paddingStart: 10,
    },
    buttonText: {
        width: 150,
        backgroundColor: "#0426B0",
        color: '#FFF',
        fontSize: 16,
        borderRadius: 5,
        textAlign: 'center',
        paddingTop: 12
    }
})
export default VerServicos;

