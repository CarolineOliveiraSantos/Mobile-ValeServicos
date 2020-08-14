import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, FlatList, Picker } from 'react-native';
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';
import api from "../../../services/api";


const AdServicos = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const prestadorIdd = route.params.prestador.id;
  const prestador = route.params.prestador;
  console.log(prestadorIdd)

  function handleNavigateToListaServicos(prestador) {
    navigation.navigate("ListaServicos", {prestador});
  }
  function handleNavigateToPrincipal() {
    navigation.navigate("Principal");
  }

  const [descricao, setDescricao] = useState("");
  const [img_url, setImg_url] = useState("");
  const [servico_id, setServicoId] = useState("");
  const [prestador_id, setPrestadorId] = useState("");

  async function handleAddServico() {
    const data = {
      img_url,
      servico_id : 1,
      descricao,
      prestador_id : prestadorIdd
    };
    try {
      const response = await api.post(`addservico/${prestadorIdd}`, data)
      return handleNavigateToListaServicos(prestador);
    } catch (err) {
      alert("Erro ao adicionar serviço, tente novamente.");
    }
  }

  useEffect(() => {
    api.get("servicoslist").then((res) => {
      setServicoId(res.data);
    });
  });

  // const allServicos = await api.get(`/servicoslist`);
  //     setServicoId(allServicos.data);
  //     console.log(allServicos)

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <Text style={[styles.header, { marginLeft: 20, marginStart: 10 }]} onPress={handleNavigateToPrincipal}>
          <Text>
            <Icon name="arrow-left" size={30} color="#0426B0" />
          </Text>
        </Text>
        <Text style={styles.text}>Novo Serviço</Text>
        <TextInput style={styles.input} value={prestador_id} editable={false} onChangeText={setPrestadorId} placeholder="ID" />
        <TextInput style={styles.input} value={img_url} onChangeText={setImg_url} placeholder="Imagem" />
        <TextInput style={styles.input} value={servico_id} onChangeText={setServicoId} placeholder="Tipo de serviço"/>
        <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} placeholder="Descreva seu serviços" />
        <BaseButton style={styles.button} onPress={handleAddServico}>
          <Text style={styles.buttonText}>
            Salvar
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
    padding: 10,
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
    fontWeight: 'bold',
  },
  buttonIcon: {
    alignItems: "center",
    marginBottom: 7,
  },
  input: {
    marginStart: 20,
    marginEnd: 20,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },
  button: {
    marginStart: 20,
    marginEnd: 20,
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
export default AdServicos;