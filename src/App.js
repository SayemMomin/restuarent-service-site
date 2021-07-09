import logo from './logo.svg';
import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import SignUp from './components/Login/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import MenuItemDetails from './components/MenuItemDetails/MenuItemDetails';


export const UserContext = createContext();
export const CategoryContext = createContext();

function App() {
  const [logginUser, setLogginUser] = useState({})
  const [category, setCategory] = useState('BREAD')
  
  return (
   <UserContext.Provider value={[logginUser, setLogginUser]}>
     <CategoryContext.Provider value={[category, setCategory]}>
    <Router className="mt-3">
      <Switch>
     <Route path="/login">
        <SignUp/>
      </Route>
      <PrivateRoute path="/item/:id" >
        <MenuItemDetails/>
      </PrivateRoute>
      <Route exact path="/">
        <Homepage/>
      </Route>
      </Switch>
    </Router>
    </CategoryContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
