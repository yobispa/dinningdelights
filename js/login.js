console.log("JS Loaded");
let access = false;

//Login variables
const loginPage = document.querySelector(".login")
const registerPage = document.querySelector(".register")
const changeLoginBtn = document.querySelector(".change-to-login")
const changeRegisterBtn = document.querySelector(".change-to-register")

//Login variables
const loginEmail = document.querySelector(".login-email");
const loginPassword = document.querySelector(".login-password")
const loginButton = document.querySelector(".login-btn")
const loginFeedbackEmail = document.querySelector(".login-email-validation-feedback")
const loginFeedbackPassword = document.querySelector(".login-password-validation-feedback")
//Register variables
const registerName = document.querySelector(".register-name")
const registerEmail = document.querySelector(".register-email")
const registerPassword = document.querySelector(".register-password")
const registerButton = document.querySelector(".register-btn")
const registerFeedbackName = document.querySelector(".register-name-validation-feedback")
const registerFeedbackEmail = document.querySelector(".register-email-validation-feedback")
const registerFeedbackPassword = document.querySelector(".register-password-validation-feedback")
//Eventlisteners
changeLoginBtn.addEventListener("click", changeToLogin)
changeRegisterBtn.addEventListener("click", changeToRegister)
loginButton.addEventListener("click", inputValidationLogin)
registerButton.addEventListener("click", inputValidationRegister)
//functions
function changeToLogin() {
    loginPage.classList.remove("display-none")
    registerPage.classList.add("display-none")
}
function changeToRegister() {
    registerPage.classList.remove("display-none")
    loginPage.classList.add("display-none")
}
// check If input field is validated before login
function inputValidationLogin() {
    const email = loginEmail.value
    const password = loginPassword.value

    if(email.length >= 0 && email.length < 10) {
        loginFeedbackEmail.textContent = `Fill email field or email is too short`
        loginEmail.classList.add("error")
        document.querySelector(".feedback-login-email").classList.remove("display-none")
    }
    if(password.length >= 0 && password.length < 8) {
        loginFeedbackPassword.textContent = `Fill password field. Minimal 8 characters`
        loginPassword.classList.add("error")
        document.querySelector(".feedback-login-password").classList.remove("display-none")
    }
    if(email.length >= 10 && password.length >= 8) {
        login()
    }
    
}
// check if input field is validated before making an account
function inputValidationRegister() {
    const name = registerName.value
    const email = registerEmail.value
    const password = registerPassword.value

    if(name.length >= 0 && name.length < 4) {
        registerFeedbackName.textContent = `Fill name field. Minimal 4 characters`
        document.querySelector(".feedback-register-name").classList.remove("display-none")
    }
    if(email.length >= 0 && email.length < 10) {
        registerFeedbackEmail.textContent = `Fill email field. Minimal 10 characters`
        document.querySelector(".feedback-register-email").classList.remove("display-none")
    }
    if(password.length >= 0 && password < 8) {
        registerFeedbackPassword.textContent = `Fill password field. Minimal 8 characters`
        document.querySelector(".feedback-register-password").classList.remove("display-none")
    }
    if(name.length >= 4 && email.length >= 10 && password.length >= 8) {
        createAccount()
    } else {
        alert("You doing something wrong check password length. Password: minimal 8 characters. Email: minimal 10 characters. Name: minimal 4 characters")
    }
}
//This function logs you in and send you to the other site
function login() {
    let name = localStorage.getItem("name")
    let correctEmail = localStorage.getItem("email")
    let correctPassword = localStorage.getItem("password")
    if(name == "") {
        name = 'User1'
    }
    if(correctEmail == "") {
        correctEmail = '12345678@gmail.com'
    }
    if(correctPassword == "") {
        correctPassword = `guest12345678`
    } 

    if(loginEmail.value == correctEmail && loginPassword.value == correctPassword) {
        alert(`Welcome back ${name}`)
        access = true
        localStorage.setItem("accessgranted", access)
        location.href = 'food.html'
    } else {
        alert("Incorrect email or password")
    }
}
//this function creates the account and set all information in local storage
function createAccount() {
    localStorage.setItem("name", registerName.value)
    localStorage.setItem("email", registerEmail.value)
    localStorage.setItem("password", registerPassword.value)
    loginPage.classList.remove("display-none")
    registerPage.classList.add("display-none")
    alert("Account created successfully")
}