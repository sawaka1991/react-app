
import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class App extends Component {

    render() {
        return (
            <View>
                <Text
                  onPress={() => this.props.navigation.navigate('items')}
                >
                    商品登録画面
                </Text>
                <Text
                  onPress={() => this.props.navigation.navigate('register')}
                >
                    計算画面
                </Text>
            </View>
        );
    }
}

