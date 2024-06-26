import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { black } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function ProductDetail({ route }: any){
    const navigation = useNavigation();
    const { product } = route.params;

    const addToCart = () => {
        // Implementasi logika untuk menambahkan produk ke keranjang
        // Anda bisa menggunakan Redux, useState, atau metode lainnya untuk mengelola keranjang
        Alert.alert("Produk telah ditambahkan ke keranjang!");
    };

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <MaterialIcons name="chevron-left" size={30} color={black} onPress={() => navigation.goBack()} />
                <MaterialIcons name="shopping-cart" size={30} color={black} onPress={() => navigation.navigate('Cart' as never)} />
            </View>
            <View style={styles.productDetailsContainer}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
                    <Text style={styles.addToCartButtonText}>Tambahkan ke Keranjang</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: black,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    productDetailsContainer: {
        alignItems: 'center',
        padding: 20,
    },
    productImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: black,
    },
    productDescription: {
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
        color: black,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: black,
    },
    addToCartButton: {
        backgroundColor: "blue",
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    addToCartButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});
