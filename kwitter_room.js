var firebaseConfig = {
      apiKey: "AIzaSyDs1YChBqocKvsc72GispHa2LQX1dwXt78",
      authDomain: "kwitter-5cf4f.firebaseapp.com",
      databaseURL: "https://kwitter-5cf4f-default-rtdb.firebaseio.com",
      projectId: "kwitter-5cf4f",
      storageBucket: "kwitter-5cf4f.appspot.com",
      messagingSenderId: "515678742498",
      appId: "1:515678742498:web:2558bbc1ba08091046fbbb",
      measurementId: "G-1XFJYZ4QWW"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();
function addRoom() {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}