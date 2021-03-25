import React from 'react';
import NavBar from '../Components/NavBar.js'
import { useHistory } from 'react-router-dom';
import './CSS/Center.css';
import './CSS/Blue.css';
import './CSS/Flex.css';
import './CSS/Buttons.css'
import './CSS/Fonts.css'
import '../Components/CSS/Text.css'

export default function Home() {
  const history = useHistory();

  const register = () => {
    history.push('/register');
  }

  const login = () => {
    history.push('/login');
  }

  return (
    <div>
      <NavBar />
      <div className="centerInPage">
        <div className="choncc">
          <div className="wrap blueBack">
            <h1 className="blueBack biryani">pepper your profession</h1>
            <h2 className="centerTextBoi biryani">peppery aims to match, set-up and prepare your skills for your profession.</h2>
            <div className="flexCentreRow">
              <div className="greenBoi homeButton" onClick={login}>
                <p className="thiccText">LOG IN</p>
              </div>
              <div className="whiteBoi homeButton" onClick={register}>
                <p className="thiccText">SIGN UP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}