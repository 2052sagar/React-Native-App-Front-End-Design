import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Heading from './components/Headings'
import Hero from './components/Hero'
import LatestMembers from './components/LatestMembers'
import Mosiac from './components/Mosiac'

export default class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View>
          <Heading/>
        </View>
        <ScrollView style = {styles.bodyContainer}>
          <Hero/>
          <LatestMembers/>
          <View>
            <Text style={{paddingTop: 10, fontWeight: 'bold', fontSize: 22}}>Monday</Text>
          </View>
          <Mosiac />
        </ScrollView>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },
  bodyContainer: {
    padding: 5,
  }
})
