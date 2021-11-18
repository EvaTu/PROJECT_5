import React from 'react';
import ProductCard from './ProductCard'

function ProductList({products}){
    // console.log(products)
    
    const productCard = products.map(product =>  
         <ProductCard key={product.id} product={product}/>)


    return(
        <div className="products">
            <div className="product-container">
                <div className="product-wrapper">
                    <ul className="product-list-ul">
                        {productCard}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default ProductList