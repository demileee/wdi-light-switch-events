
window.addEventListener("DOMContentLoaded", function() {

  var status, onStatus, offStatus;

  status = document.querySelector('.status');

  onStatus = "It's too bright, turn the lights off!";
  offStatus = "It's too dark, turn the lights on!";

  status.innerHTML = onStatus

  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("switch")) {
      e.target.classList.toggle("on");
      e.target.classList.toggle("off");
      document.querySelector('body').classList.toggle("light");
      document.querySelector('body').classList.toggle("dark");



      if (status.innerHTML === onStatus) {
        status.innerHTML = offStatus;
      } else if (status.innerHTML === offStatus ) {
        status.innerHTML = onStatus;
      };

    };
  });

});
