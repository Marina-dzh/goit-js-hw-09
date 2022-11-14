

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    start: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
};
let selectedDate = null;
refs.start.disabled = true;
refs.start.addEventListener('click', timerOn);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
        console.log(selectedDates[0]);
        selectedDate = selectedDates[0]
      if (options.defaultDate.getTime() > selectedDates[0].getTime()) {
          Notiflix.Notify.warning("Please choose a date in the future!")
      }
      else {
        refs.start.disabled = false;
      };
      
    },
    
};

flatpickr('input[type="text"]', options);

function timerOn() {
      refs.start.disabled = true;
    const timer = setInterval(() => {
        const startTime = Date.now();
       
       const timeMs = selectedDate.getTime() - startTime;
        if (timeMs<1000) {
           clearInterval(timer) 
        }
        const {days, hours, minutes, seconds} = convertMs(timeMs);
        refs.days.textContent = days;
        refs.hours.textContent = addLeadingZero(hours);
        refs.minutes.textContent = addLeadingZero(minutes);
        refs.seconds.textContent = addLeadingZero(seconds);
    }, 1000);
    
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
     return String(value).padStart(2, "0")
 }





// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';

// const refs = {
//     start: document.querySelector('button[data-start]'),
//     days: document.querySelector('span[data-days]'),
//     hours: document.querySelector('span[data-hours]'),
//     minutes: document.querySelector('span[data-minutes]'),
//     seconds: document.querySelector('span[data-seconds]'),
// };

// refs.start.disabled = true

// // refs.start.addEventListener('click', timerOn)

// // function timerOn() {
// //     const startTime = Date.now();
// //     console.log(startTime)
// //     console.log(selectedDates)
// //     // const time = flatpickr.options.selectedDates[0].getTime() - startTime;
// //     // setInterval(() => { console.log(time)}, 1000);
    
// // }


// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//       console.log(selectedDates[0]);
//       if (options.defaultDate.getTime() > selectedDates[0].getTime()) {
//           Notiflix.Notify.warning("Please choose a date in the future!")
//       }
//       else {
//           refs.start.disabled = false;
//           refs.start.addEventListener('click', () => { countTime(selectedDates); refs.start.disabled = true;
//       })
//       };
      
//     },
    
// };

// flatpickr('input[type="text"]', options);

// function countTime(selectedDates) {
//    const timer = setInterval(() => {
//         const startTime = Date.now();
       
//        const timeMs = selectedDates[0].getTime() - startTime;
//         if (timeMs<1000) {
//            clearInterval(timer) 
//         }
//         const {days, hours, minutes, seconds} = convertMs(timeMs);
//         refs.days.textContent = days;
//         refs.hours.textContent = addLeadingZero(hours);
//         refs.minutes.textContent = addLeadingZero(minutes);
//         refs.seconds.textContent = addLeadingZero(seconds);
//     }, 1000);
    
// }


// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }


// function addLeadingZero(value) {
//      return String(value).padStart(2, "0")
//  }
