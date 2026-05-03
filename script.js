const btn = document.getElementById("portfolioBtn");
const menu = document.getElementById("portfolioMenu");

btn.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});
// ===== TYPING EFFECT =====
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["MD SAJID", "FRONTEND DEVELOPER", " ALSO A STUDENT"];
const typingDelay = 120;
const erasingDelay = 80;
const newTextDelay = 1500;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250);
});
// ===== CUSTOM CURSOR =====

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = mouseX + "px";
  cursorDot.style.top = mouseY + "px";
});

// smooth follower animation
function animateCursor() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;

  cursorOutline.style.left = outlineX + "px";
  cursorOutline.style.top = outlineY + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();

// hover effect on links & buttons
const hoverItems = document.querySelectorAll("a, button");

hoverItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1.8)";
    cursorOutline.style.borderWidth = "3px";
  });

  item.addEventListener("mouseleave", () => {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
    cursorOutline.style.borderWidth = "2px";
  });
});
// ===== SOCIAL TYPING EFFECT (ONE TIME) =====

const socials = document.querySelectorAll(".typing-social");

socials.forEach((item, index) => {
  const text = item.textContent;
  item.textContent = "";

  setTimeout(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        item.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 80);
  }, index * 500);
});
// Smooth Fade Animation

const right = document.querySelector(".about-right");

window.addEventListener("scroll", () => {

let position = right.getBoundingClientRect().top;
let screen = window.innerHeight;

if(position < screen - 150){
    right.style.opacity = "1";
    right.style.transform = "translateY(0)";
}

});

right.style.opacity = "0";
right.style.transform = "translateY(80px)";
right.style.transition = "1s";
// Scroll Reveal Animation

const boxes = document.querySelectorAll(".interest-box");

window.addEventListener("scroll", () => {

boxes.forEach((box, index) => {

let pos = box.getBoundingClientRect().top;
let screen = window.innerHeight;

if(pos < screen - 100){

box.style.opacity = "1";
box.style.transform = "translateY(0)";
box.style.transition = `0.6s ease ${index * 0.1}s`;

}

});

});

// initial hidden
boxes.forEach(box => {
box.style.opacity = "0";
box.style.transform = "translateY(50px)";
});
  // Skill Animation On Scroll

const fills = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {

fills.forEach(fill => {

let pos = fill.getBoundingClientRect().top;
let screen = window.innerHeight;

if(pos < screen - 100){
    fill.style.width = fill.classList[1].replace(/[a-z]/g,"") + "%";
}

});

});
// Scroll Fade Animation

const hire = document.querySelector(".hire");

window.addEventListener("scroll", () => {

let pos = hire.getBoundingClientRect().top;
let screen = window.innerHeight;

if(pos < screen - 100){
hire.style.opacity = "1";
hire.style.transform = "translateY(0)";
}

});

hire.style.opacity = "0";
hire.style.transform = "translateY(80px)";
hire.style.transition = "1s";
// EMAIL FORM
document.getElementById("emailForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Email submitted successfully ✅");
});

// SCROLL TOP
document.getElementById("topBtn").onclick = () =>{
  window.scrollTo({top:0, behavior:"smooth"});
};
