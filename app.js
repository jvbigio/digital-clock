window.onload = () => {
  setInterval(liveClock, 100)
  currentDate()
}

let today, hours
let isMilitaryTime = false

function liveClock () {
  today = new Date()
  const timeDisplay = document.querySelector('.time-display')

  hours = today.getHours()
  let minutes = today.getMinutes()
  let seconds = today.getSeconds()

  const standardTime = hours > 12 ? hours - 12 : hours
  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds
  const amOrPm = hours >= 12 ? 'PM' : 'AM'

  if (isMilitaryTime) {
    timeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`
    toggleButton.innerText = 'Standard Time'
  } else {
    timeDisplay.innerHTML = `${standardTime}:${minutes}:${seconds} ${amOrPm}`
    toggleButton.innerText = 'Military Time'
  }
}

function currentDate () {
  today = new Date()
  const dayMonth = document.querySelector('.day-month')
  const month = today.toLocaleString('default', {
    month: 'long'
  })
  const day = today.toLocaleString('default', {
    weekday: 'long'
  })
  const date = today.getDate()

  dayMonth.innerHTML = `${day} - ${month} ${date}`
}

const toggleButton = document.getElementById('toggle-btn')
toggleButton.addEventListener('click', function (e) {
  isMilitaryTime = !isMilitaryTime
})
