import React from 'react'
import { Link } from 'react-router-dom'

function Footer({currentUser}){
    // console.log("footer",currentUser)
    return(
        <div id="footer">
            
            <Link to="/AboutUs"style={{margin:"20px"}}>About Us</Link>
            <p> 2021 WWW COPYRIGHT </p>
            <Link to="/News"style={{margin:"20px"}}>Latest News</Link>
            {currentUser.admin?(<Link to="/AddProduct"style={{margin:"20px"}}>Add Product</Link>):(<p></p>)}
            
           
        </div>
    )

}

export default Footer