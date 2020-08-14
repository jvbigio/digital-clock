/**
 * Function takes in a Date object and returns the day of the week in a text format.
 */
function getWeekDay (date) {
  // Create an array containing each day, starting with Sunday.
  const weekdays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]
  // Use the getDay() method to get the day.
  var day = date.getDay()
  // Return the element that corresponds to that index.
  return weekdays[day]
}

// The current weekday in a text format.
var date = new Date()
var weekDay = getWeekDay(date)
console.log(weekDay)

// Finding out what day a specific date fell on.
// var date = new Date('December 25, 1987')
// var weekDay = getWeekDay(date)
// console.log('Christmas Day in 1987 fell on a ' + weekDay)

// What weekday is tomorrow?
// var tomorrow = new Date()
// tomorrow.setDate(tomorrow.getDate() + 1)
// var weekDay = getWeekDay(tomorrow)
// console.log('Tomorrow will be a ' + weekDay)
