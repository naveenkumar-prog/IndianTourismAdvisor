

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase,set,ref,update,child, get } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBl8IRUKY9K58NFMpNzcgX6wR0OXcLjMUc",
    authDomain: "authenicationapp2.firebaseapp.com",
    databaseURL: "https://authenicationapp2-default-rtdb.firebaseio.com",
    projectId: "authenicationapp2",
    storageBucket: "authenicationapp2.appspot.com",
    messagingSenderId: "96812437011",
    appId: "1:96812437011:web:af631dcdad4987b6dcb9e6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  signUp.addEventListener('click',(e)=>{

  	var email = document.getElementById('email').value;
  	var password = document.getElementById('password').value;
  	var username = document.getElementById('username').value;



  	createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    set(ref(database,'users/' + user.uid),{
    	username:username,
    	email:email
    })

    window.alert('user created ! Please Login to continue');
    window.location.href='login.html';

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
    // ..
  });
  });

   login.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    console.log(user.uid);
    

    const dt = new Date();
    const dbRef = ref(getDatabase());

    console.log("update enters");

    update(ref(database,'users/' + user.uid),{
      // username:username,

      last_login: dt,
      email:email

    })   
    console.log("update enters2");

    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
      console.log("child enters");
      if (snapshot.exists()) {
        console.log(snapshot.val());
        var currentEmail = snapshot.val().email;
        var currentUsername = snapshot.val().username;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
    window.alert('user logged in');
    window.location.href='tourIndex.html';

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  });
  });

  const user = auth.currentUser;

logout.addEventListener('click',(e)=>{
  signOut(auth).then(() => {
  // Sign-out successful.

  window.alert('user logged out!');
    window.location.href='index.html';
}).catch((error) => {
  // An error happened.
  const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
});

})



