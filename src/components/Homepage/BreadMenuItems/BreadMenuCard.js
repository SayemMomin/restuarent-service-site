import React from 'react';
import { Link } from 'react-router-dom';

const BreadMenuCard = ({data}) => {
    const { id, img, name, type, day, rating} = data
    return (
        
        
        <div  className="d-flex justify-content-center col-md-4 col-lg-3 mb-3">  
 <Link to={"item/"+id}>
           <div className="card" style={{width: "28rem"}}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{name} </h5>
                    <div className="d-flex justify-content-between">
                        <span className="card-text ">{type} </span>
                        <span className="card-text bg-success">{rating} </span>
                    </div>
                    <h5 className="card-title">{day} </h5>
                    
                </div>
            </div>
            </Link>
            </div>
        
        
    );
};

export default BreadMenuCard;