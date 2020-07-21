import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { BaseButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';
import { block } from 'react-native-reanimated';

const Prestadores1 = () => {
    const navigation = useNavigation();

    function handleNavigateToPrincipall() {
        navigation.navigate('Principall')
    }
    function handleNavigateToDetalhes1() {
        navigation.navigate('Detalhes1')
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <View style={styles.container}>
                <Text style={[styles.header, { marginLeft: 10, marginStart: 10, marginTop: 10 }]} onPress={handleNavigateToPrincipall}>
                    <Text>
                        <Icon name="arrow-left" size={30} color="#0426B0" />
                    </Text>
                </Text>
                <Text style={[styles.title, {marginStart:25, marginEnd: 25 }]}>Prestadores de Serviços de Limpeza e em Geral</Text>
                
                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 10}]}>Nome:</Text>
                <Text style={[styles.dataValue]}>Angélica da Silva Martins</Text>
                <Text style={[styles.description]}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>Faço bolos</Text>
                <Text style={[styles.description]}>Telefone:</Text>
                <Text style={styles.dataValue}>99999-8888</Text>
                <View style={styles.linklink}>
                <View style={styles.linkSection}>
                <Text style={[{fontWeight: 'bold', fontSize: 18, paddingHorizontal: 10, color:'#0426B0'}]} onPress={handleNavigateToDetalhes1}>Ver Mais</Text>
                </View>
                <Text>
                    <Text onPress={handleNavigateToDetalhes1}>
                        <Icon name="arrow-right" size={30} color="#0426B0" />
                    </Text>
                </Text>
                </View>
                </View>

                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 10}]}>Nome:</Text>
                <Text style={[styles.dataValue]}>Carlos Henrique Ferreira Junior</Text>
                <Text style={[styles.description]}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>Faço miojo, canjica, pipoca, lasanha, batata frita</Text>
                <Text style={[styles.description]}>Telefone:</Text>
                <Text style={styles.dataValue}>96969-9898</Text>
                <View style={styles.linklink}>
                <View style={styles.linkSection}>
                <Text style={[{fontWeight: 'bold', fontSize: 18, paddingHorizontal: 10, color:'#0426B0'}]} onPress={handleNavigateToDetalhes1}>Ver Mais</Text>
                </View>
                <Text>
                    <Text onPress={handleNavigateToDetalhes1}>
                        <Icon name="arrow-right" size={30} color="#0426B0" />
                    </Text>
                </Text>
                </View>
                </View>

                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 10}]}>Nome:</Text>
                <Text style={[styles.dataValue]}>Maria Tereza Camargo</Text>
                <Text style={[styles.description]}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>Não sei fazer muita coisa mas consigo plantar bananeira</Text>
                <Text style={[styles.description]}>Telefone:</Text>
                <Text style={styles.dataValue}>65656-6868</Text>
                <View style={styles.linklink}>
                <View style={styles.linkSection}>
                <Text style={[{fontWeight: 'bold', fontSize: 18, paddingHorizontal: 10, color:'#0426B0'}]} onPress={handleNavigateToDetalhes1}>Ver Mais</Text>
                </View>
                <Text>
                    <Text onPress={handleNavigateToDetalhes1}>
                        <Icon name="arrow-right" size={30} color="#0426B0" />
                    </Text>
                </Text>
                </View>
                </View>

                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 10}]}>Nome:</Text>
                <Text style={[styles.dataValue]}>Louisa Jessica Facher</Text>
                <Text style={[styles.description]}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>Consigo dobrar roupa mas não sei passar</Text>
                <Text style={[styles.description]}>Telefone:</Text>
                <Text style={styles.dataValue}>12121-5858</Text>
                <View style={styles.linklink}>
                <View style={styles.linkSection}>
                <Text style={[{fontWeight: 'bold', fontSize: 18, paddingHorizontal: 10, color:'#0426B0'}]} onPress={handleNavigateToDetalhes1}>Ver Mais</Text>
                </View>
                <Text>
                    <Text onPress={handleNavigateToDetalhes1}>
                        <Icon name="arrow-right" size={30} color="#0426B0" />
                    </Text>
                </Text>
                </View>
                </View>


                <View style={styles.descriptionContainer}>
                <Text style={[styles.description, {marginTop: 10}]}>Nome:</Text>
                <Text style={[styles.dataValue]}>Elon Musk</Text>
                <Text style={[styles.description]}>Tipo de Trabalho:</Text>
                <Text style={styles.dataValue}>Mando um pessoal para o espaço</Text>
                <Text style={[styles.description]}>Telefone:</Text>
                <Text style={styles.dataValue}>78788-5252</Text>
                <View style={styles.linklink} >
                <View style={styles.linkSection}>
                <Text style={[{fontWeight: 'bold', fontSize: 18, paddingHorizontal: 10, color:'#0426B0'}]} onPress={handleNavigateToDetalhes1}>Ver Mais</Text>
                </View>
                <Text>
                    <Text onPress={handleNavigateToDetalhes1}>
                        <Icon name="arrow-right" size={30} color="#0426B0" />
                    </Text>
                </Text>
                </View>
                </View>


            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linklink: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        color: '#13131a',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    descriptionContainer: {
        // height: 225,
        justifyContent: "space-between",
        marginStart: 10,
        marginEnd: 10,
        backgroundColor: 'rgba(4, 38, 176, 0.3)',
        marginBottom: 15,
        paddingHorizontal: 5,
        color: '#41414d',
        borderRadius: 5
    },
    description: {
        paddingHorizontal: 10,
        fontSize: 16,
        flexDirection: 'row',
        color: 'black',
        fontWeight: 'bold',
    },
    dataValue: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 10,
        color: 'black',
    }, 
    linkSection: {
        flex: 1,
        flexDirection: 'row',
    }

})
export default Prestadores1;

