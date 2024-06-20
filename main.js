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
        // } else {
        //     console.log('Server Error: ', response);
        }
    } catch (error) {
        console.log('Error: ', error);
        adviceId.textContent = '';
        advice.innerHTML = `<div id="skeleton">
                        <p class="skeleton__text"></p>
                        <p class="skeleton__text"></p>
                        <p class="skeleton__text"></p>
                    </div>`;
        setInterval(() => {
            advice.innerHTML = 'Site cannot be reached';
        }, 6000)
    }
}

// Attach the event listener correctly
diceContainer.addEventListener('click', getData);

