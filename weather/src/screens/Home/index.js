import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Searchbar } from 'react-native-paper'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import {
    Container,
    Title
} from './styles'
import styles from './styles'

import GLOBAL from '../../global'
import STRINGS from '../../utils/Strings'

export default ({ navigation }) => {
    const [search, setSearch] = useState('')

    return (
        <Container>
            <LinearGradient
                colors={GLOBAL.linearGradientConfig}
                style={styles.linerGradient}
            />
            <Title>Clima <Icon name='weather-hazy' size={30}/></Title>
            <Searchbar
                onIconPress={() => navigation.navigate('Weather', { searchText: search })}
                placeholder={STRINGS.search_placeholder}
                style={styles.searchBar}
                value={search}
                onChangeText={setSearch}
            />
        </Container>
    )
}
