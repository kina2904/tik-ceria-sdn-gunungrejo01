const questions = [
  {
    question: "Apa fungsi keyboard?",
    options: ["Mencetak kertas", "Mengetik huruf dan angka", "Mengeluarkan suara", "Mengambil foto"],
    answer: 1
  },
  {
    question: "Alat yang digunakan untuk menggerakkan penunjuk pada layar adalah...",
    options: ["Keyboard", "Speaker", "Mouse", "Printer"],
    answer: 2
  },
  {
    question: "Sebelum mematikan laptop, sebaiknya kita...",
    options: ["Mencabut baterai", "Menggunakan menu Shut Down", "Menutup layar dengan keras", "Memukul tombol"],
    answer: 1
  },
  {
    question: "Manakah yang termasuk perangkat komputer?",
    options: ["Keyboard", "Buku tulis", "Pensil", "Penghapus"],
    answer: 0
  },
  {
    question: "Kita sebaiknya menggunakan teknologi untuk...",
    options: ["Belajar dan kegiatan positif", "Menyebarkan rahasia teman", "Mengganggu orang lain", "Bermain sepanjang hari"],
    answer: 0
  },
  {
    question: "Kata sandi sebaiknya...",
    options: ["Dibagikan kepada semua teman", "Ditulis di tempat umum", "Dijaga kerahasiaannya", "Dikirim ke orang asing"],
    answer: 2
  },
  {
    question: "Touchpad biasanya terdapat pada...",
    options: ["Laptop", "Televisi", "Kulkas", "Kipas angin"],
    answer: 0
  },
  {
    question: "Perangkat yang digunakan untuk mendengarkan suara adalah...",
    options: ["Speaker", "Keyboard", "Mouse", "Scanner"],
    answer: 0
  },
  {
    question: "Apa yang dapat kita gunakan untuk melihat gambar dan tulisan dari komputer?",
    options: ["Monitor", "Keyboard", "Mouse pad", "Flashdisk"],
    answer: 0
  },
  {
    question: "Setelah menggunakan laptop dalam waktu lama, kita sebaiknya...",
    options: ["Terus bermain tanpa berhenti", "Beristirahat sejenak", "Menekan semua tombol", "Membiarkan laptop menyala selamanya"],
    answer: 1
  }
];

const quiz = document.getElementById("quiz");

questions.forEach((q, index) => {
  const box = document.createElement("div");
  box.className = "question";
  box.innerHTML = `<h3>${index + 1}. ${q.question}</h3>` +
    q.options.map((option, i) => `
      <label class="option">
        <input type="radio" name="q${index}" value="${i}">
        ${String.fromCharCode(65 + i)}. ${option}
      </label>
    `).join("");
  quiz.appendChild(box);
});

document.getElementById("submitQuiz").addEventListener("click", () => {
  let score = 0;
  let answered = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected) {
      answered++;
      if (Number(selected.value) === q.answer) score++;
    }
  });

  const result = document.getElementById("result");
  const nilai = Math.round((score / questions.length) * 100);

  if (answered < questions.length) {
    result.textContent = `⚠️ Kamu baru menjawab ${answered} dari ${questions.length} soal. Jawab semua soal dulu ya!`;
    return;
  }

  let pesan = "Tetap semangat belajar! 💪";
  if (nilai >= 80) pesan = "Hebat! Kamu sudah sangat memahami materi TIK! 🏆";
  else if (nilai >= 60) pesan = "Bagus! Terus berlatih agar semakin pintar! 🌟";

  result.innerHTML = `Nilai kamu: <strong>${nilai}</strong><br>${pesan}`;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("themeBtn").textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
