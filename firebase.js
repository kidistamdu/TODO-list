var firebaseConfig = {
    apiKey: "AIzaSyCG9T83u32uxFZlO-C6ojg-1nAz82OAcfs",
    authDomain: "to-do-list-21803.firebaseapp.com",
    projectId: "to-do-list-21803",
    storageBucket: "to-do-list-21803.appspot.com",
    messagingSenderId: "921664842227",
    appId: "1:921664842227:web:123603b809d63d6b3b0a86",
    measurementId: "G-SRLLX9Z8BN"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  var analytics = getAnalytics(app);
  var db =  firebase.firestore();