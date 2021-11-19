import React from 'react'


function MyAccount({currentUser, handleLogout}){
    

    

    
    return(
        <div className="myAccount-container">
            {currentUser.length === 0? 
            (<div className="myAccount-no-log">
                <h1>Please Login to View Order History</h1>
            </div>)
            :
            (<div className="user-container">
            <button style={{padding:"5px 30px 5px 30px", "margin-bottom":"30px"}} onClick={handleLogout}>Logout</button>
           
            <h2>Order Detail:</h2>
            <div className="user-inner-container">
                {currentUser.orders.map(item => 
                    (  
                    <ul className="user-inner-info">
                        <h3 style={{"margin-bottom": "10px"}}>{item.product.name}</h3>
                        <p>${item.product.price}</p>
                        <p style={{"margin-bottom": "45px"}}>Order Qty: {item.select}</p>
                    </ul>
                    )
                )}
            </div>
            </div>)}
            
        </div>
    )


}

export default MyAccount

