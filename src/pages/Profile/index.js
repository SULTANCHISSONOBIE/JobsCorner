import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import {poto} from '../../assets';
import {TesMinatKemampuan, PekerjaanSave, Pekerjaanns} from '../../components/';

const Profile = () => {
  
  return (
    <View style={styles.page}>
      <ScrollView>
      <View>
        <Text style={styles.Profile}>Profile</Text>
      </View>
      <View style={styles.poto}>
        <Image source={poto}/>
      </View>
      <View style={styles.kolom}>
        <Text style={{color: '#FFFFFF'}}>Nama Lengkap</Text>
        <TextInput style={styles.text} placeholder="Gimeriyan" placeholderTextColor='#94A3B8'  ></TextInput>
      </View>
      <View style={styles.kolom}>
        <Text style={{color: '#FFFFFF'}}>Alamat</Text>
        <TextInput style={styles.text} placeholder="Jl.Bandara Sultan no 12" placeholderTextColor='#94A3B8'  ></TextInput>
      </View>
      <View style={styles.kolom}>
        <Text style={{color: '#FFFFFF'}}>Kampus</Text>
        <TextInput style={styles.text} placeholder="Telkom University" placeholderTextColor='#94A3B8'  ></TextInput>
      </View>
      <View style={styles.kolom}>
        <Text style={{color: '#FFFFFF'}}>Jurusan</Text>
        <TextInput style={styles.text} placeholder="S1 Teknik Komputer" placeholderTextColor='#94A3B8'  ></TextInput>
      </View>
      <View style={styles.kolom}>
        <Text style={{color: '#FFFFFF'}}>Jenjang Pendidikan</Text>
        <TextInput style={styles.text} placeholder="SMA" placeholderTextColor='#94A3B8'  ></TextInput>
      </View>
      <View style={styles.kolom2}>
        <Text style={styles.hurufbwh}>MINAT & KEMAMPUAN</Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={{marginLeft: 33, color:'#FFFFFF', fontSize: 12}}>Rekomendasi Pekerjaan</Text> 
        <View style={{justifyContent: 'center', alignItems: 'flex-end', flex:1}}> 
          <Text style={{marginRight: 33, color:'#FFFFFF', fontSize: 10}}>Lihat Semua</Text> 
        </View> 
      </View>
      <PekerjaanSave/>
      </ScrollView> 
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  page:{
    flex: 1,
    backgroundColor:'#0C0D15'
  },
  Profile:{
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF'
  },
  huruf:{
    fontSize: 20,
    color: '#FFFFFF'
  },
  poto:{
    alignItems: 'center',
    marginBottom: 45
  },
  kolom:{
    marginHorizontal:30,
    marginBottom: 20
  },
  hurufbwh:{
    color:'#FFFFFF', 
    textAlign:'center',
    fontWeight: 'bold',
    marginVertical: 10
  },
  kolom2:{
    marginHorizontal:30,
    marginBottom: 20,
    backgroundColor: '#308CFE',
    borderRadius: 36
  },
  text:{
    borderBottomWidth:1,
    borderColor:'#ffff',
    color:'#ffff',
  }
});