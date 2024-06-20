const adviceId = document.getElementById('advice-id');
const advice = document.getElementById('advice');
const diceContainer = document.querySelector('.dice-container');

const url = "https://api.adviceslip.com/advice";

async function getData() {
    try {
        const uniqueUrl = `${url}?t=${new Date().getTime()}`;
        const response = await fetch(uniqueUrl);
        if (response.status === 200) {
            const data = await response.json();
            console.log('Success:', data);
            advice.textContent = data.slip.advice;
            adviceId.textContent = `ADVICE ${data.slip.id}`;
        } else {
            console.log('Server Error: ', response);
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}

// Attach the event listener correctly
diceContainer.addEventListener('click', getData);

