import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert, AsyncStorage } from "react-native";
import { BaseButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../../services/api";

const loginContratante = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  function handleNavigateToHomeContratante() {
    navigation.navigate("homeContratante" );
  }
  function handleNavigateToHome() {
    navigation.goBack("Home");
  }
  function handleNavigateToCadastroContratante() {
    navigation.navigate("cadastroContratante");
  }
  function handleNavigateToRecuperarAcesso() {
    navigation.navigate("RecuperarAcessoo");
  }

  async function handleLogin() {
    try {
      const response = await api.post("sessioncontratante", {cpf, senha});
      if (!response.data.cpf) {
        return erroLogin();
      } else {
        AsyncStorage.setItem("cpf", cpf);
        AsyncStorage.setItem("senha", senha);
        AsyncStorage.setItem("nome", response.data.nome);
        AsyncStorage.setItem("contratante", response.data)
        console.log(cpf, response.data);
        return handleNavigateToHomeContratante();
      }
    } catch (err) {
      return(erroLogin());
    }  
  }
 
  const erroLogin = () =>
    Alert.alert("Erro na Autenticação", "Dados incorretos, tente novamente!", [
      {
        text: "Ok",
        onPress: () => console.log(),
      },
    ]);

  return (
    <View style={[styles.container]}>
      <Text
        style={[{ marginLeft: 10, marginStart: 10 }]}
        onPress={handleNavigateToHome}
      >
        <Text>
          <Icon name="arrow-left" size={30} color="#0426B0" />
        </Text>
      </Text>
      <View style={styles.buttonIcon}>
        <Text>
          <FontAwesome5 name="user-circle" size={70} color="#0426B0" />
        </Text>
      </View>
      <Text style={styles.text}>Login do Contratante</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        keyboardType="number-pad"
        onChangeText={setCpf}
        maxLength={11}
        autoCorrect={false}
        placeholder="Digite seu CPF"
      />
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        autoCorrect={false}
        placeholder="Digite sua senha"
      />
      <BaseButton style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </BaseButton>
      <View style={[styles.link]}>
        <Text style={{ fontSize: 16 }} onPress={handleNavigateToCadastroContratante}>
          Cadastre-se
        </Text>
        <Text style={{ fontSize: 16 }} onPress={handleNavigateToRecuperarAcesso}>
          Esqueceu a senha?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 15,
    marginTop: 7,
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  },
});
export default loginContratante;
