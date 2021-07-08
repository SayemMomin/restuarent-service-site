import React, { useState, useContext } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../Images/logo.png'
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
            <div className="container">
            <div className="row">
                <div className=" col-md-8">
                    <div className="d-flex justify-content-between login-box-clr">
                    <img className="logo" src={logo} alt=""/>
                    <button href="/login" className="login-bg-clr">Login</button>
                    <button href="/login" className="login-bg-clr">Sign Up</button>
                    
                    </div>
                    <h3>Unexpected guests?</h3>
                    <p>Order food from favourite restaurants near you</p>
                    <Form className="d-flex">
                    <Form.Control type="email" placeholder="Enter a location"  required /> 
                    <Button  className="w-50" type="submit">
                        FIND CODE
                    </Button>
                    </Form>
                    <p>POPULAR CITIES IN BANGLADESH</p>
                    <div className="d-flex justify-content-between">
                        <h4>Dhaka</h4>
                        <h4>Sylhet</h4>
                        <h4>Cattagram</h4>
                        <h4>Bogura</h4>
                        <h4>Cumilla</h4>
                    </div>
                    <div className="row login-bg-clr">
                        <div className="col-md-6">
                             <img src="" alt=""/>
                             <h4>No Minimum Order</h4>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestiae? </p>
                        </div>
                        <div className="col-md-6">
                        <img src="" alt=""/>
                             <h4>Live Order Tracking</h4>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestiae? </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                
                       {loginForm ? <Form onSubmit={loginHandleSubmit}>
                        <Form.Label className='font-weight-bold'>Login</Form.Label>
                    <Form.Group id="email">
                        <Form.Control type="email" name='email'  placeholder="Email" onBlur={handleOnBlur}  required />
                       
                    </Form.Group>
                    
                    <Form.Group id="password">
                       
                        <Form.Control type="password" name='password' placeholder="Password" onBlur={handleOnBlur}  required />
                    </Form.Group>
                    <Button   className="w-100" type="submit">
                        Login
                    </Button>
                    <div className="w-100 text-center mt-2">
                    Don't have an account? <a onClick={() => setLoginForm(false)} style={{color:'blue', cursor: 'pointer'}}>Sign Up</a>
                    { user.success && <p style={{color: 'green'}}>User Login successfully</p>}
                    <p style={{color: 'red'}}>{user.error} </p>
                    </div>
                    </Form>
                    
                    :
                    <Form onSubmit={signupHandleSubmit}>
                     
                    <Form.Label className='font-weight-bold'>Sign Up</Form.Label>
                        <Form.Group id="">
                        <Form.Control type="text" name='name' onBlur={handleOnBlur} placeholder="Enter Name" />
                        </Form.Group>
                    <Form.Group id="email">
                        <Form.Control type="email" name='email' placeholder="Email" onBlur={handleOnBlur}  required />
                       
                    </Form.Group>
                    <Form.Group id="">
                    <Form.Control type="number"  name='number' onBlur={handleOnBlur}  placeholder="Number" />
                        </Form.Group>
                    <Form.Group id="password">
                        <Form.Control type="password" name='password' placeholder="Password"  onBlur={handleOnBlur} required />
                    </Form.Group>
                    <Button   className="w-100" type="submit">
                        Sign Up
                    </Button>
                    <div className="w-100 text-center mt-2">
                    Already have an account? <a onClick={() => setLoginForm(true)} style={{color:'blue', cursor: 'pointer'}}>Log In</a>
                    { user.success && <p style={{color: 'green'}}>User Created successfully</p>}
                    <p style={{color: 'red'}}>{logginUser.error} </p>
                    </div>
                    </Form>
                    
                    }
                    
               
        </div>
            </div>
            </div>
        
      </>
    );
};

export default SignUp;