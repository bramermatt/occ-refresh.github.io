function myFunction() {
    var x = document.getElementById("mobile-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function scrollToTop() {
    var scrollDuration = 400;
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
          if (window.scrollY != 0) {
              window.scrollBy(0, scrollStep);
          }
          else clearInterval(scrollInterval); 
        }, 15);
  }