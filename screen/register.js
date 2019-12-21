import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert, ScrollView } from 'react-native';
import _ from 'lodash';
import { RegisterStyles } from '../styles';

const key = 'ITEM';

export default class RegisterComponent extends Component {
  state = {
    items: {},
  };

  componentWillMount() {
    this.getItemFromStorage().then((res) => {
      const items = JSON.parse(res);
      this.setState({ items: items });
    })
    .catch((err) => {
      Alert.alert('エラー', `${err}`, [{ text: 'OK' }], { cancelable: false });
    });
  };

  getItemFromStorage() {
    return AsyncStorage.getItem(key);
  };

  renderItems() {
    const { items } = this.state;
    const itemList =  _.map(items, (item, i) => {
      let boxStyle = {};
      if (( i % 2 ) === 0) {
        boxStyle = RegisterStyles.item_box_right;
      }
      if (( i % 2 ) !== 0) {
        boxStyle = RegisterStyles.item_box_center;
      }
      if (( i % 3 ) == 0) {
        boxStyle = RegisterStyles.item_box_left;
      }
      return (
        <View key={String(i)}>
          <View style={boxStyle}>
            <Text>
              { item.item }
            </Text>
            <Text>
              { item.price }
            </Text>
          </View>
        </View>
      );
    });
    return itemList;
  };

  render() {
    return (
      <View style={{ flex: 1, height: '100%' }}>
        <ScrollView style={{ height: '40%', backgroundColor: 'pink', padding: '5%' }}>
          <View style={{ flexDirection: 'row' }}>
            {this.renderItems()}
            </View>
        </ScrollView>
        <ScrollView style={{ height: '60%', backgroundColor: 'yellow' }}>
          <Text>
            ここが会計リスト
          </Text>
        </ScrollView>
      </View>
    );
  }
}