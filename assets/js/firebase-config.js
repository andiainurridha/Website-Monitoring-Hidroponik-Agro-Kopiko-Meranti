import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAgQff4cnKZkW7E39FW9nWE_HzemVfx0G8",
  authDomain: "monitoring-hidroponik-new.firebaseapp.com",
  databaseURL: "https://monitoring-hidroponik-new-default-rtdb.firebaseio.com",
  projectId: "monitoring-hidroponik-new",
  storageBucket: "monitoring-hidroponik-new.appspot.com",
  messagingSenderId: "1094140384692",
  appId: "1:1094140384692:web:015bf169612e0fc9a7cee1",
  measurementId: "G-T7WJ81HSQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Menampilkan data realtime database
function updateData() {
  const sensorRef = ref(database, "sensor/");
  onValue(sensorRef, (snapshot) => {
    const data = snapshot.val();
    const timestamp = new Date().toLocaleTimeString(); // Label waktu untuk grafik

    if (data) {
      // Update data di halaman
      document.getElementById("suhu").textContent = data.suhu ?? "N/A";
      document.getElementById("ph").textContent = data.ph ?? "N/A";
      document.getElementById("tds").textContent = data.tds ?? "N/A";

      // Update grafik suhu
      if (window.chartSuhu) {
        updateChart(window.chartSuhu, timestamp, data.suhu);
      }

      // Update grafik pH
      if (window.chartPh) {
        updateChart(window.chartPh, timestamp, data.ph);
      }

      // Update grafik TDS
      if (window.chartTds) {
        updateChart(window.chartTds, timestamp, data.tds);
      }
    } else {
      document.getElementById("suhu").textContent = "N/A";
      document.getElementById("ph").textContent = "N/A";
      document.getElementById("tds").textContent = "N/A";
    }
  });
}

// Call updateData function to fetch and update data
updateData();
