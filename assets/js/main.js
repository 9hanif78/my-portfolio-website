/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () => {
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.querySelector('.home__text')

if (homeText) {
   const text = homeText.innerText
   homeText.innerText = ''

   const letters = text.split('')
   const anglePerLetter = 360 / letters.length

   letters.forEach((letter, index) => {
      const span = document.createElement('span')
      span.innerText = letter
      span.style.transform = `rotate(${index * anglePerLetter}deg)`
      homeText.appendChild(span)
   })
}

/*=============== HOME TYPED JS ===============*/
const typedElement = document.getElementById('home-typed')

if (typedElement && typeof Typed !== 'undefined') {
   new Typed('#home-typed', {
      strings: ['React Engineer', 'UI Systems Builder', 'Frontend Developer'],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1500,
      loop: true
   })
}

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
   const header = document.getElementById('header')
   if (window.scrollY >= 50) {
      header.classList.add('scroll-header')
   } else {
      header.classList.remove('scroll-header')
   }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/
if (typeof Swiper !== 'undefined') {
   new Swiper('.work__swiper', {
      loop: true,
      spaceBetween: 24,
      grabCursor: true,
      slidesPerView: 1,
      navigation: {
         nextEl: '.work__swiper-next',
         prevEl: '.work__swiper-prev',
      },
      breakpoints: {
         640: {
            slidesPerView: 1.5,
         },
         768: {
            slidesPerView: 2,
         },
         1150: {
            slidesPerView: 2.5,
         },
      },
   })
}

/*=============== SERVICES ACCORDION ===============*/
const serviceCards = document.querySelectorAll('.services__card')

serviceCards.forEach(card => {
   const header = card.querySelector('.services__header')

   header.addEventListener('click', () => {
      const isOpen = card.classList.contains('services-open')

      serviceCards.forEach(c => c.classList.remove('services-open'))

      if (!isOpen) {
         card.classList.add('services-open')
      }
   })
})

if (serviceCards.length > 0) {
   serviceCards[0].classList.add('services-open')
}

/*=============== TESTIMONIALS DUPLICATE CARDS ===============*/
const testimonialsSlider = document.querySelector('.testimonials__slider')

if (testimonialsSlider) {
   const cards = [...testimonialsSlider.children]
   cards.forEach(card => {
      const clone = card.cloneNode(true)
      testimonialsSlider.appendChild(clone)
   })
}

/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

if (contactForm) {
   contactForm.addEventListener('submit', (e) => {
      e.preventDefault()

      if (typeof emailjs !== 'undefined') {
         // Replace with your EmailJS credentials from https://www.emailjs.com/
         // emailjs.sendForm('serviceID', 'templateID', contactForm, 'publicKey')
         showMessage('Configure EmailJS to enable sending. Email me at 9hanif78@gmail.com', false)
      } else {
         showMessage('Thank you! Please email me directly at 9hanif78@gmail.com', true)
      }

      contactForm.reset()
   })
}

const showMessage = (text, success) => {
   contactMessage.textContent = text
   contactMessage.style.color = success ? 'var(--first-color)' : 'hsl(358, 80%, 55%)'
   contactMessage.classList.add('show')

   setTimeout(() => {
      contactMessage.classList.remove('show')
   }, 5000)
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.getElementById('scroll-up')

const showScrollUp = () => {
   if (window.scrollY >= 400) {
      scrollUp.classList.add('show-scroll')
   } else {
      scrollUp.classList.remove('show-scroll')
   }
}
window.addEventListener('scroll', showScrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 100
      const sectionId = current.getAttribute('id')
      const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`)

      if (link) {
         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link')
         } else {
            link.classList.remove('active-link')
         }
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.getElementById('cursor')

if (cursor && window.matchMedia('(min-width: 1150px)').matches) {
   let mouseX = 0
   let mouseY = 0

   document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`
   })

   const interactiveElements = document.querySelectorAll('a, button, .services__card')

   interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
         cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px) scale(2)`
         cursor.style.opacity = '0.5'
      })
      el.addEventListener('mouseleave', () => {
         cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px) scale(1)`
         cursor.style.opacity = '1'
      })
   })
}

/*=============== SCROLLREVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
   const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 2000,
      delay: 200,
   })

   sr.reveal('.home__data', { origin: 'left' })
   sr.reveal('.home__images', { origin: 'right', delay: 400 })
   sr.reveal('.about__data')
   sr.reveal('.work__card', { interval: 200 })
   sr.reveal('.services__card', { interval: 200 })
   sr.reveal('.skills__group', { interval: 200 })
   sr.reveal('.testimonials__card', { interval: 200 })
   sr.reveal('.contact__form', { origin: 'left' })
   sr.reveal('.contact__data', { origin: 'right', delay: 400 })
   sr.reveal('.footer__title')
}
