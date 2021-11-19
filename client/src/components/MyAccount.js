import React, {useState, useEffect} from 'react'


function MyAccount({currentUser, handleLogout}){
    const [userOrder, setUserOrder] = useState([])

    useEffect(()=>{
        fetch(`/api/me`)
        .then(resp => resp.json())
        .then(data => setUserOrder(data.orders))
     },[])
    
    
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
                {userOrder.map(item => 
                    (  
                    <ul className="user-inner-info">
                        <h3 style={{"margin-bottom": "10px"}}>{item.product.name}</h3>
                        <p style={{"margin-bottom": "8px"}}>${item.product.price}</p>
                        <p style={{"margin-bottom": "8px"}}>Order Qty: {item.select}</p>
                        <p style={{"margin-bottom": "20px"}}>Order Date: {item.created_at.slice(0,10)}</p>
                    </ul>
                    )
                )}
            </div>
            </div>)}
            
        </div>
    )


}

export default MyAccount

