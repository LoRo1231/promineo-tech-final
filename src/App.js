import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import JobDisplay from './components/job-display';
import { Container } from 'react-bootstrap';
import AddJob from './components/add-job-form';
import { useState } from 'react';
import { useEffect } from 'react';





function App() {

  const [jobList, setJobList] = useState([])

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetch("https://64bc59d87b33a35a44472ff1.mockapi.io/jobs")
      const data = await response.json()
      setJobList(data)
    }
    asyncFunction()
  })

  const submitJob = (newJobData) => {
    setJobList([...jobList, newJobData])
  }

  return (
    <div>
      <Header/>
      <Container>
        <Routes>
          <Route path="/addjob" element={<AddJob submitJob={submitJob}/>}/>
          <Route path="/" element={<JobDisplay jobList={jobList}/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */