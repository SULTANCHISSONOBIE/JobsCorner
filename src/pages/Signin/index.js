import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Signin = () => {
  return (
    <View>
      <Text style={styles.signin}>Login</Text>
      <TextInput style={styles.kolom} placeholder="gime@example.com" placeholderTextColor='#0F1926' /> 
      <TextInput style={styles.kolom} placeholder="************" placeholderTextColor='#0F1926' /> 
      <TouchableOpacity>
        <View style={styles.tombol}>
          <Text style={{
            textAlign: 'center',
            color:'#FFFFFF',
            marginVertical: 16,
            fontWeight: 'bold'
            }}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={{marginLeft: 35, color:'#635A5A', fontSize: 12}}>Belum punya akun ?</Text> 
        <View style={{justifyContent: 'center', alignItems: 'flex-start', flex:1}}> 
          <TouchableOpacity>
            <Text style={{marginRight: 33, fontSize: 12, color:'#40577D'}}> Register</Text> 
          </TouchableOpacity>
        </View> 
      </View>
    </View>
  )
}

export default Signin

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