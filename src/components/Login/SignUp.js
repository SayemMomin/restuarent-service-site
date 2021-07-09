import React, { useState, useContext } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './SignUp.css'
import { useHistory, useLocation, Link } from 'react-router-dom';
import logo from '../Images/logo.png'
import minuOrderPic from '../Images/order-pic.png'
import liveOrderPic from '../Images/live-order-icon.png'
import { UserContext } from '../../App';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, initializeLoginFramwork } from './LoginManager';




const SignUp = () => {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };

    const [loginForm, setLoginForm] = useState(false)

    const [logginUser, setLogginUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        number: '',
        
      })

      initializeLoginFramwork();

      const handleOnBlur =(e) => {
        let isFieldValied;
        if (e.target.name === 'email') {
          isFieldValied = /\S+@\S+\.\S+/.test(e.target.value);    
        }
        if (e.target.name === 'password') {
          const isPasswordValied = e.target.value.length > 6;
          const passwordHasNumber = /\d{1}/.test(e.target.value);
          isFieldValied = isPasswordValied && passwordHasNumber;  
        }
    
        if (isFieldValied) {
       const newUserInfo = {...user};
           console.log(newUserInfo);
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo)
        }
      }

      const handleResponse = (res, redirect)=> {
          setUser(res);
          setLogginUser(res);
          if(redirect){
              history.replace(from);
          }
      }
    
 const signupHandleSubmit = (e) => { 
     console.log('click'); 
     e.preventDefault();
     if (user.email && user.password) {
        createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
            handleResponse(res, true)
            
        })
    }}
 const loginHandleSubmit = (e) => {
     console.log('click')
    e.preventDefault();
    if (user.email && user.password) {
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            handleResponse(res, true);
        })
      
    }
};




    return (
        <>
            <div className="container signUpBody">
            <div className="row">
                <div className=" col-md-7">
                    <div className="d-flex justify-content-between logo-margin">
                    <Link to="/"><img className="signupLogo" src={logo} alt=""/></Link>
                    <button href="/login" className="signUpBtn">Login</button>
                    <button href="/login" className="signUpBtn">Sign Up</button>
                    
                    </div>
                    <h3 className="mt-5">Unexpected guests?</h3>
                    <p>Order food from favourite restaurants near you</p>
                    <Form className="d-flex ">
                    <Form.Control  type="text" placeholder="Enter a location"  required />
                  
        
 
                    <Button  className="w-50 findBtn" type="submit">
                        FIND CODE
                    </Button>
                    </Form>
                    <p className="mt-4">POPULAR CITIES IN BANGLADESH</p>
                    <div className="d-flex justify-content-between">
                        <h4>Dhaka</h4>
                        <h4>Sylhet</h4>
                        <h4>Khulna</h4>
                        <h4>Cattogram</h4>
                        <h4>Bogura</h4>
                        <h4>Cumilla</h4>
                    </div>
                    <div className="row login-bg-clr mt-5 pt-5 ">
                        <div className="col-md-6 text-center">
                             <img src={minuOrderPic}  alt=""/>
                             <h4>No Minimum Order</h4>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestiae? </p>
                        </div>
                        <div className="col-md-6 text-center">
                        <img src={liveOrderPic} alt=""/>
                             <h4>Live Order Tracking</h4>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestiae? </p>
                        </div>
                    </div>
                </div>
                
                
                <div className="col-md-5 bg-frm-img">
                <div className="bg-frm ml-5 p-4">
                       {loginForm ? <Form className="" onSubmit={loginHandleSubmit}>
                        <Form.Label className='font-weight-bold '>Login</Form.Label>
                    <Form.Group  id="email">
                        <Form.Control className="inputBox" type="email" name='email'  placeholder="Email" onBlur={handleOnBlur}  required />
                    </Form.Group>
                    <div className="ractangle"></div>
                    <Form.Group id="password">
                        <Form.Control className="inputBox" type="password" name='password' placeholder="Password" onBlur={handleOnBlur}  required />
                    </Form.Group>
                    <div className="ractangle"></div>
                    <Button   className="w-100 FrmBtnClr mt-2" type="submit">
                        Login
                    </Button>
                    <div className="w-100 text-center mt-2">
                    Don't have an account? <a className="signLoginClickBtn" onClick={() => setLoginForm(false)} style={{cursor: 'pointer'}}>Sign Up</a>
                    { user.success && <p style={{color: 'green'}}>User Login successfully</p>}
                    <p style={{color: 'red'}}>{user.error} </p>
                    </div>
                    </Form>
                    
                    :
                    <Form onSubmit={signupHandleSubmit}>
                     
                    <Form.Label className='font-weight-bold'>Sign Up</Form.Label>
                        <Form.Group className="" id="">
                        <Form.Control className="inputBox input-focus" type="text" name='name' onBlur={handleOnBlur} placeholder="Enter Name" />
                        </Form.Group>
                        <div className="ractangle"></div>
                    <Form.Group id="email">
                        <Form.Control className="inputBox" type="email" name='email' placeholder="Email" onBlur={handleOnBlur}  required />
                       
                    </Form.Group>
                    <div className="ractangle"></div>
                    <Form.Group id="">
                    <Form.Control className="inputBox " type="number"  name='number' onBlur={handleOnBlur}  placeholder="Number" />
                    </Form.Group>
                    <div className="ractangle"></div>
                    <Form.Group id="password">
                        <Form.Control className="inputBox" type="password" name='password' placeholder="Password"  onBlur={handleOnBlur} required />
                    </Form.Group>
                    <div className="ractangle"></div>
                    <Button   className="w-100 FrmBtnClr mt-2" type="submit">
                        Sign Up
                    </Button>
                    <div className="d-flex justify-content-between">
                        <div><h5>Referral Code</h5>
                        </div>
                        <div><h6>View Options</h6></div>
                    </div>
                    <p>Add a personalized gift note to your order</p>
                    <div className="w-100 text-center mt-2">
                    Already have an account? <a className="signLoginClickBtn" onClick={() => setLoginForm(true)} style={{ cursor: 'pointer'}}>Log In</a>
                    { user.success && <p style={{color: 'green'}}>User Created successfully</p>}
                    <p style={{color: 'red'}}>{logginUser.error} </p>
                    </div>
                    </Form>
                    
                    }
                   </div>
                    
               
        </div>
  
        
            </div>
            </div>
        
      </>
    );
};

export default SignUp;