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

const CardComponent= ({name, capital, population, latlng, flag, onPress}) =>{
    return(
        <View style={{width:'100%',backgroundColor:'#FFF',marginBottom:15,borderRadius:10,
        elevation:15,shadowColor:'#000',
        }}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,paddingVertical:5}}>
              <Text>
                  Name
              </Text>
              <Text>
                  {name}
              </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,paddingVertical:5}}>
              <Text>
                  Capital
              </Text>
              <Text>
                  {capital}
              </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,paddingVertical:5}}>
              <Text>
                  Population
              </Text>
              <Text>
                  {population}
              </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,paddingVertical:5}}>
              <Text>
                  Latlng
              </Text>
              <Text>
                  {latlng}
              </Text>
          </View>
          <View>
              <SvgUri width='100' height='80' uri={flag} />
          </View>
          <TouchableOpacity
          onPress={()=> onPress()}
          style={{backgroundColor:'blue',margin:10,padding:10}}
          >
             <Text style={{color:'white',textAlign:'center'}}>Capital Weather</Text>
          </TouchableOpacity>
        </View>
    )
}

  


class CountryDetails extends Component {
    getWeather=(capital)=>{
        return fetch(
            'http://api.weatherstack.com/current?access_key=76a9a3cb13371d78f09aa388b93c95fe&QUERY='+capital
        )
        .then((response)=>response.json())
        .then((responseJson)=>this.props.navigation.navigate('CountryWeather',{
            weatherData:responseJson
        }))
    }
    renderItems=({item})=>   (
    
     
        <CardComponent
        name={item.name}
        capital={item.capital}
        population={item.population}
        latlng={item.latlng[0]}
        flag={item.flag}
        onPress={()=>this.getWeather(item.capital)}
        
      ></CardComponent>
    )
    render(){
        const countryData= this.props.route.params.details;
        console.log(countryData,'nnnn')
        return(
            <View>
                <FlatList
                  data= {countryData}
                  keyExtractor= {(item) =>item.id}
                  renderItem={this.renderItems}
                ></FlatList>
            </View>
        );
    }
}
export default CountryDetails;