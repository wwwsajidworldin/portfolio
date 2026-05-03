// Budget selection
const buttons = document.querySelectorAll(".budget-buttons button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// Form Submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
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