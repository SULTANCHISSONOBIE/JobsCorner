import { StyleSheet, Text, View, TouchableOpacity,title } from 'react-native';
import React from 'react';

const ButtonIcon = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}> 
        <Text style={styles.buttonstyle}>{title}</Text>
    </TouchableOpacity>

  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  buttonstyle: {
    color: 'white'
  },
  container: {
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#2684FF',
    borderRadius: 12,
    padding: 9
  }
})