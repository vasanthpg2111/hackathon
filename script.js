// script.js

let currentSection = 0;
const sections = document.querySelectorAll("section");

function nextSection(id) {
  sections.forEach(section => section.style.display = "none");
  document.getElementById(id).style.display = "flex";
}

function selectDriver(button) {
  document.querySelectorAll('.driver-btn').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
}

window.onload = () => {
  nextSection("loginSection");

  if (document.getElementById("map")) {
    const map = L.map('map').setView([13.0827, 80.2707], 13); // Chennai coords
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker;
    map.on('click', function(e) {
      if (marker) map.removeLayer(marker);
      marker = L.marker(e.latlng).addTo(map);
    });
  }
};
