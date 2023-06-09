import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, quantity, ratings} = props.product
    const handleAddToCart = props.handleAddToCart
    
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='p-info'>
           <h6>{name}</h6>
           <p>Price: {price}</p>
           <p>Manufacture: {seller}</p>
           <p>Rating: {ratings}</p>
           </div>
<button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to cart</button>

        </div>
    );
};

export default Product;