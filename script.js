const promoBanner = document.getElementById('promoBanner');
const gportalBanner = document.getElementById('gportalBanner');

function shakeBanner(banner) {
  banner.classList.add('shake');
  setTimeout(() => {
    banner.classList.remove('shake');
  }, 400); // Remove the shake class after the animation completes
}

function showBanners() {
  shakeBanner(promoBanner);  // Shake promo banner
  shakeBanner(gportalBanner);  // Shake G-Portal banner
}

// Apply the shake effect every 5 seconds
setInterval(showBanners, 5000);
