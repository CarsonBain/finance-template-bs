$(function() {
  //insert description text under first section
  var descText = "Are your assets working for you? Meet with us to find out.";
  var button = '<button type="button" class="btn btn-primary btn-lg">Lets Talk</button>';
  $('<div class="text-center py-4"><h2 class="p-4">' + descText + '</h2>' + button + '</div>').insertBefore('.section-2 .container-fluid');


  /*---confirmaton alert using jquery plugin (https://github.com/austenliao/bootstrap-alert) to style browser confirmation windows with bootstrap.
  i wanted to make the default confirmation look nicer without using modals.
  without this plug in, the code would be the following:

  --------
  $('#disclaimer-link').on('click', function (event) {
      return confirm("Are you sure you want to proceed?");
    });

  --------
  */

  /*--confirmation alert--*/

  $('#disclaimer-link').on('click', function(event) {
    event.preventDefault();
    $.bsAlert.confirm("Click OK to proceed to the link destination", function() {
      window.location.href = $('#disclaimer-link').attr('href');
    });

  });

});
