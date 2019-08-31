window.onscroll = function(e) {
  s = window.scrollY;
  d = document.body.clientHeight;
  w = window.innerHeight;
  p = (s / (d - w)) * 100;
  document.getElementsByClassName("progress-bar")[0].value = p;
};
function submitForm() {
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const data = { name, subject, email, message };
  console.log(data);
  $.post("test.php", data);
  return false;
}
