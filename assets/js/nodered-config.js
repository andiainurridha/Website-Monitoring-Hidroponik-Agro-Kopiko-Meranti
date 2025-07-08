const websocketURL = "ws://3.91.230.205:1880/ws/mqtt"; // Ganti dengan IP EC2 kamu
const ws = new WebSocket(websocketURL);

ws.onopen = () => {
  console.log("Terhubung ke WebSocket Node-RED");
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("Data diterima:", data); // Verifikasi data yang diterima

  document.getElementById("ph").textContent = data.ph.toFixed(1);
  document.getElementById("tds").textContent = data.tds.toFixed(2);
  document.getElementById("suhu").textContent = data.suhu.toFixed(1);

  // Update grafik dengan data suhu
  updateChart(chartSuhu, new Date().toLocaleTimeString(), data.suhu);
  updateChart(chartPh, new Date().toLocaleTimeString(), data.ph);
  updateChart(chartTds, new Date().toLocaleTimeString(), data.tds);
};

ws.onerror = function (error) {
  console.log("WebSocket Error: ", error);
};

ws.onclose = () => {
  console.warn("Koneksi WebSocket terputus.");
};
