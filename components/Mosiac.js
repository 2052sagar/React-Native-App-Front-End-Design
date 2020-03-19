import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground} from 'react-native'
import data from './data'
import LinearGradient from 'react-native-linear-gradient'

export default class Mosiac extends Component {

    state={
        data: data
    }

    mosiac = () => {
        return this.state.data.map(singleData => {
            return(
                <View key={singleData.id} style={{height:250, margin: 3, flexBasis:'48%'}}>
                    <ImageBackground imageStyle={{borderRadius: 10}}  source={{uri: singleData.image_link}} style={{height: 250}}>
                        <LinearGradient style={{flexDirection:'row' ,borderRadius: 10, position:'absolute', left:0, right:0, top:0,bottom:0}} start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,1)']}>     
                            <Text style={{
                                    fontSize:15,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    alignSelf:'flex-end',
                                    paddingLeft: 15,
                                    paddingBottom:15
                                }} >{singleData.headline}</Text>
                        </LinearGradient>
                    </ImageBackground>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.mosiac()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        overflow: 'hidden',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
