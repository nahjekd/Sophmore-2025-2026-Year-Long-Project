document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.getElementById("navLinks");

  // Functions to show/hide mobile menu
  window.showMenu = function() {
    navLinks.style.right = "0";
  }

  window.hideMenu = function() {
    navLinks.style.right = "-200px";
  }
});
