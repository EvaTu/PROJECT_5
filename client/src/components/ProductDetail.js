import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

function ProductDetail({handelShoppingSub}){
    const [clickedPro, setClickedPro] = useState({})
    const { image, name, price, color, description, inventory} = clickedPro
    const id = useParams().id
    const optionNum = Array.from({length:inventory},(_,i)=>i)
    const [selectNum, setSelectedNum] = useState(0)

     useEffect(()=>{
        fetch(`/api/products/${id}`)
        .then(resp => resp.json())
        .then(data => setClickedPro(data))
     },[id])
    
   
    
    return(
        <div className="product-detail">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h4>$ {price}</h4>
            <h5>{color}</h5>
            <h5>{description}</h5>
            <form onSubmit={e => handelShoppingSub(e,selectNum,clickedPro)}>
                <label>Select Quantity: </label>
                <select style={{margin:"20px"}} onChange={e=>setSelectedNum(e.target.value)}>
                    {optionNum.map(num => <option key={id} value={num}>{num}</option>)}
                </select>
                <input type="submit" value="Add to Shopping Cart"/>
            </form>
        </div>
    )

}

export default ProductDetail