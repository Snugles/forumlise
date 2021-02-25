import React from 'react';
import './styles/navbar.css';
import {RootState} from '../redux/reducers';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../redux/actions/loginActions';
import {useDispatch} from 'react-redux';
import LoginDataTypes from '../interfaces/LoginDataTypes';

const Navbar : React.FC = () => {
  const loginData:LoginDataTypes = useSelector((state:RootState) => state.login);
  const dispatch = useDispatch();

  const logoutFunc = () => {
    dispatch(logout());
  }
  return (
    <div className='navbarContainer'>
      {loginData?
        <button onClick={logoutFunc}>Logout</button>:
        <Link to={`/login`}>
          <button>Login/Register</button>
        </Link>}
    </div>
  );
}

export default Navbar;