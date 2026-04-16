document.getElementById("next-btn").addEventListener("click", function () {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("members").style.display = "block";
});

document.getElementById("back-btn").addEventListener("click", function () {
  document.getElementById("members").style.display = "none";
  document.getElementById("welcome").style.display = "flex";
});

const nextBtn = document.getElementById("next-btn");
const welcome = document.getElementById("welcome");
const members = document.getElementById("members");

nextBtn.addEventListener("click", () => {
  welcome.style.display = "none";
  members.style.display = "block";
});


// Stars background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);
let stars = [];

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

function createStars(count) {
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.5,
      vx: -0.5 + Math.random(),
      vy: Math.random() * 0.8 + 0.2,
      alpha: Math.random(),
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let star of stars) {
    ctx.globalAlpha = star.alpha;
    ctx.moveTo(star.x, star.y);
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
  }
  ctx.fill();
  updateStars();
}

function updateStars() {
  for (let star of stars) {
    star.x += star.vx;
    star.y += star.vy;
    if (star.y > h || star.x > w || star.x < 0) {
      star.x = Math.random() * w;
      star.y = 0;
    }
  }
}

function animateStars() {
  drawStars();
  requestAnimationFrame(animateStars);
}

createStars(150);
animateStars();
