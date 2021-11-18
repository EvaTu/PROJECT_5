import React, {useState} from 'react';
import { Link } from 'react-router-dom'

function ProductCard({product}){
 
    const { image, name, price, id, description} = product
    
    return(
        <>
        <li className="product-card">
            <Link className='product-card-link' to={`/ProductList/${id}`}>
                <figure className='product-item-pic-wrap'>
                    <img className= 'product-item-img' src={image} alt={name} id={id}/>
                </figure>
                <div className='product-item-info'>
                    <h5 className='product-item-text'>{name}</h5>
                    <h5 className='product-item-text'>$ {price}</h5>
                </div>
            </Link>
        </li>
        </>
    )

}

export default ProductCard