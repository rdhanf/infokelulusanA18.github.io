function showSearch() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("search").classList.remove("hidden");
}

function checkGraduation() {
  const nisn = document.getElementById("nisnInput").value.trim();
  const resultDiv = document.getElementById("result");
  const data = studentData.find(s => s.NISN === nisn);

  if (data) {
    resultDiv.innerHTML = `
      <p><strong>NISN:</strong> ${data.NISN}</p>
      <p><strong>Nama:</strong> ${data.Nama}</p>
      <p><strong>Kelas:</strong> ${data.Kelas}</p>
      <p><strong>Status:</strong> ${data.Status}</p>
      <p><strong>Keterangan:</strong> ${data.KETERANGAN}</p>
    `;
    startConfetti();
    setTimeout(stopConfetti, 400);
  } else {
    resultDiv.innerHTML = "<p style='color: red;'>NISN tidak ditemukan. Periksa kembali.</p>";
  }
}

