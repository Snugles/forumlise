import React, {useState} from 'react';
import service from '../service';
import logo from './images/forumliseLogo.png';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions/loginActions';
import {useHistory} from "react-router-dom";
import './styles/Login.css';
import LoginDataTypes from '../interfaces/LoginDataTypes';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loginMode, setLoginMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e:any) => {
    if (e.target.name==='password'){
      setPassword(e.target.value);
    } else if (e.target.name==='username'){
      setUsername(e.target.value);
    } else {
      setPasswordConfirm(e.target.value);
    }
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (loginMode) {

      if (!password.length||!username.length) return setErrorMessage('Please fill all fields');

      service.login({username:username, password:password})
        .then((res:LoginDataTypes)=>{
          if (res) {
            dispatch(login(res));
            history.push('/');
          } else {
            setErrorMessage('Login unsuccessful please check username/password');
          }
        })
        .catch((e:string) => console.error(e));
    } else {

      if (password!==passwordConfirm) return setErrorMessage('Passwords do not match');
      if (!password.length||!username.length) return setErrorMessage('Please fill all fields');
      
      service.register({username:username, password:password})
      .then((res:LoginDataTypes)=>{
        if (res) {
          setLoginMode(true);
          setErrorMessage('Account registered please login');
        }
      })
      .catch((e:string) => console.error(e));
    }
  }

  return (
    <div>
      <img src={logo} alt="Forumlise Logo"/>
      {loginMode?
        <form onSubmit = {handleSubmit} className="loginForm">
          <h1>Login</h1>
          <p>{errorMessage}</p>
          <label className="loginLabel">Username:</label>
          <input type="text" name="username" value={username} onChange={handleChange} className="loginInput"/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleChange} className="loginInput"/>
          <input type="submit" value="Submit" className="loginButton"/>
          <button onClick={()=>setLoginMode(!loginMode)}>I dont have an account, register me</button>
        </form>:
        <form onSubmit = {handleSubmit} className="loginForm">
          <h1>Register New Account</h1>
          <p>{errorMessage}</p>
          <label className="loginLabel">Username:</label>
          <input type="text" name="username" value={username} onChange={handleChange} className="loginInput"/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleChange} className="loginInput"/>
          <label>Confirm Password:</label>
          <input type="password" name="passwordConfirm" value={passwordConfirm} onChange={handleChange} className="loginInput"/>
          <input type="submit" value="Submit" className="loginButton"/>
          <button onClick={()=>setLoginMode(!loginMode)}>I already have an account, let me log in</button>
        </form>
      }
    </div>
  );
}

export default Login;