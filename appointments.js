
import firebase from "firebase/app";
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyB4DYlMND36UxX4fa7ukvQ_HFJui_zC3g8",
  authDomain: "iron-gym-7f9c0.firebaseapp.com",
  projectId: "iron-gym-7f9c0",
  storageBucket: "iron-gym-7f9c0.appspot.com",
  messagingSenderId: "913800637534",
  appId: "1:913800637534:web:dd03f6fb705c35d27258cf",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://iron-gym-7f9c0-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = firebase.database();

function writeAppointments(name, email, date, time, message)
{
  database.ref("appointments").push().set({
    name: name,
    email: email,
    date: date,
    time: time,
    message: message
  });
}

const dbRef = firebase.database().ref();
dbRef.child("name").child(name).get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const date = document.querySelector(".date").value;
  const time = document.querySelector(".time").value;
  const message = document.querySelector(".message").value;
  writeAppointments(name, email, date, time, message);
});