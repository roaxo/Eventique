// Add a smooth scroll effect to anchor links in the navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a sticky navigation bar
window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector('nav');
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Add hover effect to nav links
document.querySelectorAll('.nav-links li').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add fade-in animation to offer section
document.querySelector('.offer-container').classList.add('fade-in');

// Add hover effect to service cards
document.querySelectorAll('.service').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add hover effect to footer columns
document.querySelectorAll('.footer-col').forEach(col => {
    col.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    col.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add hover effect to social links in footer
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
    });
    
    link.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
