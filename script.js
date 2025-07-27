function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.classList.remove("visible");
  });
  document.getElementById(id).classList.add("visible");
}

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    showSection("rental-choice-section");
  } else {
    alert("Please enter valid login details.");
  }
}

function handleRentalType(value) {
  if (value === "driver") {
    showSection("driver-select-section");
  } else {
    showSection("pickup-location-section");
  }
}

function initMap() {
  const defaultLoc = { lat: 13.0827, lng: 80.2707 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLoc,
    zoom: 13,
  });

  const marker = new google.maps.Marker({
    map,
    position: defaultLoc,
    draggable: true
  });

  const input = document.getElementById("map-search");
  const autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo("bounds", map);

  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();
    if (!place.geometry) return;
    map.setCenter(place.geometry.location);
    map.setZoom(15);
    marker.setPosition(place.geometry.location);
  });
}