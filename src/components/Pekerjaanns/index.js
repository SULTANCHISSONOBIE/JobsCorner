import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'


const Pekerjaanns = () => {
  return (
    <View>
        <View style={styles.pekerjaan}>
        <TouchableOpacity>
            <Text style={styles.huruf}>Desainer Grafis</Text>
            <Text style={styles.huruf2}>Mendesain atau membuat grafis untuk memen...</Text>
            <View style={styles.kategori2}>
                <Text style={styles.huruf3}>Seni dan Desain</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={styles.pekerjaan}>
        <TouchableOpacity>
            <Text style={styles.huruf}>Copywriter</Text>
            <Text style={styles.huruf2}>Penulis yang membuat tulisan yang yang biasanya ...</Text>
            <View style={styles.kategori2}>
                <Text style={styles.huruf3}>Media dan Periklanan</Text>
            </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}
export default Pekerjaanns;

const styles = StyleSheet.create({
    huruf: {
        color: '#FFFFFF',
        marginHorizontal: 15,
        marginTop: 10
    },
    huruf2:{
        color: '#FFFFFF',
        marginHorizontal: 15,
        fontSize: 12,
        marginVertical: 10
    },
    huruf3: {
        color: '#2684FF',
        marginHorizontal: 5,
        marginVertical: 5,
        fontSize: 10,
        textAlign: 'center'
    },
    pekerjaan:{
        backgroundColor: '#0F1926', 
        marginHorizontal: 30, 
        marginBottom: 10,
        borderRadius: 16,
        shadowColor: "#2684FF",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: 5
    },
    kategori: {
        backgroundColor: '#0F0C07',
        marginRight: 160,
        marginLeft: 13,
        borderRadius: 8,
        marginBottom: 10

    },
    kategori2: {
        backgroundColor: '#0F0C07',
        marginRight: 190,
        marginLeft: 13,
        borderRadius: 8,
        marginBottom: 10

    }
    
});



