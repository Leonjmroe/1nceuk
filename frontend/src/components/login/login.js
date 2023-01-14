import css from './login.module.css';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [token, setToken] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const userInput = event => { 
    setUsername(event.target.value)
  }
  const passInput = event => { 
    setPassword(event.target.value)
  }

  const login = () => {
    const userData = {
      username: username,
      password: password
    }
    axios.post('/api/v1/token/login/', userData).then((response) => {
      const data = response.data['auth_token']
      setToken(data)
      navigate('/store_admin', {state:{token:token}})
    }).catch(error => {
      alert('Incorrect Details')
      setUsername('')
      setPassword('')
    })
  }

return (
  <div className={css.admin_container}>
    <div className={css.login_container}>
      <div className={css.usernameCont}>
        <div className={css.usernameTitle}>Username:</div>
        <input className={css.username} type="text" value={username} onChange={userInput}/>
      </div>
      <div className={css.passwordCont}>
        <div className={css.passwordTitle}>Password:</div>
        <input className={css.password} type="password" value={password} onChange={passInput}/>
      </div>  
      <div className={css.login} onClick={login}>Login</div>
    </div>
  </div>
)}
