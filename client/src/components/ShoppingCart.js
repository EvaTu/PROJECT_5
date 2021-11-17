import React, {useState} from 'react';

function ShoppingCart({detailForm,onDelete,setDetailForm,currentUser}){
    const [confirmOrder, setConfirmOrder] = useState([])
    const [emptyCart, setEmptyCart] = useState(detailForm.length === 0)

    
    let productTotal = detailForm.reduce((accumulator,element) => (accumulator+= element.select*element.price),0)
    
    let taxFee = parseFloat(productTotal*0.08875).toFixed(2)
    let deliveryFee =  productTotal === 0.0 || productTotal>75? 0.0: 20.0
    let allTotal = (productTotal+parseFloat(taxFee)+deliveryFee).toFixed(2)
    
    
    function clickConfirm(){
        console.log(detailForm)
        detailForm.map(data => { 
            return fetch("/api/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({product_id: data.id, select: parseInt(data.select), user_id: currentUser.id})
            })
        .then(res => res.json())
        .then(() => {
            setEmptyCart(true)
            setDetailForm([])
        })
      })
     }



    return(
        <div>
        <h1>Shopping List is here</h1>
        { emptyCart?
            (
                <h1>You Have Nothing In Your Cart!!! </h1>
            ):(
            <div>
                {detailForm.map(item => 
                    (  
                    <ul>
                        <h4>{item.name}</h4>
                        <h5>${item.price}</h5>
                        <img src={item.image} style={{width:"100px", height:"100px"}}/>
                        <p>{item.color}</p>
                        <p>Order Qty: {item.select}</p>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </ul>
                    )
                )}
                <h3>Product Total:  ${productTotal}</h3>
                <h3>Tax: {taxFee}</h3>
                <h3>Delivery Fee: {deliveryFee}</h3>
                <h1>Total: {allTotal}</h1>
                <button style={{margin:"15px"}} onClick={() => clickConfirm()}>Confirm Order and Check Out</button>
            </div>
        )}
        </div>
        )   

    }

export default ShoppingCart