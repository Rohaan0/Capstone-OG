
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


//grabs the sign up and login
const signUpForm = document.querySelector('#createAccount')
const loginForm = document.querySelector('#login')
const userContainer = document.querySelector('scores')


// const baseURL = `http://localhost:5030/api`

// const login = body => axios.post(`${baseURL}/login`, body).then((res) => {
//         createUserScore(res.data)
//     }).catch(err => {
//         console.log(err)
//         alert('Uh oh. Your request didnt work.')
//     })
// const register = body => axios.post(`${baseURL}/register`, body).then(res => {
//     createUserScore(res.data)
// }).catch(err => {
//     console.log(err)
//     alert('Uh oh. Your request did not work')
// })



function getProfileInfo() {
    axios.get('http://localhost:5030/user') 
        .then(res => {
            const user = res.data[0]

            const {
                user_name: userName, 
                email,
                score 
            } = user

            userNameInput.value = userName
            lastNameInput.value = lastName
            phoneInput.value = phoneNumber
            emailInput.value = email
            addressInput.value = address
            cityInput.value = city
            stateInput.value = state
            zipCodeInput.value = zipCode
        })
}




function loginSubmitHandler(e) {
    e.preventDefault()

    let username = document.querySelector('#login-username')
    let password = document.querySelector('#password-login')

    let bodyObj = {
        username: username.value,
        password: password.value
    }

    login(bodyObj)

    username.value = ''
    password.value = ''
}

function registerSubmitHandler(e) {
    e.preventDefault()
  
    let username = document.querySelector('#signupUsername')
    let email = document.querySelector('#emailAddress')
    let password = document.querySelector('#password-js')
    let password2 = document.querySelector('#confirmPassword-js')
    let score = document.querySelector('.js-score')
    if (password.value !== password2.value) {
      alert("Your passwords need to match.")
      return
    }

    let bodyObj = {
        username: username.value,
        email: email.value,
        password: password.value,
        score: score.value
    }


    register(bodyObj)
  
    username.value = ''
    email.value = ''
    password.value = ''
    password2.value = ''
  }




// // function createUserScore(data) {
// //     userContainer.innerHTML = ''
// //     const userCard = document.createElement('div')
// //     userCard.classList.add('user-card')


// //     userCard.innerHTML = `<p class="username">Username: ${data.username}</p>
// //     <p class="email">Email: ${data.email}</p>
// //     <p class="highScore">High Score: ${data.score}</p>`

// //     userContainer.appendChild(userCard)
// // }

// loginForm.addEventListener('submit', loginSubmitHandler)
// signUpForm.addEventListener('submit', registerSubmitHandler)