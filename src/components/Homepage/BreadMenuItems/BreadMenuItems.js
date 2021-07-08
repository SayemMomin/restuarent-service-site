import React, { useContext, useEffect, useState } from 'react';
import BreadMenuCard from './BreadMenuCard';
import AllMenuItems from './BreadMenuItemsData'
import { CategoryContext } from '../../../App';

const BreadMenuItems = () => {
    const [name, setName] = useContext(CategoryContext)
    const [item, setItem] = useState([])
    console.log(name)
    useEffect(()=> {
        const matchCategory = AllMenuItems.filter(ct => ct.category === name && name.toLowerCase())
        setItem(matchCategory)
    }, [name])

    return (
        <div className="mt-5">
            <h2>This week's lunch {name} Menu</h2>
            <div className="row">
                {
                    item.map((d, i)=> <BreadMenuCard data={d} key={i} />)
                }
            </div>
        </div>
    );
};

export default BreadMenuItems;