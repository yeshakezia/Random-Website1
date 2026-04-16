document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
  
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const query = this.value.toLowerCase();
  
        const gameSections = [
          { id: "growtopia", name: "growtopia" },
          { id: "AvakinLife", name: "avakin life" },
          { id: "Thesims4", name: "the sims 4" },
          { id: "GTAV", name: "gta v" },
          { id: "MobileLegends", name: "mobile legends" },
          { id: "PUBG", name: "pubg" },
          { id: "ClashOfClan", name: "clash of clan" },
          { id: "Valorant", name: "valorant" },
        ];
  
        const match = gameSections.find(section =>
          section.name.includes(query)
        );
  
        if (match) {
          document.getElementById(match.id).scrollIntoView({
            behavior: "smooth"
          });
        } else {
          alert("can't found, type again in lower case n use space!");
        }
      }
    });


const toggleBtn = document.getElementById("mode-toggle");
const modeText = document.getElementById("mode-text");

function updateIcon(isDark) {
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  modeText.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function initMode() {
  const savedMode = localStorage.getItem("mode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark = savedMode === "dark" || (!savedMode && prefersDark);
  if (isDark) document.body.classList.add("dark-mode");
  updateIcon(isDark);
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("mode", isDark ? "dark" : "light");
  updateIcon(isDark);
});

const backButton = document.getElementById("back-btn");
backButton.type = "button";

backButton.addEventListener("click", () => {
  // efek visual
  backButton.style.transform = "scale(0.95)";
  setTimeout(() => {
    backButton.style.transform = "scale(1)";

    // logika back dengan fallback
    if (window.history.length > 1) {
      window.history.back();
    }
    else if (document.referrer) {
      window.location.href = document.referrer;
    }
    else {
      // ubah ke URL beranda-mu
      window.location.href = "index.html";
    }
  }, 150);
});

  initMode();
});

