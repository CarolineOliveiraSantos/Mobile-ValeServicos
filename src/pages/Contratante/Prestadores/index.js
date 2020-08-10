import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import api from "../../../services/api";

const Prestadoress1 = () => {
  const navigation = useNavigation();
  const [prestadores, setPrestadores] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadPrestadores() {
    if (loading) {
      return;
    }
    if (total > 0 && prestadores.length == total) {
      return;
    }
    setLoading(true);

    const response = await api.get(`servicosPrestadores/${serv}`);

    setLoading(false);
    setPrestadores([...prestadores, ...response.data]);
    setTotal(response.headers["x-total-count"]);
  }
  useEffect(() => {
    loadPrestadores();
  }, []);

  function handleNavigateToPrincipall() {
    navigation.navigate("Principall");
  }
  function handleNavigateToDetalhes1(prestador) {
    navigation.navigate("Detalhe1", {prestador});
  }

  const serv = 1;
  api.get(`servicosPrestadores/${serv}`).then((response) => {
    setPrestadores(response.data);
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
      <View style={styles.container}>
        <Text
          style={[
            styles.header,
            { marginLeft: 10, marginStart: 10, marginTop: 10 },
          ]}
          onPress={handleNavigateToPrincipall}
        >
          <Text>
            <Icon name="arrow-left" size={30} color="#0426B0" />
          </Text>
        </Text>
        <Text style={[styles.title, { marginStart: 25, marginEnd: 25 }]}>
          Prestadores de Serviços de Limpeza e em Geral
        </Text>
        <Text style={styles.headerText}>
        Total de <Text style={styles.headerTextText}>{total} prestadores</Text>
        </Text>

        {prestadores.map((prestador) => (
          <View keyExtractor={(prestador) => String(prestador.id)}>
            <View style={styles.descriptionContainer}>
              <Text style={[styles.description, { marginTop: 10 }]}>Nome:</Text>
              <Text style={[styles.dataValue]}>{prestador.nome}</Text>
              <Text style={[styles.description]}>Tipo de Trabalho:</Text>
              <Text style={styles.dataValue}>{prestador.sobre}</Text>
              <Text style={[styles.description]}>Telefone:</Text>
              <Text style={styles.dataValue}>{prestador.telefone}</Text>

              <TouchableOpacity style={styles.linkSection} onPress={() => handleNavigateToDetalhes1(prestador)}>
                <Text style={styles.linkText}>Ver mais</Text>
                <Feather name="arrow-right" size={30} color="#0426B0" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    color: '#737380',
    textAlign: 'right',
    marginEnd: 15
  },
  headerTextText: {
    fontWeight: "bold",
  },
  linklink: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    color: "#13131a",
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionContainer: {
    justifyContent: "space-between",
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: "rgba(4, 38, 176, 0.3)",
    marginBottom: 15,
    paddingHorizontal: 5,
    color: "#41414d",
    borderRadius: 5,
  },
  description: {
    paddingHorizontal: 10,
    fontSize: 16,
    flexDirection: "row",
    color: "black",
    fontWeight: "bold",
  },
  dataValue: {
    flexDirection: "row",
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
    color: "black",
  },
  linkSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  linkText: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#0426B0",
  },
});
export default Prestadoress1;
