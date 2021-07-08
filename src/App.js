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
import Header from './components/Header/Header';
import SignUp from './components/Login/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import BreadMenuItems from './components/Homepage/BreadMenuItems/BreadMenuItems';
import Check from './components/Check/Check';
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
      {/* <Header/> */}
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
