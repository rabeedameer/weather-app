import axios from 'axios';

export default class Weather {
    constructor() {
        this.apiKey = 'c5b27ea3cfd3a70d0a3d7ce16693bebc';
        this.baseURL = 'http://api.openweathermap.org/data/2.5/';
    }
    async weather(city) {
        try {
            const res = await axios.get(`${this.baseURL}weather?q=${city}&units=metric&appid=${
                this.apiKey
            }`);
            const condition = res.data.weather
                .map(item => {
                    return item.description;
                })
                .join(' ,');
            return ` The temperatur in ${city} is ${res.data.main.temp}°C ${condition}`;
        } catch (error) {
            console.error('Check your city the city you looking for is not exsit');
        }
    }
}
