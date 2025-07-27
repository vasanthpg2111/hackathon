// script.js

// Show and hide sections
function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.style.display = "none");

  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
    target.scrollIntoView({ behavior: "smooth" });
    if (id === "pickup-location-section") {
      setTimeout(initLeafletMap, 200);
    }
  }
}

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    showSection("rental-choice-section");
  } else {
    alert("Please enter both username and password.");
  }
}

function handleRentalType(type) {
  if (type === "self") {
    showSection("pickup-location-section");
  } else if (type === "driver") {
    showSection("driver-select-section");
  }
}

function confirmDriverSelection() {
  showSection("pickup-location-section");
}

function confirmPickup() {
  showSection("document-upload-section");
}

function confirmDocumentUpload() {
  showSection("payment-section");
}

function confirmPayment() {
  showSection("confirmation-section");
}

// Leaflet map integration
let mapInitialized = false;
function initLeafletMap() {
  if (mapInitialized) return;

  const map = L.map("map").setView([13.0827, 80.2707], 13); // Chennai coordinates

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  let marker;
  map.on("click", function (e) {
    if (marker) map.removeLayer(marker);
    marker = L.marker(e.latlng).addTo(map);
    alert(`Pickup location set to: ${e.latlng.lat}, ${e.latlng.lng}`);
  });

  mapInitialized = true;
}

// On load, only show login section
window.onload = () => {
  const allSections = document.querySelectorAll("section");
  allSections.forEach(sec => sec.style.display = "none");
  document.getElementById("login-section").style.display = "block";
};