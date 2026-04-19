const nao = document.getElementById("nao");
const sim = document.getElementById("sim");

nao.addEventListener("mouseenter", () => {
  nao.style.position = "absolute";

  const maxX = window.innerWidth - nao.offsetWidth;
  const maxY = window.innerHeight - nao.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  nao.style.left = x + "px";
  nao.style.top = y + "px";
});

sim.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=SjEufywlULM";
});