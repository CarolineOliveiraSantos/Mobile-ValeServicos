import React, { useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {BaseButton, ScrollView} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';


const AdServicos = () => {
  const navigation = useNavigation();

  function handleNavigateToListaServicos() {
    navigation.navigate("ListaServicos");
  }
  function handleNavigateToPrincipal() {
    navigation.navigate("Principal");
  }

  const [tipodeservico, setTipodeservico] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem ] = useState("");

  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <Text style={[styles.header, { marginLeft: 20, marginStart: 10}]} onPress={handleNavigateToListaServicos}>
            <Text>
            <Icon name="arrow-left" size={30} color="#0426B0" />
            </Text>
            </Text>
      <Text  style={styles.text}>Novo Serviço</Text>
      <TextInput style={styles.input} value={imagem} onChangeText={setImagem} placeholder="Imagem"/>
      <TextInput style={styles.input} value={tipodeservico} onChangeText={setDescricao} placeholder="Tipo de serviço"/>
      <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} placeholder="Descreva seu serviços" />
      <BaseButton style={styles.button} onPress={handleNavigateToListaServicos}>
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
  buttonIcon:{
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