const button = document.querySelector('button');
const result = document.querySelector('.result');

const predictions = [
    'You will discover a hidden talent within yourself today.',
    'An unexpected opportunity will present itself to you soon.',
    'You will receive a compliment that brightens your day.',
    'Today, you will find inspiration in the world around you.',
    'A small gesture of kindness from a stranger will touch your heart today.',
    'You will overcome a challenge with grace and resilience.',
    'An exciting adventure awaits you in the near future.',
    'You will experience a moment of pure joy that fills your soul.',
    'A new and exciting chapter of your life is about to begin.',
    'You will have a meaningful conversation that deepens a connection with someone special.'
];

button.addEventListener('click', () => {
  const prediction = predictions[Math.floor(Math.random() * predictions.length)];
  result.textContent = prediction;
});