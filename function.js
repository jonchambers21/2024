document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('#main-nav a, #mobile-nav a');
  navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  behavior: 'smooth',
                  top: targetElement.offsetTop
              });
          }
      });
  });

  // Back To Top
  const backToTopWorkButton = document.getElementById('backToTopWork');
  const backToTopAboutButton = document.getElementById('backToTopAbout');
  const backToTopContactButton = document.getElementById('backToTopContact');
  backToTopWorkButton.addEventListener('click', scrollToTop);
  backToTopAboutButton.addEventListener('click', scrollToTop);
  backToTopContactButton.addEventListener('click', scrollToTop);

  function scrollToTop() {
      window.scrollTo({
          behavior: 'smooth',
          top: 0
      });
  }



      $( "#html-icon" ).on( "mouseover", function() {
        $(".html-hidden").fadeIn('fast');
      });
      $( "#html-icon" ).on( "mouseout", function() {
        $(".html-hidden").fadeOut('fast');
      });

      $( "#css-icon" ).on( "mouseover", function() {
        $(".css-hidden").fadeIn('fast');
      });
      $( "#css-icon" ).on( "mouseout", function() {
        $(".css-hidden").fadeOut('fast');
      });

    const navItems = document.querySelectorAll(".nav-item");

    function updateNavItems() {
        const sections = document.querySelectorAll("section");
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (index === 0) {
                navItems[index].style.color = "#000"; // 
            } else if (rect.top <= 0 && rect.bottom >= 0) {
                // Work, About, and Contact sections
                navItems[index - 1].style.color = "#FF9B00"; // 
            } else {
                navItems[index - 1].style.color = "#f9f9f9"; // Default color
            }
        });
    }
    window.addEventListener("load", updateNavItems);
    window.addEventListener("scroll", updateNavItems);
    
    const flashlight = document.getElementById('flashlight');

    document.addEventListener('mousemove', function (e) {
      const x = e.clientX;
      const y = e.clientY;

      flashlight.style.transform = `translate(${x - 50}px, ${y - 50 + window.scrollY}px)`;
    });

    });

    