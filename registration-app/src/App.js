import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

 //import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import axios from 'axios';

axios.defaults.withCredentials = true;

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>



            {/* <Route path="/login">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
            </Route>
            <Route path="/register">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
            </Route> */}

            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Register}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/home" component={Home}/>



            {/* <Route exact path="/admin" render={(props) => <MasterLayout {...props} />} /> */}


          </Switch>
        </Router>
    </div>
  );
}

export default App;
