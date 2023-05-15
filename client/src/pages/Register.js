<main class="m-auto rounded-4 shadow-1 p-5 text-center" id="login-wrapper">
    <h1 class="my-3">Meal-a-Day</h1>
    <form class="login-form mt-5 " id="login-form">
        <div class="form-floating mb-4">
            <input id="email-login" type="email" placeholder="Email address"
                class="form-control border-secondary shadow-lg" autocomplete="email">
            <label for="email-login">Email address</label>
        </div>
        <div class="form-floating mb-4 border-secondary">
            <input id="password-login" type="password" placeholder="********" class="form-control border-secondary-subtle  shadow-lg"
                autocomplete="current-password">
            <label for="password-login">Password</label>
        </div>

        <div class="d-grid">
            <button type="submit" class="btn btn-lg btn-primary w-100 shadow-lg mb-4">Login</button>
        </div>
        <div class="mt-auto ">
            Don't have an account? <a href="!#"
                    class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-primary"
                    id="register-link">Register here</a>
        </div>
    </form>

</main>
<script src="/js/login.js"></script>
<main class="m-auto rounded-4 shadow-lg p-5 text-center overflow-hidden" id="register-wrapper">
    <h1 class=" my-3">Meal-a-Day</h1>
    <h2 class=" mb-5">Your Nutrition Journal</h2>

    <form class="register-form mt-5" id="register-form">
        <div class="form-floating mb-4 ">
            <input id="email-register" type="email" placeholder="Email address" class="form-control border-success"
                autocomplete="email">
            <label for="email-register">Email address</label>
        </div>
        <div class="form-floating mb-4 ">
            <input id="password-register" type="password" placeholder="********" class="form-control border-success"
                autocomplete="current-password">
            <label for="password-register">Password</label>
        </div>

        <div class="d-grid">
            <button type="submit" class="btn btn-lg btn-danger w-100">Register</button>
        </div>
        <div class="mt-4 ">
            <p>Already have an account? <a href="#" class="link-underline-danger link-body-emphasis link-offset-3" id="login-link">Login here</a> </p>
        </div>
    </form>

</main>
<script src="/js/register.js"></script>

