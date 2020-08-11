import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../../services/api";
import { Entypo } from '@expo/vector-icons';

const Principalll = () => {
    const navigation = useNavigation();

    function handleNavigateToBack() {
        navigation.goBack();
    }
    function handleNavigateToPrestadores(servico) {
        navigation.navigate("Prestadores", { servico });
    }

    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        api.get("servicoslist").then((res) => {
            setServicos(res.data);
        });
    });

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[{ marginTop: 5 }]} onPress={handleNavigateToBack}>
                        <Text>
                            <Icon name="arrow-left" size={30} color="#0426B0" />
                        </Text>
                    </Text>
                    <View style={styles.searchSection}>
                        <Text style={[{ fontWeight: "bold", fontSize: 20, marginTop: 5, marginLeft: 60 }]}>
                            Área do Visitante
                        </Text>
                    </View>
                </View>
                {servicos.map((servico) => (
                    <TouchableOpacity
                        keyExtractor={(servico) => String(servico.id)}
                        style={[styles.descriptionContainer, { marginTop: 15 }]}
                        onPress={() => handleNavigateToPrestadores(servico)}
                        activeOpacity={0.8}
                    >
                        <Text style={[{ marginStart: 8, marginTop: 5 }]}>
                            <Entypo name="home" size={100} color="black" />
                        </Text>
                        <View style={styles.text}>
                            <Text style={styles.description}>{servico.name}</Text>
                            <Text style={styles.dataValue}>{servico.info}</Text>
                        </View>

                    </TouchableOpacity>
                ))}

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
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: 15,
    },
    headerText: {
        fontSize: 16,
        borderRadius: 5,
        textAlign: "center",
        paddingTop: 12,
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
        flexDirection: "row",
    },
    descriptionContainer: {
        flex: 1,
        height: 160,
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        fontSize: 15,
        backgroundColor: "rgba(4, 38, 176, 0.4)",
        paddingHorizontal: 5,
        color: "#41414d",
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 15,
    },
    description: {
        marginStart: 110,
        paddingHorizontal: 10,
        fontSize: 17,
        flexDirection: "row",
        color: "black",
        fontWeight: "bold",
    },
    dataValue: {
        marginStart: 110,
        paddingHorizontal: 10,
        fontSize: 15,
        marginTop: 5,
        marginBottom: 10,
        color: "black",
    },
    text: {},
});
export default Principalll;
