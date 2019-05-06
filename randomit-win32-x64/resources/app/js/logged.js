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


document.getElementById('lab').innerHTML = "Hi, " + GET['dname'];

// Initialize Firebase


function logOut() {
  firebase.auth().signOut();
      window.location.pathname = "index.html";
}
