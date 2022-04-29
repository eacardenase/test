const URL = 'http://localhost:3000/city?';

function cityWeather(city) {
    const axios = require('axios');
    if (typeof city !== 'string') {
        throw new Error('not a string');
    }

    if (city.length === 0) {
        throw new Error('string is empty');
    }

    const promise = new Promise(async (resolve, reject) => {
        const response = await axios.get(`${URL}q=${city}`);

        const { data: requestedCity } = response;

        if (requestedCity.status === 404) {
            reject(new Error('city not found'));
        } else if (requestedCity.status === 200) {
            resolve(requestedCity);
        }
    });

    return promise;
}

// 'city not found'

cityWeather('cali')
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
