const remote = require('electron').remote;
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

var winNumber;

function sleep(ms) {
ms += new Date().getTime();
while (new Date() < ms){}
}

setInterval(function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://93.179.68.40:8080/getWinNumber", true);
    xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        if (xhr.responseText == 'banned') {
          alert("Error: you have banned!");
          logOut();
        } else {
          winNumber = xhr.responseText;
          document.getElementById('winN').innerHTML = "Current win number: "+winNumber ;
        }
      } else {
        alert(xhr.statusText);
      }
    }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
      alert("Error. You can see text in console.");
    };
    xhr.send(null);
}, 5000);
GET = (function () {
    var get = {
        push:function (key,value){
            var cur = this[key];
            if (cur.isArray){
                this[key].push(value);
            } else {
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
  var window = remote.getCurrentWindow();
  window.close();
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
        alert("Error: you have banned!");
        logOut();
      } else {
        if (xhr.responseText == winNumber){
          alert("Wow, you win!!!")
        }
        document.getElementById('lab').innerHTML = xhr.responseText;
      }
    } else {
      alert(xhr.statusText);
    }
  }
};
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
    alert("Error. You can see text in console.");
  };
  xhr.send(null);

}
