import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { BaseButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather as Icon } from '@expo/vector-icons';
import api from '../../../services/api';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.goBack("Home");
  }
  function handleNavigateToCadastro() {
    navigation.navigate("Cadastro");
  }
  function handleNavigateToPrincipal() {
    navigation.navigate("Principal");
  }

  const erroLogin = () =>
    Alert.alert(
      "Erro na Autenticação",
      "Dados incorretos, tente novamente!",
      [
        {
          text: "Ok",
          onPress: () => console.log(),
        },
      ],
    );

  return (
    <View style={[styles.container]}>
      <Text style={[{ marginLeft: 10, marginStart: 10 }]} onPress={handleNavigateToHome}>
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
        Login do Prestador
        </Text>
      <TextInput style={styles.input} value={cpf} keyboardType='number-pad' onChangeText={setCpf} autoCorrect={false} placeholder="Digite seu CPF" />
      <BaseButton style={styles.button} onPress={handleNavigateToPrincipal}>
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </BaseButton>
      <View  style={[styles.link]}>
        <Text style={{ fontSize: 16 }} onPress={handleNavigateToCadastro} >
          Cadastre-se
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
    flexDirection: 'row',
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
export default Login;