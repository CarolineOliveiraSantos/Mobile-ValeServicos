import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../../services/api";

const AlterarServicos = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const servico = route.params.servico;
  const prestadorId = route.params.prestador;
  const [servicos] = useState([route.params.servico]);
  const [prestador, setPrestador] = useState([]);
  const servicoId = route.params.servico.id;
  // console.log(servico)

  function handleNavigateToBack() {
    navigation.goBack();
  }
  function handleNavigateToListaServicos() {
    navigation.navigate("ListaServicos");
  }

  const [tipodeservico, setTipodeservico] = useState("");
  const [descricao, setDescricao] = useState(servico.descricao);
  const [img_url, setImg_url] = useState(servico.img_url);

  useEffect(() => {
    api
      .get(`profile`, {
        headers: {
          Authorization: prestadorId,
        },
      })
      .then((response) => {
        setPrestador(response.data);
      });
  }, [prestador]);

  async function handleAlterar() {
    try {
      const data = {
        img_url,
        descricao,
      };
      const response = await api.put(`alterarservico/${servicoId}`, data);
      return handleNavigateToListaServicos();
    } catch (err) {
      Alert(erroAlterar());
    }
  }
  const erroAlterar = () =>
    Alert.alert("Erro ao Alterar Dados", "Tente novamente!", [
      {
        text: "Ok",
        onPress: () => console.log(),
      },
    ]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <Text
          style={[styles.header, { marginLeft: 10, marginStart: 10 }]}
          onPress={handleNavigateToBack}
        >
          <Text>
            <Icon name="arrow-left" size={30} color="#0426B0" />
          </Text>
        </Text>
        <Text style={styles.text}>Editar Serviço</Text>
        {servicos.map((servico) => (
          <View keyExtractor={(servico) => String(servico.id)}>
            <Text style={styles.textText}>Imagem</Text>
            {/* <TextInput
              style={styles.input}
              onChangeText={setImg_url}
              placeholder={servico.img_url}
              placeholderTextColor="#000"
            /> */}
            <Text style={styles.textText}>Tipo de Serviço:</Text>
            <TextInput
              style={styles.input}
              editable={false}
              placeholder={servico.name}
              placeholderTextColor="#000"
            />
            <Text style={styles.textText}>Descrição do Serviço:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setDescricao}
              placeholder={servico.descricao}
              placeholderTextColor="#000"
            />
          </View>
        ))}
        <BaseButton style={styles.button} onPress={handleAlterar}>
          <Text style={styles.buttonText}>Alterar</Text>
        </BaseButton>
        <BaseButton style={styles.button} onPress={handleNavigateToBack}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </BaseButton>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textText: {
    marginStart: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonIcon: {
    alignItems: "center",
    marginBottom: 7,
  },
  input: {
    marginStart: 10,
    marginEnd: 10,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },
  button: {
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: "#0426B0",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  },
});
export default AlterarServicos;