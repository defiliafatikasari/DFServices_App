import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { black, grey } from "../constants/colors";

export default function Orders() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Jasa Print Hitam Putih", price: 10, quantity: 10, image: require("../assets/images/jprinthp.png") },
        { id: 2, name: "Jasa Ketik", price: 15, quantity: 2, image: require("../assets/images/jketik.png") },
        { id: 3, name: "Jasa Desain/Editing", price: 20, quantity: 1, image: require("../assets/images/jeditdesain.png") },
    ]);

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const removeItem = (itemId: any) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };
    interface CartItem {
        id: number;
        name: string;
        price: number;
        quantity: number;
        image: any; 
    }
    
    const renderItem = ({ item }: { item: CartItem }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>IDR{item.price.toFixed(2)}</Text>
                <Text style={styles.itemQuantity}>Jumlah: {item.quantity}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
                <Text style={styles.removeButtonText}>Hapus</Text>
            </TouchableOpacity>
        </View>
    );

    const checkout = () => {
        // Logika untuk checkout, seperti pemrosesan pembayaran
        Alert.alert(
            "Checkout",
            "Apakah Anda yakin ingin melanjutkan ke pembayaran?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        // Logika ketika tombol OK ditekan
                    }
                }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: IDR{total.toFixed(2)}</Text>
                <TouchableOpacity style={styles.checkoutButton} onPress={() => Alert.alert("Checkout!")}>
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
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
    listContainer: {
        paddingBottom: 20,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: grey,
        paddingVertical: 10,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        color: black,
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 16,
        color: black,
    },
    itemQuantity: {
        fontSize: 14,
        color: grey,
    },
    removeButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#ff6b6b",
        borderRadius: 5,
    },
    removeButtonText: {
        color: "white",
        fontWeight: "bold",
    },
    totalContainer: {
        borderTopWidth: 1,
        borderTopColor: grey,
        paddingVertical: 10,
        alignItems: "center",
    },
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: black,
    },
    checkoutButton: {
        backgroundColor: "#ff6b6b",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    checkoutButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});
