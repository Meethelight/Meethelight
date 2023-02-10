const $ = (id) => document.getElementById(id)
const header = $('header')
const header_offset = $('header').offsetHeight + 10

const move_to_top = $('logo-header')
move_to_top.addEventListener('click',() => { 
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })})

$('menu-btn').addEventListener('click',() => { 
  $('navbar').classList.toggle('open')
})

const buttons = document.querySelectorAll('.button')
buttons.forEach(circle => circle.addEventListener('mouseleave', (evt) => { 
  evt.target.classList.add('leave')
  setTimeout(() => { evt.target.classList.remove('leave')}, 500)
}))