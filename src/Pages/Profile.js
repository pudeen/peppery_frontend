import React from 'react';
import NavBar from '../Components/NavBar.js'
import { useHistory } from 'react-router-dom';
import { host, getSkills, getToken } from '../utils/globals.js'
import axios from 'axios';
import './CSS/Center.css';
import './CSS/Blue.css';
import './CSS/Flex.css';
import './CSS/Buttons.css'
import './CSS/Input.css'
import '../Components/CSS/Text.css'
import './CSS/Fonts.css'

var querystring = require('querystring');

export default function Profile() {
  const history = useHistory();

  const [currSkills, setCurrSkills] = React.useState([]);

  React.useEffect(() => {
    let currSkills = getSkills();

    setCurrSkills(currSkills);
    // console.log(`matching=${matching}`);
    // console.log(`required=${required}`);
  }, []);

  const submitChanges = async (e) => {
    e.preventDefault();
    const formData = {
      skills: (e.target.skills.value).split(','),
    }

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    console.log(formData);
    await axios
      .put(host + '/api/account/properties/update', querystring.stringify(formData), {
        headers: {
            'Authorization': `Token ${getToken()}`
          },
      })
      .then((res) => {
        console.log('HARRO')
        console.log(res.data);
        if (res.data.response === 'Account update success') {
          localStorage.setItem('skills', res.data.skills);
          setCurrSkills(res.data.skills)
        } else {
          alert('Invalid Credentials')
        }
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
            <h1 className="blueBack biryani title">EDIT YOUR SKILLS</h1>
            <h2 className="centerTextBoi biryani header2">Current skills:</h2>
            <ul className="biryani">
                {currSkills.map((m, index) => (
                    <li key={index}>{m}</li>
                ))}
                </ul>
                <form onSubmit={submitChanges}>
                  <div className="flexColumn">
                  {/*<input type="password" className="input" placeholder="password" name="password"/>
                  <input type="password" className="input" placeholder="confirm password" name="confirmPassword"/>*/}
                  <input type="text" className="input" placeholder="comma separated skills e.g. python,c++,django" name="skills"/>
                  <button type="submit" className="greenBoi homeButton">
                    <p className="thiccText">MAKE CHANGES</p>
                  </button>
                  </div>
                </form>
          </div>
        </div>
      </div>
    </div>
  );
}