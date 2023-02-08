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
let phrases = ['tu mejor versión','conocerte más','tomar terapia','saber más']

function split_statement(phrase) {
  let result = []
  for(j = 0; j <= phrase.length; j++) result.push(phrase.split("").slice(0,j).join(""))
  return result
}

const welcome_text = $('welcome-text')
async function changeText(){
  for (let i = 0; i < phrases.length; i++) {
    let result = split_statement(phrases[i])
    for (let j = 0; j < result.length; j++){
      welcome_text.textContent = result[j]
      await new Promise(r => setTimeout(r, 150))
    } 
    if (i == phrases.length-1) i = -1
    await new Promise(r => setTimeout(r, 1000))
  }
}
setTimeout(changeText, 1200)

const circle_buttons = document.querySelectorAll('.circle')
circle_buttons.forEach(circle => circle.addEventListener('click', (evt) => { 
  const circle = evt.target
  circle.classList.toggle('clicked')
  circle.parentElement.classList.toggle('open')
  if(!circle.matches('.clicked')){
    circle.classList.add('unclicked')
  } else {
    circle.classList.remove('unclicked')
  }
  circle.classList.remove('hover')
}))
circle_buttons.forEach(circle => circle.addEventListener('mouseenter', (evt) => { 
  if(!circle.matches('.clicked') && !circle.matches('.unclicked')){
    evt.target.classList.add('hover')
  }
}))
circle_buttons.forEach(circle => circle.addEventListener('mouseleave', (evt) => { 
  evt.target.classList.remove('hover')
  if(circle.matches('.unclicked')){
    circle.classList.remove('unclicked')
  }
}))

const buttons = document.querySelectorAll('.button')
buttons.forEach(circle => circle.addEventListener('mouseleave', (evt) => { 
  evt.target.classList.add('leave')
  setTimeout(() => { evt.target.classList.remove('leave')}, 500)
}))