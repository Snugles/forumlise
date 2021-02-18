import React, {useState} from 'react';
import service from '../service';
import logo from './images/forumliseLogo.png';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions/loginActions';
import {useHistory} from "react-router-dom";
import './styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e:any) => {
    if (e.target.name==='password'){
      setPassword(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    service.login({username:username, password:password})
      .then((res:any)=>{
        if (res) {
          dispatch(login(res));
          history.push('/');
        }
      })
      .catch((e:string) => console.error(e));
  }

  return (
    <div>
      <img src={logo} alt="Forumlise Logo"/>
      <form onSubmit = {handleSubmit} className="loginForm">
        <label className="loginLabel">Username:</label>
        <input type="text" name="username" value={username} onChange={handleChange} className="loginInput"/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handleChange} className="loginInput"/>
        <input type="submit" value="Submit" className="loginButton"/>
      </form>
    </div>
  );
}

export default Login;