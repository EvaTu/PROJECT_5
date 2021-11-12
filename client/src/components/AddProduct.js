import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom'


function AddProduct({setNewProduct, newProductInput, handleProductSub}){
    const { name, cat, image, price, color, inventory, description} = newProductInput


    

    return(
        <form id="add-product-form" style={{margin:"100px"}} onSubmit={handleProductSub}>
            <label>Name: </label>
            <input type="text" placeHolder="Enter Product Name" name="name" value={name} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

            <label>Category: </label>
            <input type="text" placeHolder="Enter Product Category" name="cat" value={cat} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

            <label>Image: </label>
            <input type="text" placeHolder="Enter Product Image" name="image" value={image} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

            <label>Price: </label>
            <input type="text" placeHolder="Enter Product Price" name="price" value={price} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

            <label>Color: </label>
            <input type="text" placeHolder="Enter Product Color" name="color" value={color} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

            <label>Inventory: </label>
            <input type="text" placeHolder="Enter Product Inventory" name="inventory" value={inventory} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

            <label>Description: </label>
            <input type="text" placeHolder="Enter Product Description" name="description" value={description} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

            <input type="submit" value="Submit New Product"></input>
        </form>
    )

}
export default AddProduct