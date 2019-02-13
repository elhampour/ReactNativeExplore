import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Reddit extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    componentWillMount() {
        fetch('https://www.reddit.com/.json', {
            Accept: 'application/json'
        })
            .then(res => res.json())
            .then(data => this.setState({ posts: data.data.children }));
    }
    render() {
        return (
            <View>
                <Text>
                    Reddit
                </Text>
                <View>
                    {this.state.posts.map((a, index) => {
                        return (
                            <Text key={index}>
                                {a.data.author}
                            </Text>
                        );
                    })}
                </View>
            </View>
        );
    }
}