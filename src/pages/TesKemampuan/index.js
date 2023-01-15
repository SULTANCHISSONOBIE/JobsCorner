import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'


const TesKemampuan = ({navigation}) => {
    
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Tes Kemampuan</Text>
      <Text style={styles.text1}>Pilih pernyataan yang paling menggambarkan dirimu</Text>
        <View style={styles.container1}>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkiri}>Saya bersikap </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkanan}>Pilih bersikap</Text>
                </TouchableOpacity> 
        </View>
        <Text style={styles.text1}>Pilih pernyataan yang paling menggambarkan dirimu</Text>
        <View style={styles.container1}>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkiri}>Saya bersikap </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkanan}>Pilih bersikap</Text>
                </TouchableOpacity> 
        </View>
        <Text style={styles.text1}>Pilih pernyataan yang paling menggambarkan dirimu</Text>
        <View style={styles.container1}>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkiri}>Saya bersikap </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkanan}>Pilih bersikap</Text>
                </TouchableOpacity> 
        </View>
        <Text style={styles.text1}>Pilih pernyataan yang paling menggambarkan dirimu</Text>
        <View style={styles.container1}>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkiri}>Saya bersikap </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkanan}>Pilih bersikap</Text>
                </TouchableOpacity> 
        </View>
        <Text style={styles.text1}>Pilih pernyataan yang paling menggambarkan dirimu</Text>
        <View style={styles.container1}>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkiri}>Saya bersikap </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkanan}>Pilih bersikap</Text>
                </TouchableOpacity> 
        </View>
        <Text style={styles.text1}>Pilih pernyataan yang paling menggambarkan dirimu</Text>
        <View style={styles.container1}>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkiri}>Saya bersikap </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Jawaban Tersimpan')}>
                <Text style={styles.textkanan}>Pilih bersikap</Text>
                </TouchableOpacity> 
        </View>
        <View>
            <TouchableOpacity onPress={() => alert('Anda Telah Menyelesaikan Tes Kemampuan')}>
            <Text style={styles.textselesai}>SELESAI </Text>
            </TouchableOpacity> 
        </View>
    </View>
    </ScrollView>
  )
  
}

export default TesKemampuan

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: 'black',
    },
    container1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        //backgroundColor: '#0F1926',
        marginHorizontal: 50
    },
    text: {
        color : 'white',
        textAlign : 'center',
        marginTop : 20
    },
    text1: {
        padding : 10,
        textAlign : 'center',
        //marginTop : 20,
        backgroundColor: '#0C0D15',
        marginHorizontal: 40,
        marginTop: 30,
        marginBottom: 30,
        color: '#94A3B8',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#94A3B8',
        fontSize : 10
    },
    textkiri: {
        padding : 10,
        textAlign : 'center',
        backgroundColor: '#308CFE',
        color : 'white',
        textAlign : 'center',
        borderRadius: 9,
        
        fontSize : 10,
        //marginHorizontal: 40, 
    },
    textkanan: {
        padding : 10,
        textAlign : 'center',
        backgroundColor: 'white',
        color : 'black',
        textAlign : 'center',
        borderRadius: 9,
        fontSize : 10,
        //marginHorizontal: 40, 
    },
    textselesai: {
        marginTop : 20,
        marginBottom: 50,
        padding : 5,
        textAlign : 'center',
        color : 'white',
        textAlign : 'center',
        borderRadius: 9,
        fontSize : 12,
        alignItems: 'center',
        marginHorizontal: 160,
        borderWidth : 1,
        borderColor : 'white'
    }
})