(function ($) {
    $('.edit-profile').on('click', function (e) {
     e.preventDefault();
     const inputs = $(this).parents().children('.form-control-plaintext');
     $(this).hide();
     $(this).next().show();
     inputs.toggle('form-control m-3 form-control-plaintext');
    });
    $('.save-profile').on('click', function (e) {
     e.preventDefault();
     const id = $(this).attr('data-id');
     console.log(id);
     const editedProfile = {
      name: $(this).parents().children('.user-name').val(),
      height: $(this).parents().children('.user-height').val(),
      weight: $(this).parents().children('.user-weight').val(),
     };
     console.log(editedProfile);
     fetch(`/api/profile/${id}`, {
      method: 'PUT',
      body: JSON.stringify(editedProfile),
      headers: {
       'Content-Type': 'application/json',
      },
     });
     document.location.replace('/profile');
    });
   })(jQuery);
   