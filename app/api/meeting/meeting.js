const fetch = require('node-fetch');

const API_KEY = 'anayameet_default_secret';
const ANAYAMEET_URL = 'https://anayameet.herokuapp.com/api/v1/meeting';

function getResponse() {
    return fetch(ANAYAMEET_URL, {
        method: 'POST',
        headers: {
            authorization: API_KEY,
            'Content-Type': 'application/json',
        },
    });
}

getResponse().then(async (res) => {
    console.log('Status code:', res.status);
    const data = await res.json();
    console.log('meeting:', data.meeting);
});
