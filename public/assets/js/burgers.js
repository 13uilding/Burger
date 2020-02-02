// Make sure we wait to attach our handlers until the DOM is fully lo aded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var state = $(this).data("state");

    var newstate = {
      devoured: !state
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newstate
    }).then(
      function() {
        console.log("changed devoured to", newstate);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
//   <div class="form-group">
//   <label for="devoured">Devoured?</label><br>
//   <input type="radio" name="devoured" value="1">Devoured!<br>
//   <input type="radio" name="devoured" value="0" checked>Waiting!
// </div>

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: "0"
    };
    console.log("adding burger");
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

