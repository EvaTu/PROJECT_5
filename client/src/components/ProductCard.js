import React, {useState} from 'react';
import { Link } from 'react-router-dom'

function ProductCard({product}){
 
    const { image, name, price, id, description} = product
    
    return(
        <div id="product-card">
        <Link to={`/ProductList/${id}`}>
            <img src={image} alt={name} id={id}/>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
        </Link>
        </div>
    )

}

export default ProductCard