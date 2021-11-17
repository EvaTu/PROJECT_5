import React from 'react'
import { Link } from 'react-router-dom'

function Header(){

    return(
        <div id="header">
            <Link exact to="/"><h1>Women Wear What</h1></Link>
            <Link to="/SignUp" style={{margin:"20px"}}>Sign Up</Link>
            <Link to="/LogIn"style={{margin:"20px"}}>Log In</Link>
            <Link to="/ShoppingCart"style={{margin:"20px"}}>Shopping Cart</Link>
            <Link to="/ProductList"style={{margin:"20px"}}>Products</Link>
            <Link to="/MyAccount"style={{margin:"20px"}}>My Account</Link>
           
        </div>
    )

}

export default Header