var firebaseConfig = {
  apiKey: "AIzaSyBitV9S9AtsbhTYPmmeK0UZUt1cosGQW8s",
  authDomain: "randomit.firebaseapp.com",
  databaseURL: "https://randomit.firebaseio.com",
  projectId: "randomit",
  storageBucket: "randomit.appspot.com",
  messagingSenderId: "171427915286",
  appId: "1:171427915286:web:3eed136e41ccc224"
};
firebase.initializeApp(firebaseConfig);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


document.getElementById('lab').value = getParameterByName('dname');

// Initialize Firebase


function logOut() {
  firebase.auth().signOut();
      window.location.pathname = "index.html";
}
