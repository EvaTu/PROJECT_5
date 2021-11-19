import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom'


function AddProduct({setNewProduct, newProductInput, handleProductSub, currentUser}){
    const { name, cat, image, price, color, inventory, description} = newProductInput


    

    return(
        <div>
            <form id="add-product-form" style={{"margin-bottom":"100px","margin-top":"150px"}} onSubmit={handleProductSub}>
                <label style={{margin:"5px"}}>Name: </label>
                <input type="text" placeHolder="Enter Product Name" name="name" value={name} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

                <label style={{margin:"5px"}}>Category: </label>
                <input type="text" placeHolder="Enter Product Category" name="cat" value={cat} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

                <label style={{margin:"5px"}}>Image: </label>
                <input type="text" placeHolder="Enter Product Image" name="image" value={image} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

                <label style={{margin:"5px"}}>Price: </label>
                <input type="text" placeHolder="Enter Product Price" name="price" value={price} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

                <label style={{margin:"5px"}}>Color: </label>
                <input type="text" placeHolder="Enter Product Color" name="color" value={color} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

                <label style={{margin:"5px"}}>Inventory: </label>
                <input type="text" placeHolder="Enter Product Inventory" name="inventory" value={inventory} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

                <label style={{margin:"5px"}}>Description: </label>
                <input type="text" placeHolder="Enter Product Description" name="description" value={description} onChange={e => setNewProduct({...newProductInput, [e.target.name]: e.target.value})}/>

                <input style={{margin:"30px"}} type="submit" value="Submit New Product"></input>
            </form>

            <div style={{"margin-bottom":"100px"}}>
                <p>Product Name: {name}</p>
                <p>Product Category: {cat}</p>
                <p>Product Image: </p>
                <img src={image} alt={name} />
                <p>Product Price: {price}</p>
                <p>Product Color: {color}</p>
                <p>Product Inventory: {inventory}</p>
                <p>Product Description: {description}</p>
            </div>
        </div>
    )

}
export default AddProduct