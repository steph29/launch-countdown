var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

function card() {
  var div = document.createElement("div");
  div.style.width = "100px";
  div.style.textAlign = "center";
  div.style.verticalAlign = "center";
  div.style.height = "60px";
  div.style.borderRadius = "5px";
  div.style.background = "lightgray";
  div.style.color = "white";
  div.innerHTML = "Hello";
  document.body.appendChild(div);
}

card();
