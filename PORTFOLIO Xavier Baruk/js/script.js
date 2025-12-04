document.addEventListener("DOMContentLoaded", () => {

  const map = L.map("map").setView([51.219, 4.47], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap-bijdragers"
  }).addTo(map);

  L.marker([51.219, 4.47])
    .addTo(map)
    .bindPopup("Deurne, Antwerpen")
    .openPopup();
});
