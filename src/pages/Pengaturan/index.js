import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import {Logo } from '../../assets'

const Pengaturan = ({}) => {

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={{color : 'white', alignItems:'center', fontWeight: 'bold', fontSize: 16}}>Pengaturan</Text>
            </View>
            <Image source={Logo} style={styles.logo}/>
            
            <View style={styles.container1}>
                <View style={styles.garis}></View>
                <TouchableOpacity><Text style={{color : 'white', fontWeight: 'semi-bold', fontSize: 14, marginLeft: 10}} >Profil</Text></TouchableOpacity>
                <View style={styles.garis}></View>
                <TouchableOpacity><Text style={{color : 'white', fontWeight: 'semi-bold', fontSize: 14, marginLeft: 10}} >Tentang</Text></TouchableOpacity>
                <View style={styles.garis}></View>
                <TouchableOpacity><Text style={{color : 'white', fontWeight: 'semi-bold', fontSize: 14, marginLeft: 10}} >Pusat Bantuan</Text></TouchableOpacity>
                <View style={styles.garis}></View>
                <TouchableOpacity><Text style={{color : 'white', fontWeight: 'semi-bold', fontSize: 14, marginLeft: 10}} >Syarat & Ketentuan</Text></TouchableOpacity>
                <View style={styles.garis}></View>
                <TouchableOpacity><Text style={{color : 'white', fontWeight: 'semi-bold', fontSize: 14, marginLeft: 10}} >Kebijakan Privasi</Text></TouchableOpacity>
                <View style={styles.garis}><Text>-------------------------------------------------------------------------------------------</Text></View>
            </View>
        </View>
    )
}

export default Pengaturan

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#0C0D15',
        alignItems:'center'
    },
    container1: {
        marginHorizontal: 40,
    },
    text: {
        alignItems:'center',
        marginTop: 20,
        
    },
    logo: {
        marginVertical: 30,
        marginBottom: 50,
        width: 310,
        height: 51,
    },
    garis: {
        height: 2, 
        //flex: 1, 
        backgroundColor: '#2B2D30',
        marginVertical: 20,
    }
})