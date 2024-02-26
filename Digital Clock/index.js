let day = document.getElementById("day");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

let hrs = document.getElementById("hrs");
let min = document.getElementById("mins");
let sec = document.getElementById("secs");

setInterval(() => {
  let currentTime = new Date();
 
day.innerHTML = currentTime.toLocaleDateString("en-US", { weekday: 'long'});
date.innerHTML = currentTime.getDate();
month.innerHTML = currentTime.toLocaleDateString("en-US", { month: 'short' });
year.innerHTML = currentTime.getFullYear();

hrs.innerHTML = (currentTime.getHours() < 10 ? "0": "") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes() < 10 ? "0": "") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds() < 10 ? "0": "") + currentTime.getSeconds();
}, 1000);