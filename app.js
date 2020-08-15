window.onload = setInterval(liveClock, 1000)
const timeDisplay = document.querySelector('.time-display')
const dayMonth = document.querySelector('.day-month')
// const button = document.querySelector('.button')
let today, hour, minute, seconds, day, month
let isMilitaryTime = false
const isButtonClicked = false

function liveClock () {
  let timeMarkup = ''
  let dateMarkup = ''
  today = new Date()
  hour = today.getHours()
  minute = today.getMinutes()
  seconds = today.getSeconds()
  day = today.getDay()
  month = today.getMonth()

  const getDayOfWeek = day => {
    const dayOfWeek = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }
    return dayOfWeek[day]
  }

  const getMonth = month => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return months[month]
  }
  // get AM/PM
  const amOrPm = _ => (hour >= 12) ? 'PM' : 'AM'

  // convert military time
  const standardTime = _ => (hour > 12) ? hour - 12 : hour

  // change single digit minutes to 00 format
  const doubleDigits = _ => (minute < 10) ? `0${minute}` : minute
  // change single digit seconds to 00 format
  const doubleDigitSeconds = _ => (seconds < 10) ? `0${seconds}` : seconds

  if (isMilitaryTime) {
    timeMarkup += `
    <div class="time-display">${hour}:${doubleDigits()}:${doubleDigitSeconds()} ${amOrPm()}</div>
  `
    toggleButton.innerText = 'Standard Time'
  } else {
    timeMarkup += `
    <div class="time-display">${standardTime()}:${doubleDigits()}:${doubleDigitSeconds()} ${amOrPm()}</div>
    `
    toggleButton.innerText = 'Military Time'
  }

  dateMarkup += `
    <div class="day-month">${getDayOfWeek(day)} - ${getMonth(month)} ${today.getDate()}</div>
  `

  timeDisplay.innerHTML = timeMarkup
  dayMonth.innerHTML = dateMarkup
}

const toggleButton = document.getElementById('toggle-btn')
toggleButton.addEventListener('click', function (e) {
  if (isMilitaryTime === false) {
    isMilitaryTime = true
  } else {
    isMilitaryTime = false
  }
})

liveClock()
