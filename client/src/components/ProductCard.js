import React, {useState} from 'react';
import { Link } from 'react-router-dom'

function ProductCard({product}){
 
    const { image, name, price, id, description} = product
    
    return(
        <>
            <Link className='product-card-link' to={`/ProductList/${id}`}>
                <div className='product-item-info'>
                    <img className= 'product-item-img' src={image} alt={name} id={id}/>
                    <h5 className='product-item-text'>{name}</h5>
                    <h5 className='product-item-text'>$ {price}</h5>
                </div>
            </Link>
        </>
    )

}

export default ProductCard