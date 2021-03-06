// Your web app's Firebase configuration
function filter(value) {
  return value != undefined
}
let firebaseConfig = {
  apiKey: "AIzaSyAmHSuQJYzvtYS2A9XDClOXEG8AmTYPlcg",
  authDomain: "chore-tracker-d1f1a.firebaseapp.com",
  databaseURL: "https://chore-tracker-d1f1a.firebaseio.com",
  projectId: "chore-tracker-d1f1a",
  storageBucket: "",
  messagingSenderId: "753280324287",
  appId: "1:753280324287:web:5056f377699f269a"
};
// Initialize Firebase
let user = ""
firebase.initializeApp(firebaseConfig);
let data = firebase.firestore()
function addData(username, password) {
  let newLogin = {
    ps: password
  }
  var docRef = data.collection("LoginDetails").doc(username);
  docRef.get().then(function(doc) {
      if (doc.exists) {
        M.toast({html: "A user with that username already exists"});
      } else {
        data.collection("LoginDetails").doc(username).set(newLogin);
        M.toast({html: "Account Created"});
      }
    }).catch(function(error) {
         M.toast({html: "An error has occured, please try again later"});
    });
}
function login(username, password) {
  var docRef = data.collection("LoginDetails").doc(username);
  docRef.get().then(function(doc) {
      if (doc.exists) {
          if (doc.data().ps == password) {
            user = username
            M.toast({html: "<span>Logged in as " + username + "</span>"});
            switchMain()
          } else {
            M.toast({html: "<span>Incorrect password</span>"});
          }
      } else {
        let createA = '<span>User not found, are you sure you dont want to create an account?</span><button id="createA" class="btn-flat toast-action" style="color: white;">Create</button>';
        M.toast({html: createA});
      }
    }).catch(function(error) {
         M.toast({html: "An error has occured, please try again later"});
    });
}
function switchCreate() {
  $("main").empty();
  $("main").load("html/create.html"); 
}
function switchLogin() {
  $("main").empty();
  $("main").load("html/login.html"); 
}       
function switchMain() {
  $("main").empty();
  $("main").load("html/main.html"); 
  $("#background").width(0)
}
function addFile() {
  let newData = {
    chores: [],
    value: [],
    names: [],
    assign: [],
  }
  var docRef = data.collection("Data").doc(user);
  docRef.get().then(function(doc) {
      if (doc.exists) {
        load()
      } else {
        data.collection("Data").doc(user).set(newData);
      }
    }).catch(function(error) {
         console.log("error")
    });
}
function updateFile(names, chores, seed) {
  let newerData = {
    chores: chores.filter(filter),
    value: [],
    names: names.filter(filter),
    seed: seed
  }
  var docRef = data.collection("Data").doc(user);
  docRef.get().then(function(doc) {
  data.collection("Data").doc(user).set(newerData);
  }).catch(function(error) {
    console.log("error")
  });
}
function load() {
  var docRef = data.collection("Data").doc(user);
  docRef.get().then(function(doc) {
    names = doc.data().names
    chores = doc.data().chores
    seed = doc.data().seed
    for (x = 0; x < names.length; x++) {
      addName(names[x])
    }
    for (n = 0; n < chores.length; n++) {
      addChore(chores[n])
    }
    assign(seed)
  }).catch(function(error) {
       M.toast({html: "An error has occured, please try again later"});
  });
}
