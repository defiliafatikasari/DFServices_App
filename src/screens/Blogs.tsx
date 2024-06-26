import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { black, grey } from "../constants/colors";

export default function Blogs() {

    const handleReadMore = () => {
        Linking.openURL('https://jasaonoff.blogspot.com/');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Selamat datang di Blogs Jasa DF Services</Text>
            </View>
            <View style={styles.blogContainer}>
                <Text style={styles.blogTitle}>DF Services</Text>
                <Image source={require('../assets/images/logodf.png')} style={styles.blogImage} />
                <Text style={styles.blogContent}>
                    DF SERVICES DF Services Bertujuan Untuk Meringankan Beban Para Siswa Ataupun Mahasiswa 
                    Serta Semua Orang Yang Susah & Dan Imager.
                </Text>
                <TouchableOpacity style={styles.readMoreButton} onPress={handleReadMore}>
                    <Text style={styles.readMoreButtonText}>Baca Selengkapnya</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
    },
    header: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: grey,
        marginBottom: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: black,
    },
    blogContainer: {
        marginBottom: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        padding: 20,
        backgroundColor: "#fff",
    },
    blogTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: black,
    },
    blogContent: {
        fontSize: 18,
        color: black,
        marginBottom: 20,
        textAlign: "center",
    },
    readMoreButton: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    readMoreButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    blogImage: {
        width: "100%",
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
});
