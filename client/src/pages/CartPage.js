<main
  class="container-lg shadow-1 rounded-4 text-warning-emphasis text-center bg-primary  mx-5 my-5 overflow-hidden position-relative">
  <div class="row">

    <div class="col-lg-6 p-5 mx-auto ">
      <h1 class="display-2 text-info text-center">Meal-a-Day:

        <h2 class="text-danger-subtle ">Your Nutrition Journal</h2>
      </h1>
      <hr class="border border-info border-2 opacity-100">

      <p class="lead text-info-subtle text-start mb-4">
        At Meal-A-Day, we believe the simplicity is the key. And we made it simple for you.
      </p>
      <p class="lead text-info-subtle text-start mb-4">
        Say goodbye to the frustration of traditional note-taking and complexity of other apps, say Hello to an
        intuitive and user-friendly way of monitoring your meals.
      </p>
      {{#if logged_in}}
      <p class="text-info-subtle emphasis mt-4">Welcome, {{user}} </p>
      <a class="btn btn-lg btn-info border-4 px-4 mb-4 shadow-sm" href="/dashboard">Go to your Dashboard</a>
      {{else}}
        <a class="btn btn-info border-4 px-4 mt-4 emphasis text-uppercase shadow" href="/register">Register</a> 
      <p class="text-info-subtle mt-4">Already have an account? 
      <a href="/login" class="link-info  mb-4 ">Login
        here</a></p>
      {{/if}}
    </div>
    <div class="col-lg-5 position-relative overflow-hidden m-0 p-0">
      <picture class="position-relative">
        <source srcset="/images/inhero.jpg" media="(min-width: 800px)">
        <source srcset="/images/inhero-m.jpg" media="(max-width: 640px)">
        <img src="/images/inhero.jpg"
          class="position-lg-absolute bottom-0 end-0 start-0 w-100 h-100 object-fit-cover d-block p-0 m-0"
          alt="A-Meal-A-Day" loading="lazy" decoding="async" />
      </picture>
    </div>

  </div>


</main>