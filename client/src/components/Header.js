import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Header({currentUser}){
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
        
    window.addEventListener('resize', showButton);

    return(
        <div className="header">
            <div className="header-container">
                <Link exact to="/" className="header-logo"><h1>Women Wear What</h1></Link>           
                {currentUser.length === 0?(<p>Welcome to WWW</p>): (<p>Welcome {currentUser.first_name}</p>)}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'header-menu active' : 'header-menu'}>
                    <li className="header-item">
                        <Link to="/SignUp" className="header-links" onClick={closeMobileMenu}>Sign Up</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/LogIn" className="header-links" onClick={closeMobileMenu}>Log In</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/ShoppingCart" className="header-links" onClick={closeMobileMenu}>Shopping Cart</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/ProductList" className="header-links" onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/MyAccount" className="header-links" onClick={closeMobileMenu}>My Account</Link>
                    </li>
                </ul>
                
          </div>
        </div>
    )

}

export default Header