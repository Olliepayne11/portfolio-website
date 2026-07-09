import { React, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Ripple } from 'react-preloaders'

import NavBar from './pages/NavBar'
import Home from './pages/Homescreen/Index'

import './App.css'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Ripple customLoading={loading} color={'#00FFFF'} background="#0F172A"/>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
