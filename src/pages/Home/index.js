import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import {ImageHeader} from '../../assets';
import {TesMinatKemampuan, PekerjaanSave, Pekerjaanns} from '../../components/';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
      <ImageBackground source={ImageHeader} style={styles.header}>
      <Image source={ImageHeader} style={styles.header}/>
      </ImageBackground>
      <TesMinatKemampuan/>
      <TextInput style={{
        backgroundColor: '#0C0D15',
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 10,
        color: '#94A3B8',
        borderRadius: 12,
        borderWidth: 1,
        padding:10,
        borderColor: '#94A3B8'
        }} placeholder="Cari Pekerjaan" placeholderTextColor='#94A3B8' /> 
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={{marginLeft: 33, color:'#FFFFFF', fontSize: 12}}>Pekerjaan Populer</Text> 
        <View style={{justifyContent: 'center', alignItems: 'flex-end', flex:1}}> 
          <Text style={{marginRight: 33, color:'#FFFFFF', fontSize: 10}}>Lihat Semua</Text> 
        </View> 
      </View>
      <PekerjaanSave/>
      <Pekerjaanns/>
      </ScrollView>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').heigth;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:'#0C0D15'
  },
  header: {
    // width: windowWidth,
    // heigth: windowHeight*0.2
  }
});