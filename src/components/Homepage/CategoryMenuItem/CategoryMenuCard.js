import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../../App';

const CategoryMenuCard = ({data}) => {
    console.log(data);
    const [category, setCategory] = useContext(CategoryContext)
    const { off, img, name} = data;
    return (

            <div className="d-flex justify-content-center col-md-4 col-lg-3 ">  
           <div className="card" style={{width: "28rem"}}>
            <img onClick={() => setCategory(category)} src={img} className="card-img-top" alt="..."></img>
                {/* <button onClick={() => setCategory('BREAD')}>Bread</button> */}
                <div onClick={() => setCategory('BREAD')} className="categoryItemName">{name} </div>
                    
                
            </div>
        </div>
            
    );
};

export default CategoryMenuCard;