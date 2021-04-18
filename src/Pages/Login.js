import React from 'react';
import NavBar from '../Components/NavBar.js'
import { useHistory } from 'react-router-dom';
import { host } from '../utils/globals.js'
import axios from 'axios';
import './CSS/Center.css';
import './CSS/Blue.css';
import './CSS/Flex.css';
import './CSS/Buttons.css'
import './CSS/Input.css'
import '../Components/CSS/Text.css'
import './CSS/Fonts.css'

var querystring = require('querystring');

export default function Login() {
  const history = useHistory();
  const register = () => {
    history.push('/register');
  }

  const submitLogin = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.email.value,
      password: e.target.password.value,
    }

    console.log(formData);
    await axios
      .post(host + '/api/account/login', querystring.stringify(formData))
      .then((res) => {
        console.log('HARRO')
        console.log(res.data);
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('skills', res.data.skills);
        } else {
          alert('Invalid Credentials')
        }
        history.push('/jobs')
      })
      .catch((err) => {
        console.log('wadafak')
        alert(err.message);
      })
  }

  return (
    <div>
      <NavBar />
      <div className="centerInPage">
        <div className="choncc">
          <div className="wrap blueBack">
            <h1 className="blueBack biryani title">LOGIN</h1>
            <h2 className="centerTextBoi biryani header2">peppery aims to match, set-up and prepare your skills for your profession.</h2>
                <form onSubmit={submitLogin}>
                  <div className="flexColumn">
                  <input type="text" className="input" placeholder="email" required name="email"/>
                  <input type="password" className="input" placeholder="password" name="password"/>
                  <button type="submit" className="greenBoi homeButton">
                  <p className="thiccText">LOG IN</p>
                  </button>
                  <div className="whiteBoi homeButton" onClick={register}>
                    <p className="thiccText">Don't have an account? SIGN UP</p>
                  </div>
                  </div>
                </form>
          </div>
        </div>
      </div>
    </div>
  );
}