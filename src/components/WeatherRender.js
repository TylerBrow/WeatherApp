import React, {Component} from 'react'
import {getWeather} from '../actions/weatheraction'
import { connect } from 'react-redux';
import Moment from 'moment'

class WeatherRender extends Component {

    componentDidMount() {
        getWeather()
    }

    render() {
        return (
            <div id='container'>
                <div id='day1'>
                    <ul>
                        {
                            this.props.wData.map(items => (
                                <li>{Math.floor(items.temp)}  |||  {items.weather.map(item => item.description)}  ||| {Moment(items.time).format('dddd')}</li>
                             ))

                        }
                    </ul>
                </div>
                <div id='day2'>

                </div>
                <div id='day3'>

                </div>
                <div id='day4'>

                </div>
                <div id='day5'>

                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        wData: appState.wData
    }
}
export default connect(mapStateToProps)(WeatherRender)