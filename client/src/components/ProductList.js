import React from 'react';
import ProductCard from './ProductCard'

function ProductList({products}){
    // console.log(products)
    
    const productCard = products.map(product =>  
         <ProductCard key={product.id} product={product}/>)


    return(
        <div>
            <h1>Product List Here</h1>
                <ul id="product-list-ul">
                    {productCard}
                </ul>
        </div>
    )

}

export default ProductList