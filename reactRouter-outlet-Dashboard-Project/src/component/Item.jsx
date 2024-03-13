import React from 'react'

function Item(prop) {
  return (
    <div className='itemContainer'>
        <div><img src={prop.img} alt='Image not found'/></div>
        <div><p>{prop.name}</p></div>
        <div><p>{prop.colour}</p></div>
        <div><p>{prop.size}</p></div>
        <div><p>{prop.quantity}</p></div>
        <div><p>{prop.price}&#8377;</p></div>
        <div><button>Update</button></div>

    </div>
  )
}

export default Item