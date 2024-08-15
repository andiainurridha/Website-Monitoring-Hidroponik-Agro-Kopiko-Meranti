function getCurrentDateTime() {
  var now = new Date();
  var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
  var dayName = days[now.getDay()];
  var day = now.getDate();
  var month = now.getMonth() + 1; // Januari dimulai dari 0
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Format waktu untuk menambahkan nol di depan angka satu digit
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format tanggal dan waktu yang akan ditampilkan
  var formattedDateTime =
    dayName +
    ", " +
    day +
    "/" +
    month +
    "/" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  // Tampilkan pada elemen HTML
  document.getElementById("currentDateTime").textContent = formattedDateTime;
}

// Panggil fungsi ini setiap detik untuk memperbarui waktu
setInterval(getCurrentDateTime, 1000);
