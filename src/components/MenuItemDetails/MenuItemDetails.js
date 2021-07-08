import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllMenuItems from '../Homepage/BreadMenuItems/BreadMenuItemsData'

const MenuItemDetails = () => {
    const [currentItem, setCurrentItem] = useState({});
    const {id} =useParams();
    const [selectedBigImg, setSelectedBigImg] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false)
    // const items = AllMenuItems.find(item => item.id === id)
    
    useEffect(()=> {
        const items = AllMenuItems.find(item => item.id === id)
        setCurrentItem(items)
        
        if(currentItem.img){
            setSelectedBigImg(currentItem.img)
        }
        
    }, [currentItem.name])
    console.log(currentItem);
    return (
        <div className="container">
            <img src={currentItem.img} alt=""/>
            <h2>{currentItem.name} </h2>
            <p>{currentItem.type} </p>

            
        </div>
    );
};

export default MenuItemDetails;