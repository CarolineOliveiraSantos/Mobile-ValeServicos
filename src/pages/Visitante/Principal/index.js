import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Principall = () => {
    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.navigate("Home");
    }
    function handleNavigateToPrestadores1() {
        navigation.navigate("Prestadores1");
    }
    function handleNavigateToPrestadores2() {
        navigation.navigate("Prestadores2");
    }
    function handleNavigateToPrestadores3() {
        navigation.navigate("Prestadores3");
    }
    function handleNavigateToPrestadores4() {
        navigation.navigate("Prestadores4");
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[{ marginTop: 5 }]} onPress={handleNavigateToHome}>
                    <Text>
                        <Icon name="arrow-left" size={30} color="#0426B0" />
                    </Text>
                </Text>
                <View style={styles.searchSection}>
                    <TextInput style={[styles.input, { color: '#000', marginLeft: 20 }]} autoCorrect={false} placeholder="Buscar" >
                    </TextInput>
                    <FontAwesome style={{ paddingStart: 10, paddingTop: 8 }} name="search" size={26} color="#0426B0" />
                </View>
            </View>
                <View style={[styles.descriptionContainer, {marginTop: 15}]}>
                    <Text style={[{ marginStart: 8, marginTop: 5 }]} onPress={handleNavigateToPrestadores1}>
                        <MaterialCommunityIcons name="broom" size={100} color="black" />
                    </Text>
                    <View style={styles.text} >
                        <Text style={styles.description}>{`Serviços de Limpeza e \n           em Geral`}</Text>
                        <Text style={styles.dataValue}>{`Encontre os profissionais \n       para este trabalho`}</Text>
                    </View>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={[{ marginStart: 8, marginBottom: 5 }]} onPress={handleNavigateToPrestadores2}>
                    <MaterialCommunityIcons name="tree" size={110} color="black" />
                    </Text>
                    <View style={styles.text}>
                        <Text style={styles.description}>{`        Jardinagem`}</Text>
                        <Text style={styles.dataValue}>{`Encontre os profissionais \n       para este trabalho`}</Text>
                    </View>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={[{ marginStart: 8, marginBottom: 5}]} onPress={handleNavigateToPrestadores3}>
                    <MaterialCommunityIcons name="home-assistant" size={100} color="black" />
                    </Text>
                    <View style={styles.text}>
                        <Text style={styles.description}>{`Serviços Domésticos \n          Técnicos`}</Text>
                        <Text style={styles.dataValue}>{`Encontre os profissionais \n       para este trabalho`}</Text>
                    </View>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={[{ marginStart: 8, marginBottom: 70}]} onPress={handleNavigateToPrestadores4}>
                    <FontAwesome5 name="hand-holding" size={100} color="black" />
                    </Text>
                    <View style={styles.text}>
                        <Text style={styles.description}>{` Cuidadores e Babás`}</Text>
                        <Text style={styles.dataValue}>{`Encontre os profissionais \n        para este trabalho`}</Text>
                    </View>
                </View>
        </View>
        </ScrollView>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    header: {
        flex: 1,
        // height: 50,
        flexDirection: 'row',
        justifyContent: "space-between",
        fontSize: 15,
    },
    headerText: {
        fontSize: 16,
        borderRadius: 5,
        textAlign: 'center',
        paddingTop: 12
    },
    input: {
        width: 240,
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
    },
    descriptionContainer: {
        flex: 1,
        height: 160,
        flexDirection: 'row-reverse',
        justifyContent: "space-between",
        fontSize: 15,
        backgroundColor: 'rgba(4, 38, 176, 0.4)',
        paddingHorizontal: 5,
        color: '#41414d',
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 15

    },
    description: {
        paddingHorizontal: 10,
        fontSize: 17,
        flexDirection: 'row',
        color: 'black',
        fontWeight: 'bold',
    },
    dataValue: {
        paddingHorizontal: 10,
        fontSize: 15,
        marginTop: 5,
        marginBottom: 10,
        color: 'black',
    },
    text: {


    }
})
export default Principall;