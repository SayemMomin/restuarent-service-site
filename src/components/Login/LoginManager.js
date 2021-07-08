import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase';

export const initializeLoginFramwork = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
        //console.log(firebase.apps.length);
    } 
}

export const createUserWithEmailAndPassword = (email, password) => {
   return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            userCredential.user.sendEmailVerification()
            console.log(userCredential.user.sendEmailVerification()) 
        alert("Email sent, please confirm")
          console.log(userCredential);
          const newUserInfo = userCredential.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
          return newUserInfo;
          
        })
        .catch(error => {
          // Handle Errors here.
          const newUserInfo = {};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          return newUserInfo;
          // ...
        });
}

export const signInWithEmailAndPassword = (email, password)=> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res);
          const newUserInfo = res.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
          return newUserInfo;
        })
        .catch(function(error) {
          // Handle Errors here.
          const newUserInfo = {};
          newUserInfo.error = error.message;
          console.log(newUserInfo.error);
          newUserInfo.success = false;
          return newUserInfo;
          // ...
        });
}

