var firebaseConfig = {
    apiKey: "AIzaSyABJ1WuIZzYe0sTXybDdE9MN770qQ6sF4s",
    authDomain: "lets-chat-web-app-c609c.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-c609c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-c609c",
    storageBucket: "lets-chat-web-app-c609c.appspot.com",
    messagingSenderId: "602856669318",
    appId: "1:602856669318:web:97796a95db9360b5f11107"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  User_name = localStorage.getItem("User_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ User_name + "!!!";

function addroom(){
  room_name = document.getElementById("room_name").value ; 
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding Room name"
  });
  localStorage.setItem("Room_name",room_name);
  window.location=  "kwitter_page.html";
}
function  logout(){
  window.location = "kwitter.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row ="<div class = 'room_name' id =  "+Room_names+" onclick = 'redirecttoroom_name(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirecttoroom_name(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location=  "kwitter_page.html";
}