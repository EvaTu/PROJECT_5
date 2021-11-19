import React, { useState } from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom'

function LogIn({setCurrentUser}){
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleSubmit(event){
        event.preventDefault()
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password})
        })
        .then(res => {
            if (res.ok) {
              res.json().then(user => {
                setCurrentUser(user)
                history.push('/MyAccount')
              })
            } else {
              res.json().then(errors => {
                console.error(errors)
              })
            }
          })
    }


    return(
        <div className="login">
          
            <div className="loginFormDiv">
              
              <form id="loginForm" onSubmit={handleSubmit}>
                  <h1 style={{margin: "20px"}}>Member Login</h1>
                  <label>Email: </label>
                  <input className="formInput" type="text" placeHolder="Email" value={email} onChange={ e => setEmail(e.target.value)}></input>
                  <label>Password: </label>
                  <input className="formInput" type="password" placeHolder="Password" value={password} onChange={ e => setPassword(e.target.value)}></input>
                  <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
    )
}

export default LogIn