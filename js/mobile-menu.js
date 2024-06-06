function myFunction() {
    var x = document.getElementById("mobile-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}