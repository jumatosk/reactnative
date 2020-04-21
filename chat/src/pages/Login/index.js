import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import style from './style'
import chat from '../../assets/chat.png'

export default function Login() {
    const [name, setName] = useState('')
    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <View style={{marginTop: 30}}>
                <Image style={style.image} source={chat} />
            </View>

            <View style={style.userView}>
                <TextInput style={style.input} placeholder='Insert your username'
                    onChangeText={name => setName(name)} value={name}
                />
                <View style={style.buttonView}>
                    <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Chat')}>
                        <Text style={style.text}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
