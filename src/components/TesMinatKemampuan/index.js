import { StyleSheet, Text, View, title, } from 'react-native'
import React from 'react'
import ButtonIcon from '../ButtonIcon'


const TesMinatKemampuan = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.huruf}>Selesaikan Tes Minat dan Tes Kemampuan untuk melihat rekomendasi pekerjaan untukmu !</Text>
       
        <View style={styles.buttonAksi}>
            <ButtonIcon title="Kemampuan" />
            <ButtonIcon title="     Minat     "/>
        </View>
        

    </View>
  )
}

export default TesMinatKemampuan;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0F1926',
        padding: 30,
        marginHorizontal: 5,
        borderRadius: 16,
        shadowColor: "#2684FF",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        marginTop: 10
    },
    huruf: {
        color: 'white',
        textAlign: 'center'
    },
    buttonAksi: {
        //backgroundColor: '#0F1926',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        //flexDirection: 'row',
        //justifyContent: 'center',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
        //justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: '#2684FF',
        // borderRadius: 12,
        
    },

})