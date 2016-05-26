$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var name1Input = $("input#name").val();
    var address1Input = $("input#address").val();
    var state1Input = $("input#state").val();
    var city1Input = $("input#city").val();
    var zip1Input = $("input#zip").val();
    var date1Input = $("input#date").val();

    $(".name1").text(name1Input);
    $(".address1").text(address1Input);
    $(".state1").text(state1Input);
    $(".city1").text(city1Input);
    $(".zip1").text(zip1Input);
    $(".date1").text(date1Input);

    $("#letter").show();
    $("#blanks").hide();

    event.preventDefault();
  });
});
