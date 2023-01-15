import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import {TesMinatKemampuan, PekerjaanSave, Pekerjaanns} from '../../components/';

const Save = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
      <View>
        <Text style={styles.Saved}>Saved</Text>
      </View> 
      <TextInput style={{
        backgroundColor: '#0C0D15',
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 30,
        color: '#94A3B8',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#94A3B8',
        padding:10
        }} placeholder="Cari Pekerjaan" placeholderTextColor='#94A3B8' /> 
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={{marginLeft: 33, color:'#FFFFFF', fontSize: 12}}>Pekerjaan yang Disimpan</Text> 
        <View style={{justifyContent: 'center', alignItems: 'flex-end', flex:1}}> 
          <Text style={{marginRight: 33, color:'#FFFFFF', fontSize: 10}}>Lihat Semua</Text> 
        </View> 
      </View>
      <PekerjaanSave/>
      </ScrollView>
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({
    page:{
      flex: 1,
      backgroundColor:'#0C0D15'
    },
    Saved:{
      marginTop: 30,
      textAlign: 'center',
      fontSize: 20,
      color: '#FFFFFF'
    }
});