import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <Route path='/' component={Register} exact/>
       <Route path='/login' component={Login} exact/>
    </BrowserRouter>
  );
}

export default App;
