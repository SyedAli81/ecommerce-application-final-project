
(function ($) {
    const newFormHandler = async function (event) {
     event.preventDefault();
     event.stopPropagation();
     await fetch(`/api/meal`, {
      method: 'POST',
      body: JSON.stringify({
       food_name: $('#new_food_name').val(),
       food_type: $('#new_food_type :selected').text(),
       calories: $('#new_calories').val(),
       date: $('#new_date').val(),
      }),
      headers: { 'Content-Type': 'application/json' },
     });
   
     // document.location.replace('/dashboard');
    };
   
    $('#new-meal-form').on('submit', newFormHandler);
   })(jQuery);
   