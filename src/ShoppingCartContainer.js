import { connect } from 'react-redux'
// the connect function is used to connect the state in the store, to the props of a component

import CartItems from './CartItems'

const mapStateToProps = (state) => {
  return {
    shirts: state.shirts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShirt: () => {dispatch({type: 'ADD_SHIRT', title: 'La'})}
  }
}

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(CartItems)

export default ShoppingCartContainer;
