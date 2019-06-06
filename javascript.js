window.onload = function(){

/*There are 2 inputs and 1 button on the homepage.  
         
    Button 1 - #submit     
        On "click" needs to authenticate user and password. 
*/
//creates a variable to store input from form
var user = $('#user').val();
var password = $('#password').val();



/////////////////////////////////////////////////////////////////////////////
/* 
There are 6 inputs and 2 buttons on the main page that need script. 
    Button 1 :  #addEvent
        On "click" needs to --> 
            1)Retrieve input from form and list the event in the event display area.
            2)Connect to both API's 
    Button 2 : #eventSearch
        On "click" needs to -->
            1) Match the input from #searchInput with an event in the events list. 
            2) Highlight the searched events in the display area. 
*/

//creates a variable to store input from form for button 1.
var eventCreator = $('#squadLeader').val();
var eventName = $('#inputEventName').val();
var dateTime = $('#DT').val();
var location = $('#location').val();
var eventDescription = $('#eventDescription').val();
var teamRoster = $('#roster').val();

//creates a variable to store input from form for button 2.
var search = $('#searchInput').val();










///////////////////////////////////////////////////////////////////////////////////////
                                    //GOOGLE API SECTION
//////////////////////////////////////////////////////////////////////////////////////







//TEST!1



///////////////////////////////////////////////////////////////////////////////////////
                                    //YELP API SECTION
//////////////////////////////////////////////////////////////////////////////////////
















///////////////////////////////////////////////////////////////////////////////////////
                                    //FIREBASE SECTION
//////////////////////////////////////////////////////////////////////////////////////

  var firebaseConfig = {
    apiKey: "AIzaSyCut4P2yrq2ECQWaX5liAQ6luwvuUQVozA",
    authDomain: "project-1-14697.firebaseapp.com",
    databaseURL: "https://project-1-14697.firebaseio.com",
    projectId: "project-1-14697",
    storageBucket: "project-1-14697.appspot.com",
    messagingSenderId: "8693009592",
    appId: "1:8693009592:web:3ffc100f48ce733c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let database = firebase.database();
  let userSignedIn = false;

  

 $("#submitBtn").click(function() {

  event.preventDefault()
  // let users = firebase.database().child('users/')
console.log("hey")

    let email = document.querySelector("#exampleInputEmail1")
    let username = document.querySelector("#exampleUserName")
    let password = document.querySelector("#exampleInputPassword1")
    


firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function(user) {
        displayName = username.value
        writeUserData(displayName, user) // possibly only need to pass displayName as parameter
    })


})

function writeUserData(displayName, user) { //possibly only need to pass in displayName here
    console.log("we're in")
    firebase.database().ref('users/' + displayName).set({
        username: displayName,
})

firebase.auth().onAuthStateChanged(user => {

    if(user && userSignedIn === false) {
      window.location = 'main.html'; //After successful login, user will be redirected to main.html
        }
        userSignedIn = true;
});

$("#exampleInputEmail1").val("");
$("#exampleUserName").val("");
$("#exampleInputPassword1").val("");
}



};