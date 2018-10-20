import React, { Component } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import{
  Switch,
  Route,
  BrowserRouter as Router
}from 'react-router-dom'


class App extends Component{

  render(){
    return(
        <Router>
        
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              
            </Switch>
          
        </Router>
    );
  }
}

export default App;