import React from 'react';
import NavBar from '../Components/NavBar.js'
import { StoreContext } from '../utils/store';
import { getToken, getUsername } from '../utils/globals';
import './CSS/Center.css';
import './CSS/Blue.css';
import './CSS/Flex.css';
import './CSS/Buttons.css'
import './CSS/Input.css'
import './CSS/Fonts.css'
// import JobCard from '../Components/JobCard';
import LoadJobs from '../Sections/LoadJobs';

export default function JobPage() {
  const jobContext = React.useContext(StoreContext);
  const [jobs, setJobs] = jobContext.jobs;
  const [authenticated, setAuthenticated] = React.useState(getToken())

  return (
    <div>
      <NavBar />
      <div className="centerInPage">
        <div className="choncc">
          <div className="wrap blueBack">
            <h1 className="blueBack biryani">Hey, {getUsername()} {':)'}</h1>
            <h2 className="biryani">Start matching your skills to your profession!</h2>
            <LoadJobs />
          </div>
        </div>
      </div>
    </div>
  );
}