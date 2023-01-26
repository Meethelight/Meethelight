const header = document.getElementById('header')

window.onscroll = function () {
  let isScrolled = false
  function onScroll () {
    if (window.pageYOffset > 50 ) {
      isScrolled = true
      header.classList.add('header-active')
    } else {
      header.classList.add('header-active')
    }
  }
  
  onScroll()
  return onScroll
}()

const for_you = document.getElementById('to-section-for-you')
let header_offset = document.getElementById('header').offsetHeight + 10

for_you.addEventListener('click',() => { 
  window.scrollTo({
    top: window.scrollY + document.getElementById('personal-products').getBoundingClientRect().top - header_offset, 
    behavior: 'smooth'
  })})

const for_professional = document.getElementById('to-section-for-professional')
for_professional.addEventListener('click',() => { 
  window.scrollTo({
    top: window.scrollY + document.getElementById('professional-products').getBoundingClientRect().top - header_offset, 
    behavior: 'smooth'
  })})
const for_enterprise = document.getElementById('to-section-for-enterprise')
for_enterprise.addEventListener('click',() => { 
  window.scrollTo({
    top: window.scrollY + document.getElementById('enterprise-products').getBoundingClientRect().top - header_offset, 
    behavior: 'smooth'
  })})

//for_you.addEventListener('click',() => { window.scrollTo(0, start.offsetTop - for_you.offsetHeight)})

document.getElementById('menu-btn').addEventListener('click',() => { 
  document.getElementById('navbar').classList.toggle('open')
  if (document.body.classList.contains('open') && ! header.classList.contains('header-active')){
    header.classList.add('header-active')
  }
  else if (! document.body.classList.contains('open')) {
    if (window.pageYOffset <= 50) header.classList.add('header-active')
  }
})