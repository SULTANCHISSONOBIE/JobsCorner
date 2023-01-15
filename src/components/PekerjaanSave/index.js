import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'


const PekerjaanSave = () => {
  return (
    <View>
        <View style={styles.pekerjaan}>
        <TouchableOpacity>
            <Text style={styles.huruf}>Web Developer</Text>
            <Text style={styles.huruf2}>Merancang, menesain, mengembangakan dan...</Text>
            <View style={styles.kategori}>
                <Text style={styles.huruf3}>Digital, Komputer & Informatika</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={styles.pekerjaan}>
        <TouchableOpacity>
            <Text style={styles.huruf}>Management Trainee (MT)</Text>
            <Text style={styles.huruf2}>Management Trainee (MT) adalah karyawan d...</Text>
            <View style={styles.kategori2}>
                <Text style={styles.huruf3}>Manajemen dan Bisnis</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={styles.pekerjaan}>
        <TouchableOpacity>
        <Text style={styles.huruf}>Project Manager</Text>
            <Text style={styles.huruf2}>Seseorang profesional di bidang manajemen pro...</Text>
            <View style={styles.kategori2}>
                <Text style={styles.huruf3}>Manajemen dan Bisnis</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={styles.pekerjaan}>
        <TouchableOpacity>
            <Text style={styles.huruf}>Broker Saham</Text>
            <Text style={styles.huruf2}>Broker Saham adalah seseorang yang melakukan ...</Text>
            <View style={styles.kategori2}>
                <Text style={styles.huruf3}>Manajemen dan Bisnis</Text>
            </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default PekerjaanSave;

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