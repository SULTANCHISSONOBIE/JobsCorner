import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <View>
      <Text style={styles.signin}>Register</Text>
      <TextInput style={styles.kolom} placeholder="Nama Lengkap" placeholderTextColor='#0F1926' /> 
      <TextInput style={styles.kolom} placeholder="Jenis Kelamin" placeholderTextColor='#0F1926' />
      <TextInput style={styles.kolom} placeholder="Jejang Pendidikan" placeholderTextColor='#0F1926' />
      <TextInput style={styles.kolom} placeholder="Kampus" placeholderTextColor='#0F1926' /> 
      <TextInput style={styles.kolom} placeholder="Jurusan" placeholderTextColor='#0F1926' /> 
      <TextInput style={styles.kolom} placeholder="Semester" placeholderTextColor='#0F1926' /> 
      <TouchableOpacity>
        <View style={styles.tombol}>
          <Text style={{
            textAlign: 'center',
            color:'#FFFFFF',
            marginVertical: 16,
            fontWeight: 'bold'
            }}>REGISTER</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  signin:{
    marginTop:30,
    marginLeft:35,
    marginBottom:30,
    fontSize: 40,
    color:'#0F1926'
  },
  kolom:{
    marginHorizontal: 30,
    marginBottom: 20,
    color: '#0F1926',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#0F1926',
    padding:10,
  },
  tombol:{
    marginHorizontal: 30,
    marginBottom: 20,
    backgroundColor:'#344D91',
    borderRadius: 6
  }

})