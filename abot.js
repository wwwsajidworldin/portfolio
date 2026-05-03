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
// Smooth Fade Animation

const right = document.querySelector(".about-right");

window.addEventListener("scroll", () => {

    let position = right.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if (position < screen - 150) {
        right.style.opacity = "1";
        right.style.transform = "translateY(0)";
    }

});

right.style.opacity = "0";
right.style.transform = "translateY(80px)";
right.style.transition = "1s";
const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".card");

let index = 0;
const cardWidth = 300; // card + gap approx
const visibleCards = 4;
const slideStep = 2;

function autoSlide() {

    index += slideStep;

    track.style.transform = `translateX(-${index * cardWidth}px)`;

    // Infinite reset logic
    if (index >= cards.length - visibleCards) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            track.style.transform = `translateX(0px)`;
        }, 800);

        setTimeout(() => {
            track.style.transition = "transform 0.8s ease-in-out";
        }, 850);
    }
}

setInterval(autoSlide, 5000);

const section = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".skill-progress");
const percents = document.querySelectorAll(".percent");

let started = false;

window.addEventListener("scroll", () => {
    let sectionTop = section.offsetTop;
    let scrollPos = window.scrollY + window.innerHeight;

    if (scrollPos > sectionTop && !started) {
        started = true;

        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });

        percents.forEach(percent => {
            let target = percent.getAttribute("data-target");
            let count = 0;

            let update = setInterval(() => {
                if (count >= target) {
                    clearInterval(update);
                } else {
                    count++;
                    percent.innerText = count + "%";
                }
            }, 20);
        });
    }
});
// Scroll to top
document.querySelector(".scrollTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Subscribe
document.querySelector(".subscribe button").addEventListener("click", () => {
    alert("Subscribed Successfully!");
});