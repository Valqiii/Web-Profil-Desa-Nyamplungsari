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

### B. Menggunakan GitHub Pages (Langsung dari Repository Anda)
Repository GitHub Anda sudah dikonfigurasi ke: `https://github.com/Valqiii/Web-Profil-Desa-Nyamplungsari`

**Langkah Push Kode dari Komputer:**
Jalankan perintah berikut di terminal (PowerShell / Command Prompt):
```bash
git branch -M main
git push -u origin main
```

**Langkah Mempublikasikan (Hosting Gratis):**
1. Buka halaman repository Anda: [github.com/Valqiii/Web-Profil-Desa-Nyamplungsari](https://github.com/Valqiii/Web-Profil-Desa-Nyamplungsari)
2. Klik menu **Settings** (di bagian kanan atas halaman repository).
3. Di menu sebelah kiri, pilih **Pages** (pada bagian *Code and automation*).
4. Di bagian **Build and deployment** > **Branch**:
   - Pilih `main`
   - Folder tetap `/ (root)`
   - Klik **Save**.
5. Dalam 1-2 menit, website Anda akan otomatis online dan dapat diakses di:
   👉 **`https://valqiii.github.io/Web-Profil-Desa-Nyamplungsari/`**

---

## 2. Mengintegrasikan Google Sheets sebagai Backend / CMS (Opsional)

Jika perangkat desa ingin mengubah data Wisata/UMKM tanpa membuka kodingan:

1. Buat **Google Sheets** baru di Google Drive.
2. Isi data sesuai kolom (misalnya: `Judul`, `Deskripsi`, `GambarURL`).
3. Klik **File** > **Bagikan (Share)** > **Publikasikan ke Web (Publish to Web)**.
4. Pilih format **Comma-separated values (.csv)** dan klik **Publikasikan**.
5. Salin URL publikasi tersebut dan tempelkan ke variabel `GOOGLE_SHEET_CSV_URL` di file [js/main.js](file:///c:/Web%20Profil%20Desa%20Nyamplungsari/js/main.js#L38).
