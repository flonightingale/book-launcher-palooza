export function createWaves(element) {
  const waveCount = 6;
  const waves = [];
  const lagFactors = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]; // Different lag factors for each wave

  for (let i = 0; i < waveCount; i++) {
    const wave = document.createElement('div');
    wave.classList.add('wave');
    element.appendChild(wave);
    waves.push({ element: wave, x: 0, y: 0 });
  }

  function animateWaves(targetX, targetY) {
    waves.forEach((wave, index) => {
      const size = (index + 1) * 10;
      const lagFactor = lagFactors[index];

      // Update wave position with lag
      wave.x += (targetX - wave.x - size / 2) * lagFactor;
      wave.y += (targetY - wave.y - size / 2) * lagFactor;

      wave.element.style.left = `${wave.x}px`;
      wave.element.style.top = `${wave.y}px`;
      wave.element.style.width = `${size}px`;
      wave.element.style.height = `${size}px`;
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
