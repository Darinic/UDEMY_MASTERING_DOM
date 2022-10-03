let output = document.getElementById('output');

let nameText = document.querySelector('input[type="text"]');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    output.textContent = `A submit event has been fired at the form element ${e.timeStamp}`
})

//lets play around with different event types
nameText.addEventListener('input', () => {
    output.textContent = `The value entered is ${nameText.value}`
})

nameText.addEventListener('focus', (e) => {
    e.target.style.background = 'lightblue'
})

nameText.addEventListener('copy', () => {
    alert('you copied the text')
})