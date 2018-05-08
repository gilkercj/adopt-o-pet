$(function() {
    $(".adopted").on("click", function(event) {
      var id = $(this).data("id");
      var newAdopt = $(this).data("newAdopt");
  

      $.ajax("/pets" + id, {
        type: "PUT",

      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newPet = {
        name: $("#pet-name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/pets", {
        type: "POST",
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});