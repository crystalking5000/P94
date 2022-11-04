const firebaseConfig = {
      apiKey: "AIzaSyAeDRfnRpaOaCVcyesRZTyZ0fFAaVzY9Xw",
      authDomain: "p93-509e3.firebaseapp.com",
      databaseURL: "https://p93-509e3-default-rtdb.firebaseio.com",
      projectId: "p93-509e3",
      storageBucket: "p93-509e3.appspot.com",
      messagingSenderId: "357460535675",
      appId: "1:357460535675:web:c1d061e1dc3f6e667935de"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
