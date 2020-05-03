import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

//test

import SmallRoundButton from './SmallRoundButton';
import TextBlock from './TextBlock';

import styles from './card.styles';
import COLORS from '../styles/colors';


type Props = {
  title: String,
  articleTitle: String,
  articleText: String,
  LeftButtonText: String,
  RightButtonText: String,
}

const Card = (props: Props) => (
  <View style={styles.container}>
    <View style={styles.toprow}>
      <SmallRoundButton
        icon='lightbulb-outline'
        iconSize={30}
        color={COLORS.WHITE}
        extraStyle={{ backgroundColor: COLORS.FOURTH }}
      />
      <Text style={styles.title}>{props.title}</Text>
    </View>
    <View style={styles.innercontainer}>
      <Text style={styles.subtitle}>
        This week's topics
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroller}
      >
        <TextBlock />
        <TextBlock />
        <TextBlock />
      </ScrollView>
    </View>
    <View style={styles.bottomrow}>
      <Text style={styles.button}>SEE ALL</Text>
      <Text style={styles.button}>ADD TOPIC</Text>
    </View>
  </View>
);


export default Card;
