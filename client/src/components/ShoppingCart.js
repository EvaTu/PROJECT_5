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
            // setDetailForm([])
        })
      })
      setDetailForm([])
     }



    return(
        <div className="shopping-cart-container">
        <h1>Shopping Cart</h1>
        { emptyCart?
            (
                <h1 style={{"margin-top":"100px"}}>You Have Nothing In Your Cart!!! </h1>
            ):(
            <div className="shopping-cart-inner">
                {detailForm.map(item => 
                    (  
                    <ul className="cart-inner-info">
                        <h4 style={{"margin-top": "auto", "margin-bottom": "auto", "margin-left":"35px"}}>{item.name}</h4>
                        <h4 style={{"margin-top": "auto", "margin-bottom": "auto", "margin-left":"35px"}}>${item.price}</h4>
                        <img src={item.image} style={{width:"100px", height:"100px", margin:"35px"}}/>
                        <p style={{"margin-top": "auto", "margin-bottom": "auto", "margin-left":"35px"}}>{item.color}</p>
                        <p style={{"margin-top": "auto", "margin-bottom": "auto", "margin-left":"35px"}}>Order Qty: {item.select}</p>
                        <button style={{"margin-top": "auto", "margin-bottom": "auto", "margin-left":"100px", padding:"20px"}} onClick={() => onDelete(item.id)}>Delete</button>
                    </ul>
                    )
                )}
                <h3 style={{"margin-top": "30px"}}>Product Total:  ${productTotal.toFixed(2)}</h3>
                <h3>Tax: {taxFee}</h3>
                <h3>Delivery Fee: {deliveryFee}</h3>
                <h1>Total: {allTotal}</h1>
                <button style={{margin:"15px", padding: "10px 30px 10px 30px"}} onClick={() => clickConfirm()}>Confirm Order and Check Out</button>
            </div>
        )}
        </div>
        )   

    }

export default ShoppingCart