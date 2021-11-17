import React from 'react'


function MyAccount({currentUser, handleLogout}){
    

    function handleOrder(){
        let productTotal =currentUser.orders.reduce((accumulator,element) => (accumulator+= element.select*element.product.price),0)
        let taxFee = parseFloat(productTotal*0.08875).toFixed(2)
        let deliveryFee =  productTotal === 0.0 || productTotal>75? 0.0: 20.0
        let allTotal = (productTotal+parseFloat(taxFee)+deliveryFee).toFixed(2)
        return allTotal
    }

    
    return(
        <div>
            {currentUser.length === 0? 
            (<h1>Please Login to View Order History</h1>)
            :
            (<div>
            <button onClick={handleLogout}>Logout</button>
           
            <p>Order Detail:</p>
            <div>
                {currentUser.orders.map(item => 
                    (  
                    <ul>
                        <h4>{item.product.name}</h4>
                        <h5>${item.product.price}</h5>
                        <p>Order Date: {item.product.created_at.slice(0,10)}</p>
                        <p>Order Qty: {item.select}</p>
                    </ul>
                    )
                )}
                <p>Order Total Amount: {handleOrder}</p>
            </div>
            </div>)}
            
        </div>
    )


}

export default MyAccount

