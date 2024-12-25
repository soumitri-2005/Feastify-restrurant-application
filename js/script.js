// navigation
let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return; // Safeguard in case the element with the ID doesn't exist

    let current = start;
    const range = end - start;
    const increment = range > 0 ? 1 : -1;
    const step = range !== 0 ? Math.abs(Math.floor(duration / range)) : 0;

    if (step === 0) {
      obj.textContent = end; // Directly set the end value if no animation is needed
      return;
    }

    const timer = setInterval(() => {
      current += increment;
      obj.textContent = current;

      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  }

  counter("count1", 0, 1287, 3000);
  counter("count2", 0, 5786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});
