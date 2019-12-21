import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const HEIGHT = window.height;

const CreateItemStyles = StyleSheet.create({
  text_white: {
    color: '#ffffff',
  },
  page_view: {
    height: '100%',
    width: '100%',
  },
  scroll_view: {
    backgroundColor: 'navy',
    height: HEIGHT - 100,
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  page_form: {
    height: 100,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  input_field: {
    flexDirection: 'row',
    height: '50%',
  },
  input_item: {
    flex: 2,
  },
  input_price: {
    flex: 1,
  },
  button_field: {
    height: '50%',
    width: '100%',
  },
  button_submit: {
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'navy',
    borderRadius: 7,
    position: 'absolute',
    right: 0,
  },

  item_list_view: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
  item_area: {
    flex: 5,
  },
  list_text: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'right',
    padding: 10,
  },
  price_area: {
    flex: 2,
    flexDirection: 'row',
  },
  icon_area: {
    flex: 1,
    flexDirection: 'row',
  },
  icon_button: {
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  icon_trash: {
    color: 'navy',
    fontSize: 30,
    textAlign: 'center',
  },
  icon_create: {
    color: 'navy',
    fontSize: 28,
    textAlign: 'center',
  },
  create_button: {
    marginTop: 10,
    backgroundColor: '#ffffff',
  },
  text_ok: {
    padding: 5,
    color: 'navy',
    fontSize: 16,
  },
  text_yen: {
    color: '#ffffff',
    marginTop: 15,
    fontSize: 16,
  }
});

export default  CreateItemStyles;