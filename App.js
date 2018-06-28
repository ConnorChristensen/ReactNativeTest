/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Flight extends Component {
  constructor(props) {
    super(props);
    this.state = {isSelected: true};
  }
  render() {
    return(
      <View style={{
        height: 120,
        flexDirection: 'column',
        shadowColor: '#aaaaaa',
        margin: 3,
        backgroundColor: '#e2e2e2'
      }}>
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ededed' }}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingLeft: 10 }}>
            <Text style={styles.textLight}>From: {this.props.startAIR}</Text>
            <Text style={styles.textDark}>{this.props.start}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={styles.textLight}>From: {this.props.endAIR}</Text>
            <Text style={styles.textDark}>{this.props.end}</Text>
          </View>
          <View style={{backgroundColor: 'rgb(9, 130, 255)', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
            <Text style={{color: 'white', fontSize: 20}}>{this.props.price}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={styles.textLight}>When</Text>
            <Text style={styles.textDark}>{this.props.when}</Text>
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={[styles.textLight, styles.textRight]}>Buy By</Text>
            <Text style={styles.textDark}>{this.props.buy}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column' }}>
        <View style={{height: 25, backgroundColor: '#C43B00'}}/>
        <View style={{justifyContent: 'center', alignItems: 'center', height: 50, backgroundColor: 'rgb(233, 69, 0)'}}>
          <Text style={{fontSize: 25, color: 'white'}}>React Native Test</Text>
        </View>
        <Flight startAIR="PDX" endAIR="AMS" start="Portland" end="Amsterdam" when="11/18 - 12/18" buy="today" price="$532"/>
        <Flight startAIR="PDX" endAIR="KOA" start="Portland" end="Kona" when="08/18 - 12/18" buy="tomorrow" price="$372"/>
        <Flight startAIR="SEA" endAIR="MFM" start="Seattle" end="Macau" when="11/18 - 05/19" buy="tomorrow" price="$556"/>
        <Flight startAIR="SEA" endAIR="INV" start="Seattle" end="Inverness" when="08/18 - 05/19" buy="today" price="$495"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scottOrange: {
    backgroundColor: 'rgb(233, 69, 0)'
  },
  scottBlue: {
    backgroundColor: 'rgb(9, 130, 255)'
  },
  textRight: {
    textAlign: 'right'
  },
  textLight: {
    color: '#707070',
    fontSize: 12
  },
  textDark: {
    color: 'black',
    fontSize: 20
  }
});
