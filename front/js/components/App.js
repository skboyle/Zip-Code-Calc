import React from 'react';
import Home from './Home'

const App = props => {
  return(
    <div className="container">
      <h1>Zip Code Distance Calculator</h1>
      <h5>Enter two zip codes to learn how far apart they are!</h5>
      <Home />
    </div>
  )
}

export default App;
