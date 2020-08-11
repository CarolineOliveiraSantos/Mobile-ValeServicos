import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../../services/api";

const Prestadoress = () => {
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate("homeContratante");
  }
  function handleNavigateToDetalhes(prestador) {
    navigation.navigate("Detalhess", { prestador });
  }

  const [prestadores, setPrestadores] = useState([]);

  const route = useRoute();

  const serv = route.params.servico;
  console.log(route.params.servico);

  api.get(`servicosPrestadores/${serv.id}`).then((response) => {
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
          onPress={handleNavigateToHome}
        >
          <Text>
            <Icon name="arrow-left" size={30} color="#0426B0" />
          </Text>
        </Text>
        <Text style={[styles.title, { marginStart: 25, marginEnd: 25 }]}>
          Prestadores de Serviço
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
              <View style={styles.linklink}>
                <View style={styles.linkSection}>
                  <Text
                    style={[
                      {
                        fontWeight: "bold",
                        fontSize: 18,
                        paddingHorizontal: 10,
                        color: "#0426B0",
                      },
                    ]}
                    onPress={() => handleNavigateToDetalhes(prestador)}
                  >
                    Ver Mais
                  </Text>
                </View>
                <Text>
                  <Text onPress={() => handleNavigateToDetalhes(prestador)}>
                    <Icon name="arrow-right" size={30} color="#0426B0" />
                  </Text>
                </Text>
              </View>
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
    // height: 225,
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
    flex: 1,
    flexDirection: "row",
  },
});
export default Prestadoress;
