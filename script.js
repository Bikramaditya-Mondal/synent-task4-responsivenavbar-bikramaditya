const button = document.getElementById("menuButton");
const menu = document.getElementById("navMenu");
button.addEventListener("click", () => { menu.classList.toggle("active"); button.textContent = menu.classList.contains("active") ? "✕" : "☰"; });
document.querySelectorAll("#navMenu a").forEach(a => a.addEventListener("click", () => menu.classList.remove("active")));
