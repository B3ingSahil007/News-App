import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  // name = 'Sahil Miyawala';
  const pageSize = 15;

  // apiKey = "2191619e4f2d4587bbbcd19d7fdae19d"
  const apiKey = process.env.REACT_APP_NEWS_API_KEY

  const [progress, setProgress] = useState(0)

  return (
    <div className='text-bg-dark'>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        // progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        {/* <h3>Hello, My Name Is {name}.</h3> */}
        {/* <News pageSize={20} country="in" category="general" /> */}
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" />} />
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;