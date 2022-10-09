const container = document.querySelector(".container");
const pwdShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUpLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");
const uploadBtn = document.querySelector("#file-btn");
const fileChosen = document.querySelector("#file-chosen");
const signupBtn = document.querySelector(".signup-btn");

//  show/hide password icon
pwdShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwdShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwdShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// displaying login <=> signup
signUpLink.addEventListener("click", () => {
  container.classList.add("active");
});
loginLink.addEventListener("click", () => {
  container.classList.remove("active");
});

// Confirm Password check
signupBtn.addEventListener("click", () => {
  const pwd = document.getElementById("create-pwd").value;
  const confirmPwd = document.getElementById("confirm-pwd").value;
  if (pwd.length !== 0 && confirmPwd.length !== 0) {
    if (pwd !== confirmPwd) {
      alert("Error: Passwords don't match");
    }
  } else {
    alert("Error: Password cannot be empty");
  }
});

// File Chosen display
uploadBtn.addEventListener("change", function () {
  fileChosen.textContent = this.files[0].name;
});

// ----Authentication----

// Setting up firebase with the page
const firebaseApp = firebase.initializeApp({
  /* Firebase config */
  apiKey: "AIzaSyDl-KzVqzZFfTtp1cexjM5a6q20BpoySyM",
  authDomain: "ests-login.firebaseapp.com",
  projectId: "ests-login",
  storageBucket: "ests-login.appspot.com",
  messagingSenderId: "791910040853",
  appId: "1:791910040853:web:55c625a5f8edaf90b3551c",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Signup function
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("create-pwd").value;
  console.log(email, password);
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      // ..
    });
}

// Login Function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pwd").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Login successful");
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
