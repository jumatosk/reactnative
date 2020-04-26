import React, { Component } from 'react'
import { Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'

import styles from './style'

export default class Flatlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
            refreshing: false,
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    refreshing: false,
                    dataSource: responseJson
                })
            })
            .catch(error => {
                this.setState({error, loading: false, refreshing: false})
            })
    }

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => alert(item.body)}>
                <View style={styles.item}>
                    <Text style={styles.text}>{item.id + ". " + item.title}</Text>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>

        )
    }

    handleRefresh = () => {
        this.setState({
            refreshing: true,
        }, () => {
            this.componentDidMount()
        })
    }

    render() {
        let { dataSource, isLoading } = this.state

        if (isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#9E0011" animating />
                </View>
            )

        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        onRefresh={this.handleRefresh}
                        refreshing={this.state.refreshing}
                        data={dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )
        }
    }
}
