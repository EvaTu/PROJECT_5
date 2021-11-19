import React from 'react';
import ProductCard from './ProductCard'

function ProductList({products}){
    // console.log(products)
    
    const productCard = products.map(product =>  
         <ProductCard key={product.id} product={product}/>)


    return(
        <div className="products">
            
            <ul className="product-cards">
                {productCard}
            </ul>
               
        </div>
    )

}

export default ProductList