import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submit: document.querySelector('[type="submit"]'),
  
}

refs.submit.addEventListener('click', create);

function create(e) {
e.preventDefault();
  setTimeout(() =>
  { createAmount(refs.amount.value) }, refs.delay.value)
};

function createAmount(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const delay = Number(refs.step.value) * [i - 1] + Number(refs.delay.value);
    const position = [i];

    createPromise(position, delay)
      .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
};
  }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position,delay})
        // Fulfill
      } else {
        reject({position,delay})
        // Reject
      }
    }, delay)
  
  });
  return promise;
};
  



// setTimeout(() =>
//    { createPromise(position, delay); console.log("2pr") }, 2000)










// const refs = {
//   delay: document.querySelector('[name="delay"]'),
//   step: document.querySelector('[name="step"]'),
//   amount: document.querySelector('[name="amount"]'),
//   submit: document.querySelector('[type="submit"]'),
  
// }

// refs.submit.addEventListener('click', create);

// function create(e) {
// e.preventDefault();
//   setTimeout(() =>
//   { createAmount(refs.amount.value) }, refs.delay.value)
// };

// function createAmount(amount) {
//   console.log('ok')
//   for (let i = 0; i < amount; i += 1) {
//     const position = refs.amount[i];
//     console.log([i])
//     const delay= refs.step.value
//     createPromise(position, delay);
// };
//   }

// function createPromise(position, delay) {

//   const shouldResolve = Math.random() > 0.3;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         console.log('Fulfill')
//         // Fulfill
//       } else {
//         console.log('Reject')
//         // Reject
//       }

//     }, delay)
  
//   })};


// // setTimeout(() =>
// //    { createPromise(position, delay); console.log("2pr") }, 2000)


