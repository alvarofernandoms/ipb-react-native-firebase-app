import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from './BottomNavBar.style';

export default class BottomNavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
          <Ionicons style={[styles.icon, {marginLeft: 25}]} name="md-home" size={35} color="black"/>
        </TouchableHighlight>
        <TouchableHighlight>
          <Ionicons style={styles.icon} name="md-book" size={35} color="black"/>
        </TouchableHighlight>
        <TouchableHighlight>
          <Ionicons style={styles.icon} name="md-calendar" size={35} color="black"/>
        </TouchableHighlight>
        <TouchableHighlight>
          <Ionicons style={styles.icon} name="md-notifications" size={35} color="black"/>
        </TouchableHighlight>
        <TouchableHighlight>
          <Ionicons style={styles.icon} name="md-person" size={35} color="black"/>
        </TouchableHighlight>
      </View>
    );
  }
}