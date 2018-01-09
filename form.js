


  $("#contact-form").on("submit", function(event){
    var name = $("#inputName");
    var email = $("#InputEmail");
    var message = $("#FormControlTextarea");

    if (name.length === 0 || email.length === 0 ) {
      alert("Please submit a name and email");
    }
    else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/cmatson93@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      event.preventDefault();
        $(this).get(0).reset();
        alert("Message Sent");
    }
  })



// $("#heads").on("click", function() {
//   headsCount++;
//   $("#heads-chosen").text(headsCount);
//   $("#guess").html("<b>Heads</b>");
//   flipThatCoin(0);
// });