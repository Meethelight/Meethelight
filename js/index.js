const $ = (id) => document.getElementById(id)
const header = $('header')
const header_offset = $('header').offsetHeight + 10

const for_you = $('to-section-for-you')
for_you.addEventListener('click',() => { 
  $('navbar').classList.toggle('open')
  window.scrollTo({
    top: window.scrollY + $('personal-products').getBoundingClientRect().top - header_offset, 
    behavior: 'smooth'
  })})

const for_professional = $('to-section-for-professional')
for_professional.addEventListener('click',() => { 
  $('navbar').classList.toggle('open')
  window.scrollTo({
    top: window.scrollY + $('professional-products').getBoundingClientRect().top - header_offset, 
    behavior: 'smooth'
  })})

const for_enterprise = $('to-section-for-enterprise')
for_enterprise.addEventListener('click',() => { 
  $('navbar').classList.toggle('open')
  window.scrollTo({
    top: window.scrollY + document.getElementById('enterprise-products').getBoundingClientRect().top - header_offset, 
    behavior: 'smooth'
  })})

const move_to_top = $('logo-header')
move_to_top.addEventListener('click',() => { 
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })})

$('menu-btn').addEventListener('click',() => { 
  $('navbar').classList.toggle('open')
})