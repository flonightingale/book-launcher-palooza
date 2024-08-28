export function createRipples(element) {
  const createRipple = () => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    element.appendChild(ripple);

    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    const x = Math.random() * element.offsetWidth;
    const y = Math.random() * element.offsetHeight;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 3000);
  };

  // Create initial ripples
  for (let i = 0; i < 50; i++) {
    createRipple();
  }

  // Create new ripples periodically
  setInterval(createRipple, 100);

  // Create ripples on mousemove (with reduced frequency and influence)
  let lastRippleTime = 0;
  element.addEventListener('mousemove', (event) => {
    const currentTime = Date.now();
    if (currentTime - lastRippleTime > 1000) { // Only create a ripple every 1000ms
      const ripple = document.createElement('div');
      ripple.classList.add('ripple');
      element.appendChild(ripple);

      const size = Math.random() * 5 + 3; // Even smaller size for cursor ripples
      const x = event.clientX - element.getBoundingClientRect().left - size / 2;
      const y = event.clientY - element.getBoundingClientRect().top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      setTimeout(() => {
        ripple.remove();
      }, 3000);

      lastRippleTime = currentTime;
    }
  });
}
