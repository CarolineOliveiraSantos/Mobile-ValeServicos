import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert, AsyncStorage } from "react-native";
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../../services/api";

  const DadosPessoais = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const prestador = route.params;
  console.log(prestador)
  function handleNavigateToPrincipal() {
    navigation.goBack();
  }
  function handleNavigateToHome() {
    navigation.navigate("Home");
  }
  function handleNavigateToAlterarDados() {
    navigation.navigate("AlterarDados");
  }
  const [prestadores, setPrestadores] = useState([]);
  
  const prestadorCpf = AsyncStorage.getItem("cpf");
  
  // const prestadorCpf = prestador.cpf;
  useEffect(() => {
    api.get('profile', {
        headers: {
          Authorization: prestadorCpf,
        }
    }).then(response => {
        setPrestadores(response.data);
        
    })
}, [prestadorCpf]);



  // useEffect(() => {
  //     api.get('profile').then(response => {
  //         setPrestadores(response.data);
  //     })
  // }, [prestadorId]);

  async function handleDeleteAccount(id) {
    try {
      await api.delete(`prestadorApagar/${id}`);
      setPrestadores(prestadores.filter((prestador) => prestador.id !== id));
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente.");
    }
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
          onPress: () => console.log({ handleDeleteAccount }),
        },
      ],
      { cancelable: false }
    );

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <View style={styles.container}>
          <Text
            style={[
              styles.header,
              { marginLeft: 20, marginStart: 20, marginTop: 10 },
            ]}
            onPress={handleNavigateToPrincipal}
          >
            <Text>
              <Icon name="arrow-left" size={30} color="#0426B0" />
            </Text>
          </Text>

          <Text style={styles.title}>Dados Pessoais</Text>
          {/* <Text>{prestadores.map}</Text> */}

          {prestadores.map((prestador) => (
            <View keyExtractor={prestador => String(prestador.id) }>
              <Text style={[styles.data, { marginTop: 0 }]}>Nome:</Text>
              <Text style={styles.dataValue}>{prestador.nome}</Text>
              <Text style={styles.data}>E-mail:</Text>
              <Text style={styles.dataValue}>{prestador.email}</Text>

              <Text style={styles.data}>CPF:</Text>
              <Text style={styles.dataValue}>{prestador.cpf}</Text>

              <Text style={styles.data}>Telefone:</Text>
              <Text style={styles.dataValue}>{prestador.telefone}</Text>

              <Text style={styles.data}>Cidade:</Text>
              <Text style={styles.dataValue}>
                {prestador.city}/{prestador.uf}
              </Text>

              <Text style={styles.title}>Dados Gerais</Text>
              <Text style={styles.data}>Sobre você:</Text>
              <Text style={styles.dataValue}>{prestador.sobre}</Text>

              <Text style={styles.data}>Referência:</Text>
              <Text style={styles.dataValue}>{prestador.referencia}</Text>
            </View>
          ))}
          <BaseButton style={styles.button}>
            <Text style={styles.buttonText} onPress={createAlert}>
              Excluir conta
            </Text>
            <Text
              style={styles.buttonText}
              onPress={handleNavigateToAlterarDados}
            >
              Editar
            </Text>
          </BaseButton>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    color: "#13131a",
    fontWeight: "bold",
    textAlign: "center",
  },
  data: {
    paddingHorizontal: 24,
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  dataValue: {
    paddingHorizontal: 24,
    fontSize: 16,
    marginBottom: 15,
    color: "black",
  },
  button: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 15,
    marginBottom: 15,
    paddingEnd: 20,
    paddingStart: 20,
  },
  buttonText: {
    width: 130,
    backgroundColor: "#0426B0",
    color: "#FFF",
    fontSize: 16,
    borderRadius: 5,
    textAlign: "center",
    paddingTop: 12,
  },
});
export default DadosPessoais;
