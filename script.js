const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  burger.classList.toggle("open");
});

burger.addEventListener("click", () => {
  const spans = burger.querySelectorAll("span");
  spans[0].classList.toggle("top");
  spans[1].classList.toggle("mid");
  spans[2].classList.toggle("bot");
});

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let w, h, stars = [];

function initStars() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random() * 0.5 + 0.5,
  }));
}
function drawStars() {
  ctx.clearRect(0, 0, w, h);
  stars.forEach(s => {
    ctx.fillStyle = `rgba(0, 224, 255, ${s.z})`;
    ctx.fillRect(s.x, s.y, 2, 2);
  });
}
function anim() { drawStars(); requestAnimationFrame(anim); }

window.addEventListener("resize", initStars);
initStars(); anim();

/* ───── Scroll-reveal fade-in ───── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.25 }
);
document.querySelectorAll(".card, .timeline li").forEach(el => {
  observer.observe(el);
});
const items = document.querySelectorAll(".thread-item");

const focusObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        items.forEach(i => i.classList.remove("active"));
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6
  }
);

items.forEach(item => {
  focusObserver.observe(item);
});
VANTA.NET({
  el: ".hero", // or any section
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x00e0ff,
  backgroundColor: 0x000000,
  points: 12.00,
  maxDistance: 25.00,
  spacing: 20.00
});
/* ───── 30-day countdown ───── */
const targetTime = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days
const hEl = document.getElementById("cd-hours");
const mEl = document.getElementById("cd-min");
const sEl = document.getElementById("cd-sec");
const msEl = document.getElementById("cd-ms");

function pad(n, z = 2) {
  return n.toString().padStart(z, "0");
}

function updateCountdown() {
  let diff = targetTime - Date.now();
  if (diff < 0) diff = 0;                          // never negative

  const hours = Math.floor(diff / 3_600_000);      // 1000*60*60
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  const ms = diff % 1000;

  hEl.textContent = pad(hours, 3);                 // up to 720 hrs
  mEl.textContent = pad(minutes);
  sEl.textContent = pad(seconds);
  msEl.textContent = pad(ms, 3);

  if (diff > 0) requestAnimationFrame(updateCountdown);
}
updateCountdown();
// Animate phone sections too
document.querySelectorAll(".phone-wrapper").forEach(el => {
  observer.observe(el);
});

const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  },{threshold:.35});
  document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));

  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle("open");

      // Close others
      document.querySelectorAll(".faq-item").forEach(item => {
        if (item !== faqItem) item.classList.remove("open");
      });
    });
  });
