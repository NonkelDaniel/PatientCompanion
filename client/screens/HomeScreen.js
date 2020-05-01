import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import Emoji from 'react-native-emoji';

import RoundButton from '../components/RoundButton';
import Card from '../components/Card';

import styles from './homescreen.styles';
import COLORS from '../styles/colours';
import ASSETS from '../assets/assets';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.greeting}>
          <View style={styles.row}>
            <Text style={styles.title}>Hi Stef</Text>
            <Emoji name=':wave:' style={styles.emoji} />
          </View>
          <Text style={styles.subTitle}>How can I help you today?</Text>
          <ScrollView
            horizontal
            style={styles.scroller}
          >
            <RoundButton icon={ASSETS.INFO} styles={{ backgroundColor: COLORS.PRIMARY }} />
            <RoundButton icon={ASSETS.BULB} styles={{ backgroundColor: COLORS.QUART }} />
            <RoundButton icon={ASSETS.TRIAL} styles={{ backgroundColor: COLORS.SECONDARY }} />
            <RoundButton icon={ASSETS.COMMUNITY} styles={{ backgroundColor: COLORS.RED }} />
            <RoundButton icon={ASSETS.BULB} styles={{ backgroundColor: COLORS.RED }} />
            <RoundButton icon={ASSETS.BULB} styles={{ backgroundColor: COLORS.RED }} />
          </ScrollView>
          <Card
            title='Tip of the day'
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
