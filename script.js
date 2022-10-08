const container = document.querySelector(".container");
const pwdShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");
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
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
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
