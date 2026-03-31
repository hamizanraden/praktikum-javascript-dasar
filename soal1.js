
// A1
const btnNav = document.querySelector('.btn-nav');
// Terjadi keselahan penulisan untuk class yang dipanggil yaitu btn-nav-salah

btnNav.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Selamat datang di TaskFlow!');
});

// A2
const heading = document.querySelector('hero-text, h1');
// terhadi kesalahan karena diawal menggunakan document.getElementById seharusnya menggunakan querySelector
heading.innerText = 'TaskFlow – Solusi Tim Modern';

// A3
const cards = document.querySelectorAll('.feature-card');

let total = 0;
for (let i = 0; i < cards.length; i++) {
  total++;
}

console.log('Jumlah fitur: ' + total);

// B1 
const btn = document.querySelector('.btn-primary');

btn.addEventListener('click', function () {
  // Simpan kondisi awal
  const teksAwal = btn.innerText;
  const warnaAwal = btn.style.backgroundColor;

  // Ubah saat diklik
  btn.innerText = 'Mendaftar...';
  btn.style.backgroundColor = '#94a3b8';

  // Kembalikan setelah 2 detik
  setTimeout(function () {
    btn.innerText = teksAwal;
    btn.style.backgroundColor = warnaAwal;
  }, 2000);
});

// B2
cards.forEach(function(card) {
  card.addEventListener('click', function() {

    // Hapus active dari semua kartu
    cards.forEach(function(item) {
      item.classList.remove('active');
    });

    // Tambahkan active ke kartu yang diklik
    card.classList.add('active');

  });
});

// B3
const input = document.getElementById('review-input');
const button = document.getElementById('review-btn');
const message = document.getElementById('review-msg');

button.addEventListener('click', function () {
  const text = input.value.trim();
  const length = text.length;

  if (length === 0) {
    message.innerText = 'Ulasan tidak boleh kosong.';
    message.style.color = '#ef4444';
  } else if (length < 10) {
    message.innerText = 'Ulasan terlalu singkat. Minimal 10 karakter.';
    message.style.color = '#f97316';
  } else {
    message.innerText = 'Ulasan berhasil dikirim! Terima kasih.';
    message.style.color = '#22c55e';
    input.value = '';
  }
});
