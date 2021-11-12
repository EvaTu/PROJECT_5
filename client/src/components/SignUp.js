import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom'

function SignUp({setCurrentUser}){
    const history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    function handelSubmit(event) {
        event.preventDefault()
        fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              email,
              password,
              password_confirmation: passwordConfirmation
            })
          })
          .then(res => {
            if (res.ok) {
              res.json().then(user => {
                setCurrentUser(user)
                history.push('/orders')
              })
            } else {
              res.json().then(errors => {
                console.error(errors)
              })
            }
          })

    }

    return(
        <>
        <h1>Sign Up Form Here</h1>
        <form onSubmit={handelSubmit}>
            <label>First Name: </label>
            <input type="text" placeHolder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
            <label>Last Name: </label>
            <input type="text" placeHolder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
            <label>Email: </label>
            <input type="text" placeHolder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
            <label>Password: </label>
            <input type="password" placeHolder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <label>Password Confirmation: </label>
            <input type="password" placeHolder="Password Confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}></input>
            <input type="submit" value="Submit"/>
        </form>
        <h3>Thanks For Joining Us</h3>
        </>
    )
}

export default SignUp