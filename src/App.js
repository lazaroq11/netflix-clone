import React from 'react'
import { BrowserRouter as Router, useHistory} from 'react-router-dom';
import './App.css'
import "./styles/animation.css"
import Routes from "./routes/routes"

function App () {
   const history = useHistory();   
  return(
     <Router history = {history}>
       <Routes/>
     </Router>
    
  );
}

export default App;