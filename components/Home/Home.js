import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './Home.style';
import BottomNavBar from '../BottomNavBar/BottomNavBar';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHome}>
          <Text style={styles.logo}>Logo Aqui</Text>
          <Text>IPB React Native Firebase App ;)</Text>
        </View>
        <BottomNavBar/>
      </View>
    );
  }
}
