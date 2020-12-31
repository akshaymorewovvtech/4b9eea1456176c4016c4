import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Container,Content} from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class Home extends Component {
    constructor(props){
        super(props);
        this.state= {
            textValue:'',
            countryData: [],

        }
    }
    getData(countryName){
            fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then((response)=> response.json())
        .then((responseJson)=> {
            console.log('response', responseJson);
            this.setState({
                countryData: responseJson ,
            })
            this.props.navigation.navigate('CountryDetails',{details:this.state.countryData})
            // if(this.state.countryData.length > 0){
            //   this.props.navigation.navigate(
            //       'CountryDetails', {
            //           countryData: this.state.countryData.filter((item)=> 
            //             item.name.includes(countryName)
            //           )
            //       }
            //   )
            //   console.log('countryData', this.state.countryData);
            // } else{
            //       alert('Data Not Found');
            // }
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    render(){
        return(
        <Container>
            <Content>
                <View style={{padding:20}}>
                    <TextInput 
                    placeholder= "Enter country"
                    value= {this.state.textValue}
                    onChangeText= {(text) => this.setState({textValue:text})}
                    >
                        
                    </TextInput>
                    <TouchableOpacity
                     onPress={() =>this.getData(this.state.textValue)}
                     style={{backgroundColor:"blue",width:'100%',height:45,borderRadius:20 
                , alignItems:'center',justifyContent: 'center',marginTop:30}}>
                        <Text style={{color:'#FFF',fontWeight:'bold',fontSize:20,letterSpacing:1.8}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
        );
    }
}
export default Home;