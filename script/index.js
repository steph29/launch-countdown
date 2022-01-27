var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var handle = function () {
  var date = new Date();
  var event = new Date("Sept 10 16:00:00 2022");
  var remainingTime = (event - date) / 1000;
  console.log(remainingTime);
  var day = date.getDate();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  console.log(sec);
  day = Math.floor(remainingTime / (60 * 60 * 24));
  days.textContent = day < 10 ? "0" + day : day;
  hour = Math.floor((remainingTime - day * 60 * 60 * 24) / (60 * 60));
  hours.textContent = hour < 10 ? "0" + hour : hour;
  min = Math.floor(
    (remainingTime - (day * 60 * 60 * 24 + hour * 60 * 60)) / 60
  );
  minutes.textContent = min < 10 ? "0" + min : min;
  sec = Math.floor(
    remainingTime - (day * 60 * 60 * 24 + hour * 60 * 60 + min * 60)
  );
  seconds.textContent = sec < 10 ? "0" + sec : sec;
};
setInterval(handle, 1000);
handle();
