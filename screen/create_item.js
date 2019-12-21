import React, { Component } from 'react';
import { View, Text, Alert, AsyncStorage, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
import { Button, Input, Form, Item, Container, Icon } from 'native-base';
import _ from 'lodash';
import { CreateItemStyles } from '../styles';

const key = 'ITEM'

export default class ItemsComponent extends Component {
  state = {
    item: '',
    price: '',
    data: [],
  };

  componentWillMount() {
    this.getItemFromStorage().then((res) => {
      const itemData = JSON.parse(res);
      if (itemData !== null ) { 
        const dataList = _.map(itemData, (d) => ({
          item: d.item,
          price: d.price,
          disabled: true,
        }));
        this.setState({ data: dataList });
      }
    });
  };

  getItemFromStorage() {
    return AsyncStorage.getItem(key);
  }


  setItemToStorage(data) {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  };

  removeItem(index) {
    const { data } = this.state;
    Alert.alert(
      '確認',
      '本当に削除しますか？' ,
      [
        {
          text: 'OK',
          onPress: () => {
            data.splice(index, 1);
            this.setState({ data });
            this.setItemToStorage(data)
              .then(() => {
                Alert.alert('確認', '削除しました。' , [{ text: 'OK' }], { cancelable: false });
              })
              .catch((err) => {
                Alert. alert('確認', `${err}` , [{ text: 'OK' }], { cancelable: false });
              });
          }
        },
        { text: 'CANCEL', cancelable: false }
      ]
    );
    
  };

  changeTextToForm(index) {
    const { data } = this.state;
    data[index].disabled = false;
    this.setState({ data });
  }

  renderItems() {
    const { data } = this.state;
    const itemMap = _.map(data, (d, i) => (
        <View
          key={String(i)}
          style={CreateItemStyles.item_list_view}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={CreateItemStyles.item_area}>
              <Input
                disabled={d.disabled}
                style={CreateItemStyles.list_text}
                value={d.item}
                onChangeText={(input) => {
                  data[i].item = input, 
                  this.setState({ data })
                }}
              />
            </View>
            <View style={CreateItemStyles.price_area}>
              <Input
                disabled={d.disabled}
                style={CreateItemStyles.list_text}
                value={d.price}
                onChangeText={(input) => {
                  data[i].price = input, 
                  this.setState({ data })
                }}
              />  
              <Text style={CreateItemStyles.text_yen}>円</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 10, marginLeft: '60%'  }}>
            <View style={CreateItemStyles.icon_area}>
              <TouchableOpacity
                style={CreateItemStyles.icon_button}
                onPress={() => this.removeItem(i)}
              >
                <Icon
                  style={CreateItemStyles.icon_trash}
                  name='trash'
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={CreateItemStyles.icon_button}
                onPress={() => this.changeTextToForm(i)}
              >
                <Icon
                  style={CreateItemStyles.icon_create}
                  name='create'
                />
              </TouchableOpacity>
              {
                d.disabled === false 
                ? (
                  <Button
                    onPress={() => this.pressEditButton(i)}
                    small
                    style={CreateItemStyles.create_button}
                  >
                    <Text style={CreateItemStyles.text_ok}>
                      OK
                    </Text>
                  </Button>
                )
                : null
              }
            </View>
          </View>
        </View>
      ));

      return itemMap;
  };

  pressEditButton(index) {
    const { data } = this.state;
    data[index].disabled = true;
    this.setState({ data });
    const storageData = _.map(data, d => ({
      item: d.item,
      price: d.price
    }));
    this.setItemToStorage(storageData).then(() => {
      Alert.alert('確認', '編集しました', [{ text: 'OK' }], { cancelable: false });
    }).catch((err) => {
      Alert.alert('エラー', `${err}`, [{ text: 'OK' }], { cancelable: false });
    });
  }

  submit() {
    const { item, price , data } = this.state;
    itemData = {
      item: item,
      price: price,
      disabled: true,
    };
    data.push(itemData);
    this.setState({ data: data, item: '', price: '' });

    const storageData = _.map(data, d => ({
      item: d.item,
      price: d.price,
    }));
    this.setItemToStorage(storageData).then(() => {
      Alert.alert('確認', '保存が完了しました', [{ text: 'OK' }], { cancelable: false });
    }).catch((err) => {
      Alert.alert('エラー', `${err}`, [{ text: 'OK' }], { cancelable: false });
    });
  };

  render() {
    const { item, price, data } = this.state;
    return (
      <View style={CreateItemStyles.page_view}>
        
        <View style={CreateItemStyles.page_form}>
          <View style={CreateItemStyles.input_field}>
            <Input
              placeholder='商品名'
              style={CreateItemStyles.input_item}
              onChangeText={(input) => this.setState({ item: input })}
              value={item}
            />
            <Input
              placeholder='価格'
              style={CreateItemStyles.input_price}
              onChangeText={(input) => this.setState({ price: input })}
              value={price}
            />
          </View>
          <View style={CreateItemStyles.button_field}>
            <Button
              small
              style={CreateItemStyles.button_submit}
              onPress={() => this.submit()}
            >
              <Text style={CreateItemStyles.text_white}>
                登録
              </Text>
            </Button>
          </View>
        </View>

        <ScrollView style={CreateItemStyles.scroll_view}>
          {this.renderItems()}
        </ScrollView>
      </View>
    ); 
  }
}
