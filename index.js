const AdviceNumber = document.getElementById('Advice-number');
const Advice = document.getElementById('Advice')
const nextAdvice = document.getElementById("NextAd")

const Advice_Url = 'https://api.adviceslip.com/advice';


nextAdvice.addEventListener('click', generateAdvice);

generateAdvice();

async function generateAdvice(){

    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    const response = await fetch(Advice_Url, config)
    console.log(response);

    const data = await response.json()
    console.log(data)

    Advice.innerHTML = data.slip.advice;
    AdviceNumber.innerHTML = `
    <h4>ADVICE #${data.slip.id}</h4>
    `
}