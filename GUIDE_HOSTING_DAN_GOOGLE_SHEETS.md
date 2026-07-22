# Panduan Hosting Gratis & Integrasi Google Sheets

Dokumen ini berisi panduan untuk tim KKN dan Perangkat Desa Nyamplungsari dalam mengelola dan mempublikasikan website profil desa.

---

## 1. Panduan Hosting Gratis di Netlify / GitHub Pages

### A. Menggunakan Netlify (Paling Mudah - Tinggal Drag & Drop)
1. Buka situs [netlify.com](https://www.netlify.com/) dan daftar akun gratis.
2. Pada halaman dashboard, pilih tab **"Sites"**.
3. Sediakan folder proyek `c:\Web Profil Desa Nyamplungsari`.
4. **Drag & Drop** (Tarik dan Lepas) seluruh folder proyek tersebut ke area upload Netlify.
5. Dalam 5 detik, website langsung aktif dan mendapat link URL gratis seperti `https://desa-nyamplungsari.netlify.app`.

### B. Menggunakan GitHub Pages
1. Buat akun di [github.com](https://github.com/).
2. Buat repository baru dengan nama `web-desa-nyamplungsari`.
3. Upload seluruh file ke repository tersebut.
4. Buka **Settings** > **Pages** > Pada bagian **Source**, pilih branch `main` dan klik **Save**.
5. Website akan otomatis online di `https://username.github.io/web-desa-nyamplungsari/`.

---

## 2. Mengintegrasikan Google Sheets sebagai Backend / CMS (Opsional)

Jika perangkat desa ingin mengubah data Wisata/UMKM tanpa membuka kodingan:

1. Buat **Google Sheets** baru di Google Drive.
2. Isi data sesuai kolom (misalnya: `Judul`, `Deskripsi`, `GambarURL`).
3. Klik **File** > **Bagikan (Share)** > **Publikasikan ke Web (Publish to Web)**.
4. Pilih format **Comma-separated values (.csv)** dan klik **Publikasikan**.
5. Salin URL publikasi tersebut dan tempelkan ke variabel `GOOGLE_SHEET_CSV_URL` di file [js/main.js](file:///c:/Web%20Profil%20Desa%20Nyamplungsari/js/main.js#L38).
