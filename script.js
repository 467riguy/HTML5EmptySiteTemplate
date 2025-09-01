const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let particles = Array.from({length: 100}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  dx: (Math.random() - 0.5) * 1.5,
  dy: (Math.random() - 0.5) * 1.5,
  r: 2 + Math.random() * 3
}));

function animate() {
  ctx.fillStyle = "rgba(15, 17, 21, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#1b86f9";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();
