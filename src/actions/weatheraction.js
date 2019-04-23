import store from '../store'
import axios from 'axios'
// so we can use store.dispatch()



export function getWeather() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=5506956&APPID=740f2c64b5c035c92809b0eb0e18763d&units=imperial').then(resp => {
        var wData= resp.data.list.map(items => {
            return {
                temp: items.main.temp,
                weather: items.weather,
                time: items.dt_txt
            }
        })
        store.dispatch ({
            type: 'GET_WEATHER',
            payload: wData
        })  
    })
}