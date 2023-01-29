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

// Changing text every 5 seconds
let texts = new Array()
// texts.push('t')
// texts.push('to')
// texts.push('tom')
// texts.push('toma')
// texts.push('tomar')
// texts.push('tomar terapia')
texts.push('t')
texts.push('tu')
texts.push('tu m')
texts.push('tu me')
texts.push('tu mej')
texts.push('tu mejo')
texts.push('tu mejor')
texts.push('tu mejor v')
texts.push('tu mejor ve')
texts.push('tu mejor ver')
texts.push('tu mejor vers')
texts.push('tu mejor versi')
texts.push('tu mejor versió')
texts.push('tu mejor versión')
texts.push('c')
texts.push('co')
texts.push('con')
texts.push('cono')
texts.push('conoc')
texts.push('conoce')
texts.push('conocer')
texts.push('conocert')
texts.push('conocerte')
texts.push('conocerte m')
texts.push('conocerte má')
texts.push('conocerte más')
texts.push('t')
texts.push('to')
texts.push('tom')
texts.push('toma')
texts.push('tomar')
texts.push('tomar t')
texts.push('tomar te')
texts.push('tomar ter')
texts.push('tomar tera')
texts.push('tomar terap')
texts.push('tomar terapi')
texts.push('tomar terapia')
texts.push('s')
texts.push('sa')
texts.push('sab')
texts.push('sabe')
texts.push('saber')
texts.push('saber m')
texts.push('saber má')
texts.push('saber más')

let point = 0
const welcome_text = $('welcome-text')
function changeText(){
  welcome_text.textContent= texts[point]
  if (point < (texts.length - 1)){
    point++
  } else {
    point = 0
  }
}

setInterval(changeText, 200)
changeText()