define('countdown', function () {
   
  var time = "2020/09/14";
  $("#countdown").countdown(time, function(event) {
    $(this).html(event.strftime(
    
    ' '
    + '<span class="badge badge-dark time">%-D <br>day%!d </span>'
    + '<span class="badge badge-dark time">%H <br>hr </span>'
    + '<span class="badge badge-dark time">%M <br>min </span>'
    + '<span class="badge badge-dark time">%S <br>sec</span>'));
  });
});
