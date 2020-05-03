import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import SmallRoundButton from './SmallRoundButton';

import styles from './textblock.styles';
import COLORS from '../styles/colors';


type Props = {
  title: String,
  articleTitle: String,
  articleText: String,
  LeftButtonText: String,
  RightButtonText: String,
}

const TextBlock = (props: Props) => (
  <View style={styles.container}>
    <View style={styles.head}>
      <View style={styles.toprow}>
        <Text style={styles.text}>Posted 2 days ago</Text>
        <Text style={styles.bullet}>{'\u2B24'}</Text>
        <Text style={styles.text}>Dries Droopy</Text>
      </View>
      <Text style={styles.title}>My Disease</Text>
    </View>
    <Text style={styles.description}>
      This is a sharing about my recovery from Myasthenia Gravis (MG). This disease started initially from my jaw. When I ate or chew something, I would feel tired soon and then had to stop chewing because I had no strength to do it...
    </Text>
  </View>
);


export default TextBlock;
