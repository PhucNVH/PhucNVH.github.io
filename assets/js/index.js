$(window).scroll(function(event) {});

window.onscroll = function(e) {
  s = window.scrollY;
  d = document.body.clientHeight;
  w = window.innerHeight;
  p = (s / (d - w)) * 100;
  document.getElementsByClassName("progress-bar")[0].value = p;
};
