import React, { Component } from 'react';
import {

  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import {SvgUri} from 'react-native-svg';

class CountryWeather extends Component{
    render(){
        const weatherData=this.props.route.params.weatherData;
        console.log(weatherData,"weatherData")
        return(
            
            <View style={{
                padding:20
            }}>
                <Text>
                    Capital name:
                </Text>
                <Text>
                    {weatherData.location.name}
                </Text>
                <Text>
                    Temperature:
                </Text>
                <Text>
                    {weatherData.current.temperature}
                </Text>
                <Text>
                    wind speed:
                </Text>
                <Text>
                    {weatherData.current.wind_speed}
                </Text>
                <Text>
                    precip:
                </Text>
                <Text>
                    {weatherData.current.precip}
                </Text>
                <Image
                    source={{
                    uri:
                        weatherData.current != undefined
                        ? weatherData.current.weather_icons[0]
                        : null,
                    }}
                    style={{height: 88, width: 88}}
                />
            </View>
        )
    }
}
export default CountryWeather;