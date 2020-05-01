import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Emoji from 'react-native-emoji';

import styles from './homescreen.styles';

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.greeting}>
      <View style={styles.row}>
        <Text style={styles.title}>Hi Stef</Text>
        <Emoji name=':wave:' style={styles.emoji} />
      </View>
      <Text style={styles.subTitle}>How can I help you today?</Text>
    </View>
  </View>
);


export default HomeScreen;
