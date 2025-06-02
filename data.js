const studentData = [
  { NISN: "3105144296", Nama: "AHMAD ALFARIZIH", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0104308889", Nama: "AHMAD ALIM RIADIL HAQ", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3104507783", Nama: "AHMAD AUFA RIZKI", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0081862335", Nama: "AHMAD NURRIKO", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3116982572", Nama: "ANDINI", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3097193175", Nama: "ARZIDAN AKBAR", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" }, // dikoreksi dari 3'097193175
  { NISN: "0091532739", Nama: "AYUNG WIRA GUNA", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3100039672", Nama: "AZAM AL FAZRI", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3092797728", Nama: "DESUWITA MAHARANI", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3102569577", Nama: "FATIHATUL MUFLIHA", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0094453486", Nama: "FIORENZA RAMADHANI ANDARI", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3096638319", Nama: "HANAFI FIRMANSYAH", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0094864142", Nama: "IRZI MUHAMMAD FADHEEL", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3090424970", Nama: "M.HAIKAL", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3088408717", Nama: "MAMDUH MU AFA", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3091333840", Nama: "MARWAH", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0083380183", Nama: "MUHAMAD ADJI TRISETIAWAN", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3097179782", Nama: "MUHAMAD ZIDAN RISQI", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3085348924", Nama: "MUHAMMAD HAQINNAZILI", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0107921063", Nama: "MUHAMMAD RASYID", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0099336323", Nama: "RADITHIYA ACHMADIANSYAH", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0097776733", Nama: "RAMDAN AL HAFIZ", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0097776583", Nama: "RASYA PUTRA", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0102096429", Nama: "RATU ZAHROTUNNURUSSYITA", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3095294402", Nama: "SAHWA MAILANI", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0106527907", Nama: "SISKA AMELIA", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3073123416", Nama: "SULTAN MAULANA HASANUDIN", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3107736635", Nama: "SYARIF HIDAYATULLOH", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "3103200902", Nama: "WINDI AULIA", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" },
  { NISN: "0084721282", Nama: "ZASKIA AURA RAHMADHANI", Kelas: "IX", Status: "LULUS", KETERANGAN: "Selamat atas kelulusan Anda!" }
];

function showSearch() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("search").classList.remove("hidden");
}

let confettiInterval; // Variabel untuk menyimpan interval confetti

function startConfetti() {
  confetti({
    particleCount: 100, // Jumlah partikel confetti
    spread: 70, // Seberapa luas partikel menyebar
    origin: { y: 0.6 } // Titik asal confetti (di tengah bawah)
  });

  // Untuk confetti yang terus menerus selama durasi tertentu
  confettiInterval = setInterval(() => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 500); // Setiap 0.5 detik akan memicu confetti baru
}

function stopConfetti() {
  clearInterval(confettiInterval); // Hentikan interval confetti
}

function checkGraduation() {
  const nisn = document.getElementById("nisnInput").value.trim();
  const resultDiv = document.getElementById("result");
  const data = studentData.find(s => s.NISN === nisn);

  // Hentikan confetti yang mungkin masih berjalan dari pencarian sebelumnya
  stopConfetti();

  if (data) {
    resultDiv.innerHTML = `
      <p><strong>NISN:</strong> ${data.NISN}</p>
      <p><strong>Nama:</strong> ${data.Nama}</p>
      <p><strong>Kelas:</strong> ${data.Kelas}</p>
      <p><strong>Status:</strong> ${data.Status}</p>
      <p><strong>Keterangan:</strong> ${data.KETERANGAN}</p>
    `;
    // Hanya picu confetti jika statusnya "LULUS"
    if (data.Status === "LULUS") {
      startConfetti();
      setTimeout(stopConfetti, 4000); // Confetti akan berhenti setelah 4 detik
    }
  } else {
    resultDiv.innerHTML = "<p style='color: red;'>NISN tidak ditemukan. Periksa kembali.</p>";
  }
}

