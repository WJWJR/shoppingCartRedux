const initialState = {
shirts: [
  {
    image: `<img src="" />`,
    item: '0ESHIRT',
    name: 'Naught by Nature',
    size: 'XL',
    color: 'Black',
    price: 39,
    purchased: false
  }
]
}

function reducer (state = initialState, action) {
  switch (action.type) {
  case 'ADD_SHIRT':
    return {shirts: [ ...state.shirts, { image: action.image, item: action.item, name: action.name, size: action.size, color: action.color, price: action.price, purchased: false}]}
  case 'REMOVE_SHIRT':
    return state.filter((_, index) => index !== action.index)
  case 'ADD_SHIRT_TO_CART':
    return state.map((shirts, index) => {
      if (index === action.index) {
        return { ...shirts, purchased: true}
      } else {
        return shirts
      }
    })
  default:
    return state
  }
}
export default reducer;
