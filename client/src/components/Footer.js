import React from 'react'
import { Link } from 'react-router-dom'

function Footer({currentUser}){
    // console.log("footer",currentUser)
    return(
        <div className="footer-container">
                        
            <div class='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to="/AboutUs">About WWW</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Latest News</h2>
                    <Link to="/News">WWW News</Link>
                </div>
            </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                <div class='footer-link-items'>
                    {currentUser.admin?(<Link to="/AddProduct"><h2>Add New Product</h2></Link>):(<p></p>)}
                </div>
        </div>
        <section class='social-media'>
        <div class='social-media-wrap'>
          
          <small class='website-rights'>WWW © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
           
        </div>
    )

}

export default Footer