// // 1973111692
let login_button = document.querySelector('.btn');
let inputs = document.querySelectorAll('input');
let bot_token = '7104845612:AAHLqXRSZN9lvcLhjDN9mcMfpVyshsdYMl8';

login_button.addEventListener('click', () => {
    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: 1973111692,
            text: `name:${inputs[0].value} \n phone number:${inputs[1].value} \n message:${inputs[2].value}`
        })
    }).then(res => res.json()).then(data => {
        
    });
});

