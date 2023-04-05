import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameDetails = ({navigation,route}) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <Text>GameDetails</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default GameDetails

const styles = StyleSheet.create({})