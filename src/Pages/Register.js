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

export default function Register() {
  const history = useHistory();
  const login = () => {
    history.push('/login');
  }

  const submitRegister = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
      password2: e.target.confirmPassword.value,
      skills: (e.target.skills.value).split(','),
    }

    console.log(formData);
    await axios
      .post(host + '/api/account/register', querystring.stringify(formData))
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
            <h1 className="blueBack biryani title">REGISTER</h1>
            <h2 className="centerTextBoi biryani header2">peppery aims to match, set-up and prepare your skills for your profession.</h2>
                <form onSubmit={submitRegister}>
                  <div className="flexColumn">
                  <input type="text" className="input" placeholder="email" required name="email"/>
                  <input type="text" className="input" placeholder="username" required name="username"/>
                  <input type="password" className="input" placeholder="password" name="password"/>
                  <input type="password" className="input" placeholder="confirm password" name="confirmPassword"/>
                  <input type="text" className="input" placeholder="comma separated skills e.g. python,c++,django" name="skills"/>
                  <button type="submit" className="greenBoi homeButton">
                    <p className="thiccText">SIGN UP</p>
                  </button>
                  <div className="whiteBoi homeButton" onClick={login}>
                    <p className="thiccText">Already have an account? LOG IN</p>
                  </div>
                  </div>
                </form>
          </div>
        </div>
      </div>
    </div>
  );
}