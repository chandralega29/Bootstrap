const roles = ["Developer", "Designer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const textElement = document.getElementById("text");
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    charIndex++;
    textElement.textContent = currentRole.substring(0, charIndex);
    if (charIndex === currentRole.length) {
      setTimeout(() => isDeleting = true, 1000);
    }
  } else {
    charIndex--;
    textElement.textContent = currentRole.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();
