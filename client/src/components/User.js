import React from 'react'


function User({confirmOrder}){
    console.log("my account", confirmOrder)
    let today = new Date().toString().slice(0, 15)
    console.log(today)

    let productTotal = confirmOrder.reduce((accumulator,element) => (accumulator+= element.order*element.price),0)
    let taxFee = parseFloat(productTotal*0.08875).toFixed(2)
    let deliveryFee =  productTotal === 0.0 || productTotal>75? 0.0: 20.0
    let allTotal = (productTotal+parseFloat(taxFee)+deliveryFee).toFixed(2)

    return(
        <div>
            <h1>Please Log In to View Order History</h1>
            <p>Order Date: {today}</p>
            <p>Order Detail:</p>
            <div>
                {confirmOrder.map(item => 
                    (  
                    <ul>
                        <h4>{item.name}</h4>
                        <h5>${item.price}</h5>
                        <p>Order Qty: {item.order}</p>
                    </ul>
                    )
                )}
                <p>Order Total Amount: {allTotal}</p>
            </div>
        </div>
    )


}

export default User






// import React, {useEffect, useState} from 'react'
// import {useParams} from 'react-router-dom'

// function User({currentUser,setCurrentUser}){
    

//     let orderDate = []
//     const id = useParams().id
//     // const id = 9
//     orderDate.push(currentUser.orders.map(item => item.product.created_at))
    
//     let productTotal =currentUser.orders.reduce((accumulator,element) => (accumulator+= element.select*element.product.price),0)
//     let taxFee = parseFloat(productTotal*0.08875).toFixed(2)
//     let deliveryFee =  productTotal === 0.0 || productTotal>75? 0.0: 20.0
//     let allTotal = (productTotal+parseFloat(taxFee)+deliveryFee).toFixed(2)

//     useEffect(()=>{
//     fetch(`/users/${id}`)
//     .then(resp => resp.json())
//     .then(data => 
//         setCurrentUser(data)
//         )
// },[])
    
    
//     return(
//         <div>
//             <h1>Please Log In to View Order History</h1>
//             <p>Order Date: {orderDate.flat()[0].slice(0,10)}</p>
//             <p>Order Detail:</p>
//             <div>
//                 {currentUser.orders.map(item => 
//                     (  
//                     <ul>
//                         <h4>{item.product.name}</h4>
//                         <h5>${item.product.price}</h5>
//                         <p>Order Qty: {item.select}</p>
//                     </ul>
//                     )
//                 )}
//                 <p>Order Total Amount: {allTotal}</p>
//             </div>
            
//         </div>
//     )


// }

// export default User

// console.log(currentUser.orders.map(data => console.log(data.product.name)))

// console.log("my account", confirmOrder)
//     let today = new Date().toString().slice(0, 15)


// {confirmOrder.map(item => 
//     (  
//     <ul>
//         <h4>{item.name}</h4>
//         <h5>${item.price}</h5>
//         <p>Order Qty: {item.order}</p>
//     </ul>
//     )
// )}