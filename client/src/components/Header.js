import React from 'react'
import { Link } from 'react-router-dom'

function Header({currentUser}){

    return(
        <div id="header">
            
            <Link exact to="/"><h1>Women Wear What</h1></Link>
            <Link to="/SignUp" style={{margin:"20px"}}>Sign Up</Link>
            <Link to="/LogIn"style={{margin:"20px"}}>Log In</Link>
            <Link to="/ShoppingCart"style={{margin:"20px"}}>Shopping Cart</Link>
            <Link to="/ProductList"style={{margin:"20px"}}>Products</Link>
            <Link to="/MyAccount"style={{margin:"20px"}}>My Account</Link>
            {currentUser.length === 0?(<p>Welcome to WWW</p>): (<p>Welcome {currentUser.first_name}</p>)}
           
        </div>
    )

}

export default Header