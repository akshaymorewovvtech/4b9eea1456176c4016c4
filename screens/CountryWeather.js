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
} from 'react-native';
import {SvgUri} from 'react-native-svg';

class CountryWeather extends Component{
    render(){
        const weatherData=this.props.route.params.weatherData;
        return(
            <View>
                <Text>
                    Capital name
                </Text>
                <Text>
                    {weatherData.location.name}
                </Text>
                <Text>
                    Temperature
                </Text>
                <Text>
                    {weatherData.current.temperature}
                </Text>
                <Text>
                    wind speed
                </Text>
                <Text>
                    {weatherData.current.wind_speed}
                </Text>
                <Text>
                    precip
                </Text>
                <Text>
                    {weatherData.current.precip}
                </Text>
            </View>
        )
    }
}
export default CountryWeather;