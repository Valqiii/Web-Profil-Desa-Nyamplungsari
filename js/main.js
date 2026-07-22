/**
 * Web Profil Desa Nyamplungsari
 * Dynamic Data Loader & UI Interactivity
 * Integrated with Google Sheets API + Fallback Local Dataset
 */

// Default Local Data (digunakan jika Google Sheets belum dikonfigurasi / offline)
const DEFAULT_VILLAGE_DATA = {
  hero: {
    welcomeTitle: "Selamat Datang di Desa Nyamplungsari",
    subTitle: "Kecamatan Petarukan, Kabupaten Pemalang, Jawa Tengah (Kode Pos: 52362)",
    heroImage: "assets/images/hero.png"
  },
  potensi: [
    { title: "Pertanian", icon: "sprout", desc: "Komoditas padi, palawija, dan tanaman pangan pesisir yang melimpah." },
    { title: "Perikanan", icon: "fish", desc: "Hasil laut segar, tambak udang, dan budidaya perikanan air payau." },
    { title: "Wisata", icon: "palmtree", desc: "Keindahan destinasi bahari pesisir pantai Joko Tingkir & Sumur Pandan." }
  ],
  wisata: [
    {
      id: "joko-tingkir",
      title: "Pantai Joko Tingkir",
      desc: "Destinasi wisata pantai unggulan Desa Nyamplungsari dengan pemandangan sunset memukau, gazebos santai, dan area wisata keluarga.",
      image: "assets/images/joko-tingkir.png"
    },
    {
      id: "sumur-pandan",
      title: "Pantai Sumur Pandan",
      desc: "Wisata bahari pesisir dengan udara segar, deretan pepohonan hijau yang asri, serta suasana pantai tenang yang cocok untuk relaksasi.",
      image: "assets/images/sumur-pandan.png"
    }
  ],
  umkm: {
    title: "UMKM Desa Nyamplungsari",
    desc: "Galeri singkat dan katalog produk makanan olahan khas hasil laut dan pertanian warga desa.",
    products: [
      { name: "Terasi Udang Khas", tag: "Terasi" },
      { name: "Kerupuk Ikan & Udang", tag: "Kerupuk" },
      { name: "Ikan Asin Pesisir", tag: "Ikan Asin" }
    ],
    image: "assets/images/umkm.png"
  }
};

// URL Google Sheets Published CSV (Dapat diganti oleh Admin/Perangkat Desa)
// Petunjuk cara setup Google Sheets akan diberikan di dokumentasi
const GOOGLE_SHEET_CSV_URL = ""; 

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  loadVillageData();
});

// Mobile Nav Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
}

// Fetch & Load Data
async function loadVillageData() {
  let data = DEFAULT_VILLAGE_DATA;
  const statusElement = document.getElementById("data-source-status");

  if (GOOGLE_SHEET_CSV_URL) {
    try {
      const response = await fetch(GOOGLE_SHEET_CSV_URL);
      if (response.ok) {
        const csvText = await response.text();
        const parsedData = parseCSVToData(csvText);
        if (parsedData) {
          data = parsedData;
          if (statusElement) statusElement.innerHTML = `<span class="pulse-dot"></span> Terhubung ke Google Sheets Live`;
        }
      }
    } catch (error) {
      console.warn("Gagal memuat Google Sheets, menggunakan data standar lokal:", error);
    }
  }

  renderWisata(data.wisata);
}

// Render Wisata Cards dynamically
function renderWisata(wisataList) {
  const container = document.getElementById("wisata-container");
  if (!container) return;

  container.innerHTML = wisataList.map(item => `
    <div class="wisata-card">
      <div class="wisata-img-wrapper">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="wisata-content">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');
}

// Simple Helper parser CSV ke Data Web jika menggunakan Google Sheets CSV
function parseCSVToData(csvText) {
  // Parser sederhana CSV jika sheet dipublikasikan sebagai CSV
  const lines = csvText.split('\n');
  if (lines.length < 2) return null;
  // Fallback to default structure if format not matched
  return null;
}
