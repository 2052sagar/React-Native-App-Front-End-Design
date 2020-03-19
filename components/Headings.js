import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'

export default class Headings extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={{
                    textAlign:'center',
                    fontSize: 16,
                    color: 'white',
                    marginVertical: 15,
                    fontWeight: 'bold'
                }}> Basic Demo UI </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff7550',
        borderRadius: 8,
        elevation: 6,
    }
})
