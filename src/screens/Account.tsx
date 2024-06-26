import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, AlertButton } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { black, grey } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function Account() {
    // Contoh data profil pengguna
    const user = {
        name: "Defilia Fatikasari",
        email: "defiliafatikasari09@gmail.com",
        profileImage: require("../assets/images/defilia.png"),
    };

    const navigation = useNavigation(); // Mendapatkan objek navigasi

    // Fungsi logout
    const handleLogout = () => {
        // Misalnya, menampilkan dialog konfirmasi sebelum logout
        Alert.alert(
            "Konfirmasi",
            "Apakah Anda yakin ingin logout?",
            [
                {
                    text: "Batal",
                    style: "cancel",
                },
                {
                    text: "Ya",
                    onPress: () => {
                        // Membersihkan token atau state yang diperlukan
                        // Navigasi ke halaman login
                        navigation.navigate("SignIn" as never); // Ganti "Login" dengan nama halaman login Anda
                    },
                },
            ] as AlertButton[], // Explicitly specify the type of options
            { cancelable: false }
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={user.profileImage} style={styles.profileImage} />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
            {/* Riwayat Pesanan */}
            <TouchableOpacity style={styles.button} onPress={() => console.log("Riwayat Pesanan")}>
                <Text style={styles.buttonText}>Riwayat Pesanan</Text>
            </TouchableOpacity>
            {/* Pengaturan Akun */}
            <TouchableOpacity style={styles.button} onPress={() => console.log("Pengaturan Akun")}>
                <Text style={styles.buttonText}>Pengaturan Akun</Text>
            </TouchableOpacity>
            {/* Logout */}
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
    },
    profileContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: black,
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: grey,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
    },
});
