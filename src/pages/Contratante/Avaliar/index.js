import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

const Avaliar = () => {
    const [valor, setValor] = useState('');
    const [comentario, setComentario] = useState('');

    const navigation = useNavigation();

    function handleNavigateToBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={[{ marginLeft: 20, marginStart: 20, marginTop: 10 }]} onPress={handleNavigateToBack}>
                <Text>
                    <Icon name="arrow-left" size={30} color="#0426B0" />
                </Text>
                </Text>
                <Text style={[styles.title]}>Avaliação</Text>
                <View>
                    <Text style={styles.description}>Avalie o serviço de 0 a 5</Text>
                </View>
                <View style={styles.emoji}>
                    <Entypo name="emoji-sad" size={30} color="#0426B0" />
                    <Entypo name="emoji-neutral" size={30} color="#0426B0" />
                    <Entypo name="emoji-happy" size={30} color="#0426B0" />
                </View>
                <TextInput style={styles.input} value={valor} maxLength={1} keyboardType = "number-pad" onChangeText={setValor} placeholder="Faça a sua avaliação" />
                <TextInput style={[styles.input, {height: 80}]} value={comentario}  onChangeText={setComentario} placeholder="Comentário" />
                <View style={{ paddingStart: 20, paddingEnd: 20 }}>
                <RectButton style={styles.button}>
              <View style={styles.buttonIcon}>
                  <Text>
                  <AntDesign name="check" size={30} color="white" />
                  </Text>
              </View>
              <Text style={styles.buttonText}>
                Finalizar Avaliação
              </Text>
          </RectButton>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 10,
    },
    emoji: {
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        fontSize: 15,
        paddingEnd: 70,
        paddingStart: 70,
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
        color: '#13131a',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        marginBottom: 10,
        color: '#13131a',
        textAlign: 'center'
    }, 
    input: {
        marginLeft: 20,
        marginRight: 20,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
      },
    button: {
        backgroundColor: '#0426B0',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 8,
      },
      buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
      }
    
})
export default Avaliar;