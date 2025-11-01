const body = document.body;
const cursor = document.querySelector('.cursor');

// Subtle screen flicker
setInterval(() => {
  body.style.opacity = 0.98 + Math.random() * 0.02;
}, 120);

// Move the circular cursor
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
