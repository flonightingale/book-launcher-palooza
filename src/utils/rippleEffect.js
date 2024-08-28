export function createWaves(element) {
  const waveCount = 6;
  const waves = [];
  const lagFactors = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3]; // Reduced lag factors for smoother trailing

  for (let i = 0; i < waveCount; i++) {
    const wave = document.createElement('div');
    wave.classList.add('wave');
    element.appendChild(wave);
    waves.push({ element: wave, x: 0, y: 0 });
  }

  function animateWaves(targetX, targetY) {
    waves.forEach((wave, index) => {
      const size = (index + 1) * 15; // Increased size for better visibility
      const lagFactor = lagFactors[index];

      // Update wave position with enhanced lag
      wave.x += (targetX - wave.x - size / 2) * lagFactor;
      wave.y += (targetY - wave.y - size / 2) * lagFactor;

      wave.element.style.left = `${wave.x}px`;
      wave.element.style.top = `${wave.y}px`;
      wave.element.style.width = `${size}px`;
      wave.element.style.height = `${size}px`;
      wave.element.style.opacity = 1 - (index / waveCount); // Fade out smaller waves
    });
  }

  let mouseX = element.clientWidth / 2;
  let mouseY = element.clientHeight / 2;

  element.addEventListener('mousemove', (event) => {
    const rect = element.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
  });

  function update() {
    animateWaves(mouseX, mouseY);
    requestAnimationFrame(update);
  }

  update();
}
