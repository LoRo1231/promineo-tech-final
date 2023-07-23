import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import JobDisplay from './components/job-display';
import { Container } from 'react-bootstrap';
import AddJob from './components/add-job-form';
import { useState } from 'react';
import { TEST_JOBS } from './TEST_JOBS';




function App() {
  const [jobList, setJobList] = useState(TEST_JOBS);

  return (
    <div>
      <Header/>
      <Container>
        <Routes>
          <Route path="/addjob" element={<AddJob/>}/>
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