import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native';


const ToDo = () => {
    const [task, updateTask] = useState('')
    const [tasks, updateTasks] = useState([])

    const handleAdd = () => {
        if (task.trim()) {
            updateTasks([...tasks, task])
            updateTask('')
        }
    }

    const handleRenderTask = ({ item }) => <Text style={styles.item}>{item}</Text>

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>To-Do List</Text>
                <View style={styles.form}>
                    <TextInput style={styles.field}
                        autoCapitalize='none'
                        autoCompleteType='off'
                        autoCorrect={false}
                        onChangeText={text => updateTask(text)}
                        value={task}
                    />
                    <TouchableWithoutFeedback onPress={handleAdd}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Adicionar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <FlatList data={tasks} keyExtractor={item => item} renderItem={handleRenderTask} />
            </View>
        </SafeAreaView>
    )
}

export default ToDo;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6194db',
        padding: 35,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
        color: '#fff'
    },
    field: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 10,
        fontSize: 15,
        color: '#333',
        borderRadius: 20,
        flex: 1,
        marginRight: 10
    },
    button: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#343a40'
    },
    item: {
        borderWidth: 0.3,
        borderColor: '#dcdcdc',
        padding: 10,
        marginTop: 15,
        borderRadius: 3,
        color: '#263638'
    },
    form: {
        flexDirection: 'row',
    },
    texto: {
        paddingTop: 30
    }
})