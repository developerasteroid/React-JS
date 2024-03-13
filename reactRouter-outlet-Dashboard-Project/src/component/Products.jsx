import React from 'react'
import Item from './Item'

function Products() {
  const products = [
    {
      name:"PUMA",
      quantity:21,
      price:999,
      size:9,
      colour:"Red",
      img:'https://assets.ajio.com/medias/sys_master/root/h22/h84/15083023433758/-473Wx593H-460422366-red-MODEL.jpg'
    },
    {
      name:"ADIDAS",
      quantity:60,
      price:1200,
      size:9,
      colour:"Black",
      img:'https://assets.ajio.com/medias/sys_master/root/hfe/hae/13903662153758/-473Wx593H-460360185-black-OUTFIT.jpg'
    },
    {
      name:"PUMA",
      quantity:128,
      price:1200,
      size:8,
      colour:"White",
      img:'https://images.jdmagicbox.com/quickquotes/images_main/puma-progression-idp-running-shoes-for-men-size-10-white-164372323-lt3c5.jpg'
    },
    {
      name:"PUMA",
      quantity:21,
      price:999,
      size:9,
      colour:"Red",
      img:'https://assets.ajio.com/medias/sys_master/root/h22/h84/15083023433758/-473Wx593H-460422366-red-MODEL.jpg'
    },
    {
      name:"ADIDAS",
      quantity:47,
      price:1999,
      size:10,
      colour:"Black",
      img:'https://assets.ajio.com/medias/sys_master/root/hfe/hae/13903662153758/-473Wx593H-460360185-black-OUTFIT.jpg'
    },
    {
      name:"PUMA",
      quantity:128,
      price:899,
      size:8,
      colour:"White",
      img:'https://images.jdmagicbox.com/quickquotes/images_main/puma-progression-idp-running-shoes-for-men-size-10-white-164372323-lt3c5.jpg'
    },
    {
      name:"PUMA",
      quantity:21,
      price:2199,
      size:9,
      colour:"Red",
      img:'https://assets.ajio.com/medias/sys_master/root/h22/h84/15083023433758/-473Wx593H-460422366-red-MODEL.jpg'
    },
    {
      name:"ADIDAS",
      quantity:60,
      price:1200,
      size:7,
      colour:"Black",
      img:'https://assets.ajio.com/medias/sys_master/root/hfe/hae/13903662153758/-473Wx593H-460360185-black-OUTFIT.jpg'
    },
    {
      name:"PUMA",
      quantity:18,
      price:7000,
      size:8,
      colour:"White",
      img:'https://images.jdmagicbox.com/quickquotes/images_main/puma-progression-idp-running-shoes-for-men-size-10-white-164372323-lt3c5.jpg'
    },
    {
      name:"PUMA",
      quantity:84,
      price:900,
      size:7,
      colour:"Red",
      img:'https://assets.ajio.com/medias/sys_master/root/h22/h84/15083023433758/-473Wx593H-460422366-red-MODEL.jpg'
    },
    {
      name:"ADIDAS",
      quantity:59,
      price:3000,
      size:10,
      colour:"Black",
      img:'https://assets.ajio.com/medias/sys_master/root/hfe/hae/13903662153758/-473Wx593H-460360185-black-OUTFIT.jpg'
    },
    {
      name:"PUMA",
      quantity:208,
      price:1800,
      size:8,
      colour:"White",
      img:'https://images.jdmagicbox.com/quickquotes/images_main/puma-progression-idp-running-shoes-for-men-size-10-white-164372323-lt3c5.jpg'
    }
  ]
  
  return (
    <div>
      <div><h1>Products</h1></div>
      <div className='productList'>
      <div className='itemContainer'>
        <div><p>IMAGE</p></div>
        <div><p>PRODUCT NAME</p></div>
        <div><p>COLOUR</p></div>
        <div><p>SIZE</p></div>
        <div><p>QUANTITY</p></div>
        <div><p>PRICE</p></div>
        <div><p>Action</p></div>
    </div>
        {products.map((item, index)=>{
          return (<Item key={index} name={item.name} quantity={item.quantity} price={item.price} size={item.size} colour={item.colour} img={item.img}/>);
        })}
      </div>
    </div>
  )
}

export default Products