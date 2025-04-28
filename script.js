// 1. Event Handling
const changeBtn = document.getElementById('changeBtn');
changeBtn.addEventListener('click', () => {
  changeBtn.textContent = "Clicked!";
  changeBtn.style.backgroundColor = "#28a745";
});

changeBtn.addEventListener('dblclick', () => {
  alert('Double-click secret unlocked!');
});

document.addEventListener('keypress', (e) => {
  console.log('You pressed: ${e.key}');
});

// 2. Image Gallery
const galleryImages = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let currentImage = 0;

const galleryImg = document.getElementById('galleryImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
  galleryImg.src = galleryImages[currentImage];
});

nextBtn.addEventListener('click', () => {
  currentImage = (currentImage + 1) % galleryImages.length;
  galleryImg.src = galleryImages[currentImage];
});

// 3. Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(c => c.classList.remove('active'));
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// 4. Form Validation
const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Real-time email validation
emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Invalid email format.";
  } else {
    emailError.textContent = "";
  }
});

// Real-time password validation
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
  } else {
    passwordError.textContent = "";
  }
});

signupForm.addEventListener('submit', (e) => {
  if (emailError.textContent || passwordError.textContent) {
    e.preventDefault();
    alert("Please fix errors before submitting.");
  }
});