// function greeting(name, goodbyeMessage) {
//     console.log('hello,', name, goodbyeMessage);
// }

// greeting('John', ' Goodbye mate!')
// let timeoutGreet = setTimeout(greeting, 10000, 'John', 'Have a great day!');

// clearTimeout(timeoutGreet);


// let signingUp = document.getElementById('signup');

// function showSignUp() {
//     signingUp.style.display = "block";
// }

// let subscribe = setTimeout(showSignUp, 20000);

// let signedUp = false;

// function signUp() {
//     if (signedUp === true && time >= 20000) {
//         clearTimeout(subscribe);
//     } else {
//         subscribe;
//     }
// }

//creates a new date object with the current date and local time
// const timeNow = new Date();
// console.log(timeNow);

//new Date(100000000000) 100000000000 milliseconds after the epoch time
// const time1 = new Date(100000000000);
// console.log(time1);

//new Date(date string) creates a new object from a date string

//ISO Date(international standard)
// const date = new Date("2024-01-25");
// console.log(date);

//you can also pass only the year and month or only the year
//you can pass specififc time to ISO dates
// const date = new Date("2024-01-25T12:00:00Z");
// console.log(date);
//! short date format "MM/DD/YYYY"
//! long date format "MM DD YYYY"

// ! Date Methods
/* now() - Returns the numeric value corresponding to the current time (the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC)
getFullYear() - Gets the year according to local time
getMonth() - Gets the month, from 0 to 11 according to local time
getDate() - Gets the day of the month (1–31) according to local time
getDay() - Gets the day of the week (0-6) according to local time
getHours() - Gets the hour from 0 to 23 according to local time
getMinutes() - Gets the minute from 0 to 59 according to local time
getUTCDate() - Gets the day of the month (1–31) according to universal time
setFullYear() - Sets the full year according to local time
setMonth() - Sets the month according to local time
setDate() - Sets the day of the month according to local time
setUTCDate() - Sets the day of the month according to universal time
*/

//! how to format a date
// const currentDate = new Date();
// const date = currentDate.getDate();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();
// const timeHr = currentDate.getHours();
// const timeMin = currentDate.getMinutes();
// const timeSec = currentDate.getSeconds();

// let monthDateYearTime = date + '/' + (month+1) + '/' + year +  '/' + timeHr + ':' + timeMin + ':' + timeSec;
// console.log(monthDateYearTime);

// let p = document.getElementById('date');
// function displayDate() {
//     p.append(monthDateYearTime);
// }
//  displayDate();

//! Updates time without the need to reload page
function updatingClock() {
    var currentTime = new Date(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        year = currentTime.getFullYear(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
    // here we get the element with the id of "date" and change the content to the text variable we made above
    document.getElementById('date').innerHTML = text;
  }
  
  // here we run the updatingClock function every 1000ms (1 second)
  setInterval(updatingClock, 1000);
