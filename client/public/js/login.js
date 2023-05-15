// const registerLink = document.getElementById('register-link');
// registerLink.addEventListener('click', (e) => {
//  e.preventDefault();
//  const loginForm = document.getElementById('login-wrapper');
//  loginForm.classList.add('animate__animated', 'animate__rotateOut');

//  setTimeout(() => {
//   document.location.replace('/register');
//  }, 1000);
// });
const loginFormHandler = async function (event) {
    event.preventDefault();
   
    const emailEl = document.querySelector('#email-login');
    const passwordEl = document.querySelector('#password-login');
   
    const response = await fetch('/api/user/login', {
     method: 'POST',
     body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
     }),
     headers: { 'Content-Type': 'application/json' },
    });
   
    if (response.ok) {
     document.location.replace('/dashboard');
    } else {
     console.log(response);
     alert('Failed to login');
    }
   };
   
   document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
   