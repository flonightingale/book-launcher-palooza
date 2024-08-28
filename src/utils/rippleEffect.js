export function createWaves(element) {
  for (let i = 0; i < 3; i++) {
    const wave = document.createElement('div');
    wave.classList.add('wave');
    element.appendChild(wave);
  }

  // Add subtle mouse interaction
  element.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    element.style.setProperty('--mouse-x', x);
    element.style.setProperty('--mouse-y', y);
  });
}
