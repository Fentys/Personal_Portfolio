/* --- RESPOSIVE NAVBAR --- */
function myMenuFunction() {
  let menuBtn = document.getElementById("my-nav-menu");

  if(menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu"
  }
}

/* --- NAVBAR SHADOW WHILE SCROLLING --- */
window.onscroll = function() {headerShadow()}

function headerShadow() {
  const navHeader = document.getElementById("header")

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)"
    navHeader.style.height = "90px"
  } else {
    navHeader.style.boxShadow = "none"
    navHeader.style.height = "120px"
  }
}

/* --- TYPING EFFECT --- */
let typingEffect = new Typed('.typedText', {
  strings : ["Designer", "Student", "Developer"],
  loop : true,
  typeSpeed : 100,
  backSpeed : 80,
  backDelay : 2000
})

/* --- ## SCROLL REVEAL ANIMATION ## --- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* --- HOME --- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* --- PROJECT BOX --- */
sr.reveal('.project-box',{interval: 200})

/* --- HEADINGS --- */
sr.reveal('.top-header',{})

/* --- ## SCROLL REVEAL LEFT & RIGHT ANIMATION ## --- */
/* --- ABOUT INFO & CONTACT INFO --- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* --- ABOUT SKILLS & FORM BOX --- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* --- CHANGE ACTIVE LINK --- */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').id = ('active-link')

    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').removeAttribute('id')
    }
  })
}

window.addEventListener('scroll', scrollActive)