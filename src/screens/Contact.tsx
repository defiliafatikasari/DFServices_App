import React, { useState } from "react";
import { View, Text, StyleSheet, Linking, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { black } from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Contact() {
    const [message, setMessage] = useState("");

    const handleOpenURL = (url: any) => {
        Linking.openURL(url);
    };

    const handleMessageSend = () => {
        // Logika untuk mengirim pesan
        console.log("Pesan terkirim:", message);
        // Mengatur kembali nilai pesan menjadi kosong setelah terkirim
        setMessage("");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contactContainer}>
                <Text style={styles.contactTitle}>Contact Jasa DF Services</Text>
                <View style={styles.contactItem}>
                    <Icon name="contact-phone" size={24} color="black" />
                    <Text style={styles.label}>WhatsApp: </Text>
                    <Text style={styles.link} onPress={() => handleOpenURL("https://www.whatsapp.com/")}>+6282197569330</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="phone" size={24} color="black" />
                    <Text style={styles.label}>Phone: </Text>
                    <Text style={styles.link} onPress={() => handleOpenURL("https://www.whatsapp.com/")}>+6287862771867</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="center-focus-strong" size={24} color="black" />
                    <Text style={styles.label}>Instagram: </Text>
                    <Text style={styles.link} onPress={() => handleOpenURL("https://www.instagram.com/")}>@dfser.vices</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="facebook" size={24} color="black" />
                    <Text style={styles.label}>Facebook: </Text>
                    <Text style={styles.link} onPress={() => handleOpenURL("https://www.facebook.com/")}>dfServices</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="tiktok" size={24} color="black" />
                    <Text style={styles.label}>TikTok: </Text>
                    <Text style={styles.link} onPress={() => handleOpenURL("https://www.tiktok.com/")}>@dfServices</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="email" size={24} color="black" />
                    <Text style={styles.label}>E-mail: </Text>
                    <Text style={styles.link} onPress={() => handleOpenURL("https://www.gmail.com/")}>dfservices18@gmail.com</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="shopify" size={24} color="black" />
                    <Text style={styles.label}>Shoope: </Text>
                    <Text style={styles.link} onPress={() => handleOpenURL("https://www.shoope.com/")}>dfservices</Text>
                </View>
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.messageTitle}>Kirim Pesan</Text>
                <TextInput
                    style={styles.messageInput}
                    placeholder="Masukkan pesan Anda"
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleMessageSend}>
                    <Text style={styles.sendButtonText}>Kirim</Text>
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
    contactContainer: {
        marginTop: 20,
    },
    contactTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: black,
    },
    contactItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    label: {
        fontWeight: "bold",
        marginLeft: 5,
        color: black,
    },
    link: {
        color: "blue",
        textDecorationLine: "underline",
    },
    messageContainer: {
        marginTop: 20,
    },
    messageTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: black,
    },
    messageInput: {
        borderWidth: 1,
        borderColor: black,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: black,
    },
    sendButton: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    sendButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});
