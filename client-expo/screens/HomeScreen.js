import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import Emoji from 'react-native-emoji';

import RoundButton from '../components/RoundButton';
import CtaScroller from '../components/CtaScroller';
import Card from '../components/Card';

import styles from './homescreen.styles';
import COLORS from '../styles/colors';
// import ASSETS from '../assets/assets';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const iconSize = 34;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.greeting}>
          <View style={styles.row}>
            <Text style={styles.title}>Hi Stef</Text>
            <Emoji name=':wave:' style={styles.emoji} />
          </View>
          <Text style={styles.subTitle}>How can I help you today?</Text>
          <CtaScroller />
          <Card
            title='Community'
            articleText='test'
            LeftButtonText='test'
            RightButtonText='test'
          />
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;
