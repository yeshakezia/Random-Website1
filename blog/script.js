// Toggle content for article
function toggleContent(btn) {
    const article = btn.closest('article');
    article.classList.toggle('expanded');
    btn.textContent = article.classList.contains('expanded') ? 'Tutup' : 'Baca Selengkapnya';
  }

  document.getElementById('searchInput').addEventListener('keyup', function (e) {
    const query = e.target.value.toLowerCase();
    const articles = document.querySelectorAll('article');

    for (const article of articles) {
      const title = article.querySelector('h2').textContent.toLowerCase();
      if (title.includes(query) && query.trim() !== "") {
        article.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Highlight sementara
        article.style.boxShadow = '0 0 10px 2px #3b82f6';
        setTimeout(() => {
          article.style.boxShadow = '';
        }, 1500);

        break; // Cuma scroll ke yang pertama cocok
      }
    }
  });

  // Toggle sidebar visibility
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  
  // Close sidebar if clicked outside
  document.addEventListener('click', function (e) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
  
    // Check if clicked outside the sidebar and the button
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  // Kode di atas …

// Tombol Kembali
document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Jika ada history, kembali; kalau tidak, redirect ke halaman utama
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = 'file:///C:/Users/hi/Desktop/Website%20Project/index.html'; // ganti '/' dengan URL fallback jika perlu
      }
    });
  }
});

  
  