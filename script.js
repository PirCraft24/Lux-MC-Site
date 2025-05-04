// Funktion, um das Werbebanner anzuzeigen
function showAdBanner() {
  const adBanner = document.getElementById("ad-banner");
  adBanner.classList.remove("hide");  // Banner anzeigen

  // Nach 5 Sekunden das Banner wieder ausblenden
  setTimeout(function() {
    adBanner.classList.add("hide");
  }, 5000);  // Banner bleibt 5 Sekunden sichtbar
}

// Alle 15 Sekunden das Werbebanner anzeigen
setInterval(showAdBanner, 15000); // Alle 15 Sekunden

  