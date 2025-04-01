// Dark mode toggle
document.querySelector(".toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Testimonial rotation
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
  testimonials.forEach((t, i) => {
    t.classList.remove("show");
    if (i === index) t.classList.add("show");
  });
  index = (index + 1) % testimonials.length;
}

// Show first testimonial immediately
setTimeout(() => {
  testimonials[0].classList.add("show");
  setInterval(showTestimonial, 3000);
}, 500);

// Add to cart functionality
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");
let count = parseInt(cartCount.textContent);

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
    button.textContent = "Added!";
    setTimeout(() => {
      button.textContent = "Add to Cart 🛒";
    }, 1000);
  });
});
