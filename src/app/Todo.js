import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

export class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }
    componentWillMount() {
        fetch('http://10.0.2.2:3000/todos', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(todos => this.setState({ todos }));
    }
    handlePress(e) {
        fetch('http://10.0.2.2:3000/todos', {
            method: 'post',
            body: JSON.stringify({
                name: this.state.newTodo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                const todos = [...this.state.todos, data];
                this.setState({ todos: todos, newTodo: '' });
            });
    }

    handleChange(value) {
        this.setState({ newTodo: value });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        value={this.state.newTodo}
                        onChangeText={this.handleChange} />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.handlePress}>
                        <Text
                            style={styles.buttonText}>
                            Make
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.todos}>
                    {this.state.todos.map((todo, index) => (
                        <View key={index} style={styles.todo}>
                            <Text style={styles.todoText}>{todo.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row'
    },
    input: {
        flex: 0.7,
        fontSize: 24
    },
    button: {
        flex: 0.3,
        height: 50,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        padding: 20
    },
    todos: {
        marginTop: 60
    },
    todo: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    todoText: {
        fontSize: 24
    }
});