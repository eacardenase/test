const cityWeather = require('../solution');

describe('Fetching Weather Data', () => {
    test('It should return Error: string is empty', () => {
        const input = '';

        return expect(() => {
            cityWeather(input);
        }).toThrow(new Error('string is empty'));
    });

    test('It should return Error: not a string', () => {
        const input = 5;

        expect(() => {
            cityWeather(input);
        }).toThrow(new Error('not a string'));
    });

    test('It should return Error: not a string', () => {
        const input = [];

        expect(() => {
            cityWeather(input);
        }).toThrow(new Error('not a string'));
    });

    test('It should return Error: not a string', () => {
        const input = null;

        expect(() => {
            cityWeather(input);
        }).toThrow(new Error('not a string'));
    });

    test(`It should resolve to { name: 'boston', property2: 'Property2' }`, () => {
        const input = 'boston';

        expect(cityWeather(input)).resolves.toEqual({
            name: 'boston',
            property2: 'Property2',
        });
    });

    test(`It rejects Error: city not found`, () => {
        const input = 'cali';

        expect(cityWeather(input)).rejects.toEqual(new Error('city not found'));
    });
});
