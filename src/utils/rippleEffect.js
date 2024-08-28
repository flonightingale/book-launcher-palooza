export function createRipples(element) {
  const createRipple = () => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    element.appendChild(ripple);

    const size = Math.random() * 20 + 10; // Random size between 10px and 30px
    const x = Math.random() * element.offsetWidth;
    const y = Math.random() * element.offsetHeight;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 4000);
  };

  // Create initial ripples
  for (let i = 0; i < 20; i++) {
    createRipple();
  }

  // Create new ripples periodically
  setInterval(createRipple, 300);

  // Create ripples on mousemove (with reduced frequency)
  let lastRippleTime = 0;
  element.addEventListener('mousemove', (event) => {
    const currentTime = Date.now();
    if (currentTime - lastRippleTime > 500) { // Only create a ripple every 500ms
      const ripple = document.createElement('div');
      ripple.classList.add('ripple');
      element.appendChild(ripple);

      const size = Math.random() * 10 + 5; // Smaller size for cursor ripples
      const x = event.clientX - element.getBoundingClientRect().left - size / 2;
      const y = event.clientY - element.getBoundingClientRect().top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      setTimeout(() => {
        ripple.remove();
      }, 4000);

      lastRippleTime = currentTime;
    }
  });
}
