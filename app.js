const timeDisplay = document.querySelector('.time-display')

function liveClock () {
  let markup = ''

  const today = new Date()
  // const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  // const time = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`
  // auto refresh page

  const hour = today.getHours()
  const minute = today.getMinutes()
  const seconds = today.getSeconds()
  // get AM/PM
  const amOrPm = hour => (hour < 12) ? 'AM' : 'PM'
  // convert military time
  const militaryTime = _ => (hour >= 12) ? hour - 12 : hour
  // change single digit minutes to 00 format
  const doubleDigits = _ => (minute < 10) ? `0${minute}` : minute
  // used below in markup (original working code)
  /* <div class="time-display">${time} ${amOrPm()}</div> */

  markup += `
    <div class="time-display">${militaryTime()}:${doubleDigits()}:${seconds} ${amOrPm()}</div>
  `
  timeDisplay.innerHTML = markup
  setTimeout(liveClock, 1000)
}

liveClock()
