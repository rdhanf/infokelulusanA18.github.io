function showForm() {
  document.getElementById("welcomePage").classList.add("hidden");
  document.getElementById("mainPage").classList.remove("hidden");
}

async function checkGraduation() {
  const nisn = document.getElementById("nisnInput").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Memuat data...";

  try {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTWwxJ6B0f7cPd8YPeXxJZtFzW5JEH5RM76uhLj0tavh6yPRN_wlqByU_FV0SuyD6D526qpmLTWTgNl/pub?output=csv');
    const data = await response.text();
    const rows = data.split("\n").map(row => row.split(","));
    const headers = rows[0];
    const nisnIndex = headers.indexOf("NISN");

    const found = rows.find((row, index) => index > 0 && row[nisnIndex].trim() === nisn);

    if (found) {
      const name = found[headers.indexOf("Nama")];
      const nisn = found[headers.indexOf("NISN")];
      const kelas = found[headers.indexOf("Kelas")];
      const status = found[headers.indexOf("Status")];
      const keterangan = found[headers.indexOf("Keterangan")];

      resultDiv.innerHTML = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>NISN:</strong> ${nisn}</p>
        <p><strong>Kelas:</strong> ${kelas}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Keterangan:</strong> ${keterangan}</p>
      `;

      startConfetti();
      setTimeout(stopConfetti, 5000);
    } else {
      resultDiv.innerHTML = "<p style='color:red;'>Data tidak ditemukan. Periksa kembali NISN Anda.</p>";
    }
  } catch (err) {
    resultDiv.innerHTML = "<p style='color:red;'>Gagal memuat data. Silakan coba lagi.</p>";
  }
}

// 🎉 Konfeti (simple confetti using canvas)
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      tilt: Math.random() * 10 - 10
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
    ctx.fill();
    c.y += c.d * 0.3;
    c.x += Math.sin(c.tilt) * 2;

    if (c.y > canvas.height) {
      confetti[i] = {
        x: Math.random() * canvas.width,
        y: -10,
        r: c.r,
        d: c.d,
        color: c.color,
        tilt: c.tilt
      };
    }
  });
}

let animationId;
function startConfetti() {
  createConfetti();
  animationId = setInterval(drawConfetti, 30);
}

function stopConfetti() {
  clearInterval(animationId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti = [];
}
