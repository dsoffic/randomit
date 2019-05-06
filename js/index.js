var firebaseConfig = {
  apiKey: "AIzaSyBitV9S9AtsbhTYPmmeK0UZUt1cosGQW8s",
  authDomain: "randomit.firebaseapp.com",
  databaseURL: "https://randomit.firebaseio.com",
  projectId: "randomit",
  storageBucket: "randomit.appspot.com",
  messagingSenderId: "171427915286",
  appId: "1:171427915286:web:3eed136e41ccc224"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function onClick() {
  firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('pass').value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    window.location = "logged.html?dname=" + email;
  } else {
  }

});
