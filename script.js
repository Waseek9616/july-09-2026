// ===============================
// Portfolio Website JavaScript
// ===============================

// Contact Form Button
const sendBtn = document.getElementById("sendBtn");

if (sendBtn) {
  sendBtn.addEventListener("click", function (e) {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    document.querySelector("form").reset();
  });
}

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Scroll to Top
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Navbar Active Link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});

// Fade Animation
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.classList.add("fade-up");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

sections.forEach((section) => observer.observe(section));

// Typing Effect
const title = document.querySelector(".hero h4");

const text = "Linux | DevOps Engineer | AWS Learner";

let index = 0;

function typeWriter() {
  if (index < text.length) {
    title.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeWriter, 80);
  }
}

if (title) {
  title.innerHTML = "";

  typeWriter();
}

// Dynamic Year
const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Waseek Ahmad | All Rights Reserved.`;

// Console Message
console.log("Portfolio Website Loaded Successfully!");
