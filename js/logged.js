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

function httpGet(theUrl, func)
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", theUrl, true);
  xhr.onload = func
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}

GET = (function () {
    var get = {
        push:function (key,value){
            var cur = this[key];
            if (cur.isArray){
                this[key].push(value);
            }else {
                this[key] = [];
                this[key].push(cur);
                this[key].push(value);
            }
        }
    },
    search = document.location.search,
    decode = function (s,boo) {
        var a = decodeURIComponent(s.split("+").join(" "));
        return boo? a.replace(/\s+/g,''):a;
    };
    search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function (a,b,c) {
        if (get[decode(b,true)]){
            get.push(decode(b,true),decode(c));
        }else {
            get[decode(b,true)] = decode(c);
        }
    });
    return get;
})();


// Initialize Firebase


function logOut() {
  firebase.auth().signOut();
      window.location.pathname = "index.html";
}

function generate() {
  var min = 1;
  var max = 100000;
  var rid = Math.floor(Math.random() * (+max - +min)) + +min;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://93.179.68.40:8080/?uid="+GET['uid']+"&rid="+rid, true);
  xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      if (xhr.responseText == 'banned') {
        alert("Error: you have banned!")
        logOut();
      } else {
        document.getElementById('lab').innerHTML = xhr.responseText;
      }
    } else {
      alert(xhr.statusText);
    }
  }
};
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
    alert("Error. You can see text in console.")
  };
  xhr.send(null);

}
