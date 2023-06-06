import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'





function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1000);
    
  }

  const toggleMode = () => {
    console.log('toggle mode clicked')
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success') 
      document.title='TextUtils-DarkMode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      document.title='TextUtils-LightMode'
    }
    
  }

  const redBg = () => {
    setMode('warning')
    document.body.style.backgroundColor = 'red'
  }

  return (
    <>
    <Router >
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} redBg={redBg} />
      <Alert alert={ alert} />
      <div className='container my-3'>
        <Switch>
            <Route path="/about">
              <About />
            </Route>        
            <Route path="/">
            <TextForm heading="Enter the Text to Analyse"  mode={mode} showAlert={showAlert} />
            </Route>
        </Switch>        
      </div>
    </Router>
     
    </>
  );
}

export default App;
