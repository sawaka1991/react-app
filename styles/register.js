import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const MAX_WIDTH = window.width - (window.width * 0.05);
const BOX_WIDTH = MAX_WIDTH / 3;

const RegisterStyles = StyleSheet.create({
  item_box_left: {
    width: BOX_WIDTH,
    backgroundColor: 'green',
  },
  item_box_center: {
    width: BOX_WIDTH,
    backgroundColor: 'lightblue',
  },
  item_box_right: {
    width: BOX_WIDTH,
    backgroundColor: 'lightgray',
  }
});

export default RegisterStyles;