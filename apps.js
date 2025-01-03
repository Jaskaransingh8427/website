document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const aboutDeveloperBtn = document.getElementById("aboutDeveloperBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // Open modal
  aboutDeveloperBtn.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  // Close modal when clicking overlay
  overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
});
