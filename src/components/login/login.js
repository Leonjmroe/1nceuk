import './login.css';
import { useState } from 'react';
import axios from "axios";

export default function Login() {

  const [token, setToken] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const userInput = event => { setUsername(event.target.value) }
  const passInput = event => { setPassword(event.target.value) }

  const login = () => {
    const userData = {
      username: username,
      password: password
    }
    axios.post('/api/v1/token/login/', userData).then((response) => {
      const data = response.data['auth_token']
      alert('Login Success! - Your login token: ' + data)
      setToken(data)
    }).catch(error => {
      alert('Incorrect Details')
    })
  }

return (
  <div className="adminCont">
    <div className="usernameCont">
      <div className="usernameTitle">Username:</div>
      <input className="username" type="text" onChange={userInput}/>
    </div>
    <div className="passwordCont">
      <div className="passwordTitle">Password:</div>
      <input className="password" type="password" onChange={passInput}/>
    </div>  
    <div className="login" onClick={login}>Login</div>
  </div>
)}
