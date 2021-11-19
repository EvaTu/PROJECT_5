import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard'

function ProductList({products}){
    // console.log(products)
    const [newProduct, setNewProduct] = useState([])

    useEffect(()=>{
        fetch(`/api/products`)
        .then(resp => resp.json())
        .then(data => setNewProduct(data))
     },[])


    const productCard = newProduct.map(product =>  
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