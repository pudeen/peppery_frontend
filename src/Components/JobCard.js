import React from 'react';
import { host, getSkills } from '../utils/globals.js'
import './CSS/JobCard.css';
import '../Pages/CSS/Fonts.css'

export default function JobCard({job}) {
  const [matchingSkills, setMatchingSkills] = React.useState([]);
  const [requiredSkills, setRequiredSkills] = React.useState([]);

  React.useEffect(() => {
    let jobSkills = job.skills;
    let currSkills = getSkills();
    
    const matching = jobSkills.filter(s => currSkills.includes(s));
    const required = jobSkills.filter(s => !currSkills.includes(s));

    setMatchingSkills(matching)
    setRequiredSkills(required)
    // console.log(`matching=${matching}`);
    // console.log(`required=${required}`);
  }, []);
  
  return (
    <div className="jobCard">
      <div className="jobCardFlexChild">
        <h1 className="biryani">{job.title}</h1>
        <h2 className="biryani">{job.username}</h2>
        <p className="biryani">{job.body}</p>
        <ul className="biryani">
          Matching skills:
          {matchingSkills.map((m, index) => (
            <li className="matchingSkills" key={index}>{m}</li>
          ))}
        </ul>
        <ul className="biryani">
          Required skills:
          {requiredSkills.map((m, index) => (
            <li className="requiredSkills" key={index}>{m}</li>
          ))}
        </ul>
      </div>
      <div className="jobCardFlexChild imgContainer">
        <img className="jobCardImage" src={host + job.image} />
      </div>
    </div>
  )
}