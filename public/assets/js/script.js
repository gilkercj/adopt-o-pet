// $(function() {
//     $(".adopt").on("click", function(event) {
//       var id = $(this).data("id");
//       var newAdopt = $(this).data("newAdopt");
  

//       $.ajax("/pets" + id, {
//         type: "PUT",
//         adopted: 1,
//       }).then(
//         function() {
//           location.reload();
//         }
//       );
//     });
  
//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newPet = {
//         name: $("#pet-name").val().trim(),
//       };
  
//       // Send the POST request.
//       $.ajax("/pets", {
//         type: "POST",
//       }).then(
//         function() {
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
// });

$(function() {
  $(".change-adopt").on("click", function(event) {
    var id = $(this).data("id");
    var newAdopt = $(this).data("newadopt");

    var newAdoptState = {
      adopt: newAdopt
    };

    // Send the PUT request.
    $.ajax("/api/pets/" + id, {
      type: "PUT",
      data: newAdoptState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    // Send the POST request.
    $.ajax("/api/pets", {
      type: "POST",
      data: $("#new-pet").val().trim()
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});