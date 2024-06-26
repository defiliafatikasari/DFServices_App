import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, blue, border, grey, white } from "../constants/colors";
import { JprintHp, JprintW, JprintG, JprintBB, Jketik, Jmakalah, Jppt, Jed } from "../constants/images"; 
import Icon from "react-native-vector-icons/MaterialIcons";

const productDataJasaPrint = [
  { image: JprintHp, title: "Jasa Print Hitam Putih", description: "F4/A4 - 70/80gsm", price: "IDR 500/Lembar" },
  { image: JprintW, title: "Jasa Print Warna", description: "F4/A4 - 70/80gsm", price: "IDR 1000/Lembar" },
  { image: JprintG, title: "Jasa Print Gambar", description: "F4/A4 70/80gsm", price: "IDR 1500/Lembar" },
  { image: JprintBB, title: "Jasa Print Bolak Balik", description: "F4/A4 70/80gsm", price: "IDR 2000/Lembar" },
];

const productDataJasaJoki = [
    { image: Jketik, title: "Jasa Ketik", description: "Sesuai Request Customer Minimal 1 Lembar F4/A4", price: "Start From IDR 5000" },
    { image: Jmakalah, title: "Jasa Buat Makalah", description: "Makalah SD/SMP/SMA/SMK/MA/Mahasiswa", price: "Start From IDR 20000" },
    { image: Jppt, title: "Jasa Buat PPT", description: "PowerPoint SD/SMP/SMA/SMK/MA/Mahasiswa", price: "Start From IDR 25000" },
    { image: Jed, title: "Jasa Desain/Editing", description: "Desain/Editing Logo, Poster, Banner dan lain sebagainya", price: "Start From IDR 5000" },
];

export default function ListProduct({ title, navigation }: any) {

  const data = title === 'Jasa Print' ? productDataJasaPrint : productDataJasaJoki;
  
  const navigateToDetail = (product: any) => {
      navigation.navigate('ProductDetail', { product });
  }

  return (
    <>
      <View style={[styles.flexRowCenter, { justifyContent: 'space-between', paddingHorizontal: 24 }]}>
        <Text style={{ color: black, fontSize: 24, fontWeight: '600' }}>{title}</Text>
        {/* <Text style={{ color: blue, fontSize: 16, fontWeight: '600' }}>See all</Text> */}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((product, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToDetail(product)} style={[styles.cardStyle, index === 0 && { marginLeft: 24 }]}>
            <Image source={product.image} style={{ width: '100%', resizeMode: 'contain', height: 100 }} />
            <View style={{ height: 25 }} />
            <View>
              <Text style={{ color: black }}>{product.title}</Text>
              <Text style={{ color: grey }}>{product.description}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: black }}>{product.price}</Text>
              <View style={{ backgroundColor: blue, padding: 10, borderRadius: 20 }}>
                <Icon name="add" color={white} size={25} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  cardStyle: {
    width: 175,
    height: 248,
    borderWidth: 1,
    borderColor: border,
    marginRight: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: white,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
