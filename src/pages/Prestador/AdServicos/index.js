import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../../services/api";
import SvgUri from "expo-svg-uri";
const AdServicos = () => {
  
  const navigation = useNavigation();
  const route = useRoute();
  const prestadorIdd = route.params.prestador.id;
  const prestador = route.params.prestador;


  function handleNavigateToListaServicos(prestador) {
    navigation.navigate("ListaServicos", { prestador });
  }
  function handleNavigateToPrincipal() {
    navigation.navigate("Principal");
  }

  const [descricao, setDescricao] = useState("");
  const [img_url, setImg_url] = useState("");
  const [prestador_id, setPrestadorId] = useState("");

  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    api.get("servicoslist").then((res) => {
      setServicos(res.data);
      // console.log(res.data);
    });
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const [serv, setServicoId] = useState("");

  function handleSelectedItem(id) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const filterredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filterredItems);
    } else {
      setSelectedItems([id]);
      setServicoId(id);
      // console.log(serv);
      console.log("teste", serv);
    }
    // setServicoId(id);
    // console.log(serv);
  }

  async function handleAddServico() {
    const data = {
      img_url,
      servico_id: serv,
      descricao,
      prestador_id: prestadorIdd,
    };
    try {
      const response = await api.post(`addservico/${prestadorIdd}`, data);
      return handleNavigateToListaServicos(prestador);
    } catch (err) {
      alert("Erro ao adicionar serviço, tente novamente.");
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <Text
          style={[styles.header, { marginLeft: 20, marginStart: 10 }]}
          onPress={handleNavigateToPrincipal}
        >
          <Text>
            <Icon name="arrow-left" size={30} color="#0426B0" />
          </Text>
        </Text>
        <Text style={styles.text}>Novo Serviço</Text>

        {/* <TextInput
          style={styles.input}
          value={img_url}
          onChangeText={setImg_url}
          placeholder="Imagem"
        /> */}
        {/* <TextInput
          style={styles.input}
          value={servicos}
          onChangeText={setServicos}
          placeholder="Tipo de serviço"
        /> */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {servicos.map((item) => (
            <TouchableOpacity
              keyExtractor={(item) => String(item.id)}
              style={[
                styles.item,
                selectedItems.includes(item.id) ? styles.selectedItem : {},
              ]}
              className={selectedItems.includes(item.id) ? "selected" : ""}
              onPress={() => handleSelectedItem(item.id)}
              activeOpacity={0.5}
            >
              <SvgUri
                width={42}
                height={42}
                source={{
                  // uri: `http://192.168.42.110:3333/uploadsServs/${servico.img}`,
                  uri: item.image_url,
                }}    />
              <Text style={styles.itemTitle}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TextInput
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descreva seu serviços"
        />
        <BaseButton style={styles.button} onPress={handleAddServico}>
          <Text style={styles.buttonText}>Salvar</Text>
        </BaseButton>
        <BaseButton style={styles.button} onPress={handleNavigateToPrincipal}>
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
  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginBottom: 10,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",

    textAlign: "center",
  },

  selectedItem: {
    borderColor: "#0426B0",
    borderWidth: 2,
  },

  itemTitle: {
    // fontFamily: "Roboto_400Regular",
    textAlign: "center",
    fontSize: 13,
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