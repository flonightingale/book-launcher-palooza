export function createRipple(event, element) {
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');
  element.appendChild(ripple);

  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  setTimeout(() => {
    ripple.remove();
  }, 2000);
}