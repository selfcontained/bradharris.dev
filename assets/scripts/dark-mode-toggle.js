let darkModeEnabled = false;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode(enabled) {
  document.documentElement.classList.toggle("dark-mode", enabled);

  darkModeEnabled = enabled;
}

function setDarkModeEnabled(enabled) {
  localStorage.setItem("dark-mode", JSON.stringify(enabled));
}

function clearDarkModeEnabled() {
  localStorage.removeItem("dark-mode");
}

document.addEventListener('DOMContentLoaded', () => {
  const $toggle = document.getElementById('dm-toggle');

  $toggle.addEventListener("change", () => {
    console.log('clicked')
    darkModeEnabled = !darkModeEnabled;

    toggleDarkMode(darkModeEnabled);
    setDarkModeEnabled(darkModeEnabled);
  });

  prefersDark.addListener((evt) => toggleDarkMode(evt.matches));

  // initialize setting
  const storageSetting = localStorage.getItem("dark-mode");
  console.log('storageSetting', storageSetting);
  if(storageSetting !== null) {
    toggleDarkMode(storageSetting === "true");
    $toggle.checked =storageSetting === "true";
  }else {
    toggleDarkMode(prefersDark.matches);
    $toggle.checked = prefersDark.matches;
  }

  setTimeout(() => {
    document.querySelector('.dark-mode-toggle-container').style.opacity = 1;
  }, 300);
});

