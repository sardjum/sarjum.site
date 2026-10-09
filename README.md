# sarjum.site — situs statis Hidayat Sarjum S.T.

Situs konsultasi pribadi berbahasa Indonesia, tanpa backend, tanpa build, dan tanpa analytics. Belum dideploy.

## Berkas publik

- `index.html` — konten, SEO, canonical `https://sarjum.site/`, JSON-LD Person.
- `styles.css` — tampilan editorial charcoal / ivory / copper, responsive, fokus keyboard, reduced motion, dan print.
- `app.js` — menu seluler dan penyusunan pesan WhatsApp.
- `portrait-source.jpeg` — foto 300 × 400 yang diekstrak dari CV yang diberikan; tidak menyertakan halaman CV.
- `favicon.svg` — monogram pribadi, bukan logo PLN.
- `robots.txt` dan `sitemap.xml` — petunjuk pengindeksan.

## Pratinjau lokal

Buka `index.html` langsung, atau jalankan dari folder ini:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Lalu kunjungi `http://127.0.0.1:8080`. Google Fonts bersifat opsional; jika jaringan tidak tersedia, fallback Arial dan Georgia tetap bekerja. Font eksternal menghubungi layanan Google Fonts. Tidak ada cookie atau local storage yang dibuat oleh kode situs.

## Publikasi di Hostinger (manual; belum dilakukan)

1. Pastikan domain `sarjum.site` sudah terhubung dengan paket hosting website, bukan hanya halaman parked domain.
2. Cadangkan konten `public_html` yang ada sebelum mengganti apa pun.
3. Unggah **hanya berkas publik** di atas ke document root domain, biasanya `public_html/`, dengan folder `` dipertahankan. `index.html` harus langsung di document root, bukan dalam subfolder `sarjum-site-v1`.
4. Jangan unggah CV sumber, README, script pengujian, laporan QA, atau screenshot QA. CV mengandung data pribadi yang sengaja tidak dipublikasikan.
5. Aktifkan SSL untuk `sarjum.site` dan arahkan HTTP serta varian www ke `https://sarjum.site/` menggunakan pengaturan hosting. Periksa bahwa tidak ada halaman default/index.php yang mengambil prioritas di atas `index.html`.
6. Uji HTTPS, foto, CSS, menu seluler, formulir, email, FAQ, canonical, robots, dan sitemap pada domain sebenarnya. Tidak diperlukan Node.js, database, API key, atau plugin.

## Alur formulir dan privasi

Formulir tidak mengirim email, tidak menyimpan data, dan tidak mengirim pesan otomatis. Setelah validasi, JavaScript membangun tautan `wa.me` dengan pesan ter-URL-encode. Pengunjung harus mengeklik tautan, meninjau pesan di WhatsApp, lalu mengirim sendiri. Data formulir baru diteruskan ke WhatsApp ketika tautan dibuka. Mengedit isian akan membatalkan tautan lama agar tidak mengirim ringkasan yang kedaluwarsa. Jangan meminta dokumen rahasia lewat formulir ini.

Nomor tujuan: `6285394523127`. Email: `hidayatsarjum@gmail.com`.

## Dasar konten dan batas klaim

Konten profesional diringkas dari `Hidayat_Sarjum_CV_with_Photo.pdf` yang disediakan pengguna. Foto diperiksa secara visual: headshot, tanpa logo atau tulisan identitas tambahan. Pendidikan, jabatan, pelatihan, dan contoh pekerjaan mengikuti CV. Layanan adalah usulan ruang lingkup konsultasi berdasarkan kompetensi tersebut; ketersediaan, biaya, dan kewenangan perlu dikonfirmasi sebelum pekerjaan.

- Riwayat proyek diberi label pengalaman profesional, bukan klien independen.
- Situs bukan kanal resmi atau representasi PT PLN (Persero).
- Tidak ada logo PLN, testimoni, klaim hasil komersial, atau metrik buatan.
- Sertifikasi Level 4 ditampilkan sebagai **historis, berakhir Agustus 2026**, bukan aktif.
- Tanggal lahir, status keluarga, nomor sertifikat, serta CV lengkap tidak dipublikasikan.
- Label jabatan 'kini' mengikuti CV; tinjau kembali ketika profil berubah.
- Tidak ada janji pengurusan SLO, izin, atau persetujuan utilitas.

## Pemeliharaan

Perbarui konten profesional dan status sertifikasi hanya berdasarkan dokumen yang terverifikasi. Jika mengganti domain, ubah canonical, Open Graph, JSON-LD, robots, dan sitemap. Sebelum publikasi, pemilik perlu menyetujui daftar layanan serta kesesuaiannya dengan kewajiban pekerjaan dan perizinan yang berlaku.
