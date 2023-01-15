import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import {weblogo} from '../../assets';

const Detailjob = ({}) => {
    
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <View style={styles.container2}>
                <View style={styles.weblogo}>
                    <Image source={weblogo} style={styles.logo}/>
                </View>
                <Text style={styles.text}>Web Developer</Text>
                    <View style={styles.container3}>
                         <Text style={styles.text1}>Digital, Komputer & Informatika</Text>
                    </View>
            </View>
            <View style={styles.garis}></View>
            <View>
                <Text style={styles.textdesc}>Descriptions</Text>
                <View>
                    <Text style={styles.textdesc1}>Deskripsi Pekerjaan</Text>
                    <Text style={styles.textdesc2}>Merancang, mendesain, mengembangkan dan memodifikasi situs web. Menganalisa kebutuhan pengguna untuk penerapan konten, grafis, fitur kerja, dan kapasitas pada sebuah situs Web internet/intranet/extranet.</Text>
                    <Text style={styles.textdesc1}>Tugas Web Developer</Text>
                    <Text style={styles.textdesc2}>● Melaksanakan semua tahap desain visual dari konsep awal hingga pengembangan sesuai dengan permintaan klien</Text>
                    <Text style={styles.textdesc2}>● Berkolaborasi dengan web designer, UI/UX developer, web administrator dan pihak-pihak terkait lainnya dalam mengembangkan dan mengintegrasikan situs web dengan aplikasi berbasis web dan aplikasi pihak ke-tiga lainnya</Text>
                    
                </View>
            </View>
        </View>
    </View>
  )
  
}

export default Detailjob

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C0D15',
        flex : 1,
    },
    container1: {
        flex : 1,
        marginTop : 70,
        backgroundColor : '#0E1926',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30
    },
    container2: {
        alignItems: 'center',
        backgroundColor : '#0E1926',
        borderRadius: 30
    },
    container3:{
        backgroundColor : '#0F0C07',
        padding: 7,
        borderRadius: 6,
        marginTop: 35
    },
    logo: {
        marginVertical: 15,
        width: 70,
        height: 70,
    },
    garis: {
        height: 1, 
        //flex: 1, 
        backgroundColor: '#2B2D30',
        marginVertical: 30,
        marginHorizontal: 20
    },
    text: {
        color : 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text1: {
        color: '#2684FF',
        fontSize: 10,
        
    },
    textdesc:{
        color: 'white',
        //marginBottom: 0.2,
        padding: 7,
        backgroundColor: '#1051F8',
        //marginVertical: 30,
        marginHorizontal: 20,
        borderRadius: 13,
        borderWidth: 4,
        borderColor: "#0C0D15",
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'semi-bold'
    },
    textdesc1:{
        color: 'white',
        marginLeft: 20,
        fontSize: 14,
        marginTop: 20
    },
    textdesc2:{
        color: '#AAAFD7',
        marginHorizontal: 20,
        fontSize : 12,
        marginTop: 10,
        fontWeight: 'thin'
    }
})