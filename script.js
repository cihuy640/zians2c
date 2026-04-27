const button = document.getElementById("tombol");
const text = document.getElementById("woilah");

button.addEventListener("click", () => {
  // 1. Kita matiin dulu tombolnya biar ga bisa dispam klik sama user usil!
  button.disabled = true;

  // 2. Bikin wadah buat nyimpen angka mulai dari 3
  let detik = 5;

  // 3. Ubah teks pertama kali pas diklik, sekalian nampilin angka 3-nya
  // Catatan: Pake tanda kutip miring (backtick ` `) di sebelah tombol angka 1 di keyboard lu ya cik!
  text.textContent = `Goodboy AWOKAAEKAKWO, lu udh jadi jomokers, anjayy sigma abiz (${detik})`;
  text.style.transform = "scale(1.0)";

  // 4. Nyalain mesin hitung mundurnya (setInterval)
  const hitungMundur = setInterval(() => {
    detik--; // Ini artinya "kurangin angka detiknya sebanyak 1"

    if (detik > 0) {
      // Kalau angkanya masih 2 atau 1, update teks di layar!
      text.textContent = `Goodboy AWOKAAEKAKWO, lu udh jadi jomokers, anjayy sigma abiz (${detik})`;
    } else {
      // Kalau angkanya udah 0, saatnya berhentiin mesinnya cik!
      clearInterval(hitungMundur); 

      // Balikin teks ke mode awal
      text.textContent = "Pencet buat jadi jomokers";
      text.style.transform = "scale(1.0)";

      // Jangan lupa nyalain lagi tombolnya biar bisa diklik ulang!
      button.disabled = false;
    }
  }, 1000); // <-- 1000 ini artinya mesinnya diulang setiap 1 detik (1000 milidetik)
});
