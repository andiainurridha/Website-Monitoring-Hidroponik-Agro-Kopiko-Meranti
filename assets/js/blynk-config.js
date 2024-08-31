// Token Blynk
const BLYNK_AUTH_TOKEN = "JVijxoKyqc7dkyxiyKc9Hj6RVBCd2K0u"; // Ganti dengan token Blynk Anda

// URL API Blynk
const suhuUrl = `https://blynk.cloud/external/api/get?token=${BLYNK_AUTH_TOKEN}&V0`; // Suhu pada V0
const phUrl = `https://blynk.cloud/external/api/get?token=${BLYNK_AUTH_TOKEN}&V1`; // pH pada V1
const tdsUrl = `https://blynk.cloud/external/api/get?token=${BLYNK_AUTH_TOKEN}&V2`; // TDS pada V2

// Fungsi untuk mengambil data dari Blynk
async function fetchBlynkData() {
  try {
    const timestamp = new Date().toLocaleTimeString(); // Waktu saat data diambil

    // Mengambil data suhu
    const suhuResponse = await fetch(suhuUrl);
    let suhuData = parseFloat(await suhuResponse.text()); // Konversi ke float
    suhuData = suhuData.toFixed(1); // Atur menjadi 1 desimal
    document.getElementById("suhu").textContent = suhuData;
    updateChart(window.chartSuhu, timestamp, suhuData); // Update grafik suhu

    // Mengambil data pH
    const phResponse = await fetch(phUrl);
    let phData = parseFloat(await phResponse.text()); // Konversi ke float
    phData = phData.toFixed(2); // Atur menjadi 2 desimal
    document.getElementById("ph").textContent = phData;
    updateChart(window.chartPh, timestamp, phData); // Update grafik pH

    // Mengambil data TDS
    const tdsResponse = await fetch(tdsUrl);
    let tdsData = parseFloat(await tdsResponse.text()); // Konversi ke float
    document.getElementById("tds").textContent = tdsData;
    updateChart(window.chartTds, timestamp, tdsData); // Update grafik TDS
  } catch (error) {
    console.error("Error fetching data from Blynk:", error);
    document.getElementById("suhu").textContent = "Error";
    document.getElementById("ph").textContent = "Error";
    document.getElementById("tds").textContent = "Error";
  }
}

// Panggil fungsi fetchBlynkData secara berkala setiap 5 detik
setInterval(fetchBlynkData, 5000);
