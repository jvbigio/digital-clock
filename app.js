const timeDisplay = document.querySelector('.time-display')
const dayMonth = document.querySelector('.day-month')

function liveClock () {
  let timeMarkup = ''
  let dateMarkup = ''
  let milConvert = ''
  const today = new Date()
  const hour = today.getHours()
  const minute = today.getMinutes()
  const seconds = today.getSeconds()
  const day = today.getDay()
  const month = today.getMonth()
  const button = document.querySelector('.button')

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
  const amOrPm = hour => (hour < 12) ? 'AM' : 'PM'
  // convert military time
  const standardTime = _ => (hour > 12) ? hour - 12 : hour
  // convert back to military time
  // const militaryTime = _ => (hour < 12) ? hour + 12 : hour
  const militaryTime = _ => {
    timeDisplay.innerHTML = milConvert
  }

  // change single digit minutes to 00 format
  const doubleDigits = _ => (minute < 10) ? `0${minute}` : minute

  button.addEventListener('click', militaryTime)

  timeMarkup += `
    <div class="time-display">${standardTime()}:${doubleDigits()}:${seconds} ${amOrPm()}</div>
    `

  dateMarkup += `
    <div class="day-month">${getDayOfWeek(day)} - ${getMonth(month)} ${today.getDate()}</div>
  `

  milConvert += `
    <div class="time-display">${hour}:${doubleDigits()}:${seconds} ${amOrPm()}</div>
  `

  timeDisplay.innerHTML = timeMarkup
  dayMonth.innerHTML = dateMarkup
  setTimeout(liveClock, 1000)
}

liveClock()
