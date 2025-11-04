$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, // Infinite loop
    margin: 0, // Space between items
    nav: true, // Show next/prev buttons
    dots: true, // Show pagination dots
    autoplay: true, // Auto-play slides
    autoplayTimeout: 3000, // Delay between slides
    responsive: {
      0: { items: 1 }, // 1 item on small screens
      600: { items: 1 }, // 2 items on medium screens
      1000: { items: 1 }, // 3 items on large screens
    },
  });
});

$(function () {
  // Single-open accordion behavior
  $(".accordion-custom .card-header").on("click", function (e) {
    e.preventDefault();
    var $hdr = $(this);
    var $target = $($hdr.data("target"));

    if ($target.is(":visible")) {
      $target.slideUp(200);
      $hdr.attr("aria-expanded", "false");
    } else {
      // close others
      $(".accordion-custom .card-body:visible").slideUp(200);
      $(".accordion-custom .card-header").attr("aria-expanded", "false");

      $target.slideDown(200);
      $hdr.attr("aria-expanded", "true");
    }
  });
});

const toggle = document.getElementById("menu-section");
const navLinks = document.getElementById("hamburger");
console.log(toggle);
console.log(navLinks);
navLinks.addEventListener("click", () => {
  if (toggle.style.display === "none") {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
});
