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

        const { data: responseData } = response;

        if (responseData.status === 404) {
            reject(new Error('city not found'));
        } else if (responseData.status === 200) {
            const { main: cityData } = responseData;

            resolve(cityData);
        }
    });

    return promise;
}

// 'city not found'

cityWeather('london')
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
