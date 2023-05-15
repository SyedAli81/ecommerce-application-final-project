// const loginLink = document.getElementById('login-link');
// loginLink.addEventListener('click', (e) => {
//  e.preventDefault();
//  const loginForm = document.getElementById('login-wrapper');
//  loginForm.classList.add('animate__animated', 'animate__rotateIn');
//  setTimeout(() => {
//   document.location.replace('/login');
//  }, 1000);
// });
const registerFormHandler = async function (event) {
    event.preventDefault();
   
    const emailEl = document.querySelector('#email-register');
    const passwordEl = document.querySelector('#password-register');
   
    const response = await fetch('/api/user/register', {
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
     alert('Failed to sign up');
    }
   };
   
   document
    .querySelector('#register-form')
    .addEventListener('submit', registerFormHandler);
   