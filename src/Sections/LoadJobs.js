import React from 'react';
import { StoreContext } from '../utils/store';
import { getToken, host } from '../utils/globals';
import axios from 'axios';
import JobCard from '../Components/JobCard';
import '../Pages/CSS/Flex.css'
import '../Pages/CSS/Buttons.css'

export default function LoadJobs() {
  const jobContext = React.useContext(StoreContext);
  const [jobs, setJobs] = jobContext.jobs;
  const [authenticated, setAuthenticated] = React.useState(getToken())
  const [currentPage, setCurrentPage] = React.useState(1);
  const [prevPage, setPrevPage] = React.useState(null);
  const [nextPage, setNextPage] = React.useState(null);
  const [search, setSearch] = React.useState('');

  const searchForJobs = (e) => {
    e.preventDefault();
    console.log('submitting search - search is equal to' + e.target.search.value);
    setSearch('&q=' + e.target.search.value);
    setCurrentPage(1);
    setPrevPage(null);
    setNextPage(null);
    getJobs();
  }
  
  const getJobs = async () => {
    // console.log('token=' + authenticated)
    // headersToSend = { headers: {},}
    if (authenticated != null) {
      // console.log(authenticated)
      // console.log('search=' + search);
      console.log('search=' + search);
      await axios
      .get(host + '/api/job/list?page=' + currentPage + search, {
        headers: {
          'Authorization': `Token ${getToken()}`
        },
      })//this is an easter egg -> sophie sucks
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
        //console.log(typeof(res.data.previous))
        setPrevPage(res.data.previous)
        setNextPage(res.data.next)
        // console.log(jobs);
      })
      .catch((err) => {
        console.log('we bugged bois')
        alert(err.message);
      })
    }
  }

  const goNext = () => {
    setCurrentPage(currentPage + 1);
  }

  const goPrev = () => {
    setCurrentPage(currentPage - 1);
  }

  const backToAllJobs = () => {
    setSearch('');
    setCurrentPage(1);
    setPrevPage(null);
    setNextPage(null);
    getJobs();
  }

  React.useEffect(() => {
    // console.log('yeet')
    getJobs();
    // console.log(jobs);
  }, [currentPage]);

  React.useEffect(() => {
    getJobs();
  }, [search])

  return (
    <div className="flexColumn">
      <form onSubmit={searchForJobs}>
        <input type="text" className="input" name="search" placeholder="Search for jobs" />
        <button type="submit" className="greenBoi homeButton">
          <p className="thiccText">SEARCH</p>
        </button>
        <div className="whiteBoi homeButton" onClick={backToAllJobs}>
          <p className="thiccText">SEARCH ALL JOBS</p>
        </div>
      </form> 
      {(typeof jobs.results === "undefined") ? null :
      jobs.results.map(job => (
      <JobCard key={job.pk} job={job} />))}
      <div className="flexCentreRow">
        {prevPage !== null ?
        <div className="greenBoi homeButton" onClick={goPrev}>
        <p className="thiccText">←</p>
        </div> : null}
        {nextPage !== null ?
        <div className="whiteBoi homeButton" onClick={goNext}>
          <p className="thiccText">→</p>
        </div> : null}
      </div>
    </div>
  );
}