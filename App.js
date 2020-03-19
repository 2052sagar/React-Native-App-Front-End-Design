import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Heading from './components/Headings'
import Hero from './components/Hero'
import LatestMembers from './components/LatestMembers'

export default class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Heading/>
        <Hero/>
        <LatestMembers/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 5,
  }
})
