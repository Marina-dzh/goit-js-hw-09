function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector("body"),
}

let changeBodyBGColorInterval = null;

refs.start.addEventListener('click', changeBodyBGColor);
refs.stop.addEventListener('click', stopChangeBodyBGColor);


function changeBodyBGColor() {
    refs.start.disabled = true;
    changeBodyBGColorInterval = setInterval(() => { refs.body.style.backgroundColor = getRandomHexColor(); }, 1000);
}
function stopChangeBodyBGColor() {
    refs.start.disabled = false;  
    clearInterval(changeBodyBGColorInterval)
};
 