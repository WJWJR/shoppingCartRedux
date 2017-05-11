import React from 'react';

const CartItems = ({ shirts, addshirt, removeshirt }) => (
  // console.log(CartItems)
  <div className='cart'>
    <ul>
      {shirts.map((shirt, index) => {
        return (

          <li key={index}>
            <img src=""/>
            <p>{shirt.item}</p>
            <p>{shirt.name}</p>
            <p>{shirt.size}</p>
            <p>{shirt.color}</p>
            <p>{shirt.price}</p>

          </li>
        )
      }
      )}
    </ul>
    <button onClick={addshirt}>add a shirt</button>
    <button onClick={removeshirt}>remove a shirt</button>

</div>
)
export default CartItems
