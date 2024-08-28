export function createWaves(element) {
  const waveCount = 6;
  const waves = [];

  for (let i = 0; i < waveCount; i++) {
    const wave = document.createElement('div');
    wave.classList.add('wave');
    element.appendChild(wave);
    waves.push(wave);
  }

  function animateWaves(mouseX, mouseY) {
    waves.forEach((wave, index) => {
      const size = (index + 1) * 10;
      const x = mouseX - size / 2;
      const y = mouseY - size / 2;
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;
      wave.style.width = `${size}px`;
      wave.style.height = `${size}px`;
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
