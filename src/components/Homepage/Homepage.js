import React, { useContext } from 'react';
import CategoryMenuItem from './CategoryMenuItem/CategoryMenuItem';
import BreadMenuItems from './BreadMenuItems/BreadMenuItems';
import Header from '../Header/Header';
import Login from '../Login/SignUp'
import { CategoryContext } from '../../App';

const Homepage = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div className="container">
         
            <Header/>
            <CategoryMenuItem/>
            <BreadMenuItems/>
        </div>
    );
};

export default Homepage;