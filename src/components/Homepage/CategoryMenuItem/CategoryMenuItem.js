import React, { useContext } from 'react';
import CategoryItemsData from './CategoryMenuData'
import CategoryMenuCard from './CategoryMenuCard';
import { CategoryContext } from '../../../App';
import Bread from '../../Images/BREAD.png'
import Salad from '../../Images/SALAD.png'
import Varied from '../../Images/VARIED.png'
import Vegetarian from '../../Images/VEGETARIAN.png'

const CategoryMenuItem = () => {
    console.log(CategoryItemsData[0]);
    const [category, setCategory] = useContext(CategoryContext)
   
    return (
        <div className="container">
        <div className="d-flex justify-content-between" >
           <div onClick={() => setCategory('BREAD')} className="card" >
            <img src={Bread} className="card-img-top" alt="..."></img>
            <div className="categoryItemName">BREAD </div>   
            </div>
            
            
           <div onClick={() => setCategory('SALAD')} className="card" >
            <img  src={Salad} className="card-img-top" alt="..."></img>
            <div className="categoryItemName">SALAD </div>   
            </div>
            
            
           <div onClick={() => setCategory('VARIED')} className="card" >
            <img  src={Varied} className="card-img-top" alt="..."></img>
            <div className="categoryItemName">VARIED </div>   
            </div>
            
            
           <div onClick={() => setCategory('VEGETARIAN')} className="card" >
            <img  src={Vegetarian} className="card-img-top" alt="..."></img>
            <div className="categoryItemName">VEGETARIAN </div>   
            </div>
            
        </div>
        </div>

        // <div className="row">
        //     {
        //         CategoryItems.map((d, i)=> <CategoryMenuCard data={d} key={i} />)
        //     }
        // </div>

    );
};

export default CategoryMenuItem;