/* SLIDESHOW */
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

/* AUDIO */
const song01 = document.getElementById("song01");
const song02 = document.getElementById("song02");

song01.currentTime = 15;
song01.loop = true;

document.body.addEventListener("click", () => {
  song01.play();
}, { once: true });

/* TIMER */
const target = new Date("December 28, 2025 00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    clearInterval(timer);
    endBirthday();
    return;
  }

  document.getElementById("hours").innerText =
    Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0');
  document.getElementById("minutes").innerText =
    Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
  document.getElementById("seconds").innerText =
    Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
}, 1000);

/* END EVENT */
function endBirthday() {
  document.getElementById("title").style.display = "none";
  document.getElementById("timer").style.display = "none";

  song01.pause();
  song02.currentTime = 57;
  song02.play();

  const text = document.getElementById("birthdayText");
  text.classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("line1").style.display = "none";
    document.getElementById("line2").style.display = "none";
    document.getElementById("love").classList.remove("hidden");
  }, 8000);

  balloons();
  crackers();
}

/* BALLOONS */
function balloons() {
  for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.setProperty("--x", (Math.random() * 200 - 100) + "px");
    document.getElementById("balloons").appendChild(b);
    setTimeout(() => b.remove(), 3000);
  }
}

/* CRACKERS */
function crackers() {
  const c = document.getElementById("crackers");
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("div");
    s.className = "spark";
    s.style.left = "50%";
    s.style.top = "50%";
    s.style.setProperty("--x", Math.random() * 400 - 200 + "px");
    s.style.setProperty("--y", Math.random() * 400 - 200 + "px");
    c.appendChild(s);
    setTimeout(() => s.remove(), 4000);
  }
}