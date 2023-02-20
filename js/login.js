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

const change_form = $('change-form-button')
let changed_form = false
change_form.addEventListener('click', (evt) => {
  evt.preventDefault()
  changed_form = !changed_form
  if (changed_form) {
    $('submit-button').style.backgroundColor = '#E75A0D';
    change_form.style.backgroundColor = '#0D9FBE';
    $('submit-button').textContent = '¡Comencemos!';
    change_form.textContent = 'Iniciar sesión'
  } else {
    $('submit-button').style.backgroundColor = '#0D9FBE';
    change_form.style.backgroundColor = '#E75A0D';
    $('submit-button').textContent = 'Iniciar sesión';
    change_form.textContent = 'Crea una nueva cuenta'
  }
  document.querySelector('.login-header').classList.toggle('open');
})