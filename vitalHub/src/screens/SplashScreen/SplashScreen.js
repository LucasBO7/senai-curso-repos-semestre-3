import { View, Image } from 'react-native'
import React from 'react'

export default function index() {
    return (
        <View>
            <Image source={require('../../assets/splashScreen.png')} />
        </View>
    )
}