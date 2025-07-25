function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
}

function handleRentalType(type) {
  if (type === 'driver') {
    showSection('driver-select-section');
  } else {
    showSection('payment-section');
  }
}
