let current_hour = moment().hour()
let current_day = moment().format("dddd MMMM Do")
let text_color = document.querySelectorAll('textarea')
let saved_notes = JSON.parse(localStorage.getItem('saved_notes')) || []

saved_notes.forEach(elem => {
  document.getElementById(elem.id).value = elem.text
});

text_color.forEach(elem => {
  if (parseInt(elem.dataset.hour) > parseInt(current_hour)) {
    elem.classList.add('future')
  } else if (parseInt(elem.dataset.hour) < parseInt(current_hour)) {
    elem.classList.add('past')
  } else {
    elem.classList.add('present')
  }
})

document.getElementById('currentDay').textContent = current_day

document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')) {
    let note = {
      id: event.target.previousElementSibling.id,
      text: event.target.previousElementSibling.value
    }
    saved_notes.push(note)
    localStorage.setItem('saved_notes', JSON.stringify(saved_notes))
  }
})