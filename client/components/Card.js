import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import RoundButtonSmall from './RoundButtonSmall';

import styles from './card.styles';
import COLORS from '../styles/colours';
import ASSETS from '../assets/assets';


type Props = {
  title: String,
  articleTitle: String,
  articleText: String,
  LeftButtonText: String,
  RightButtonText: String,
}

const Card = (props: Props) => (
  <View styles={styles.container}>
    <View styles={styles.row}>
      <RoundButtonSmall icon={ASSETS.BULB} styles={{ backgroundColor: COLORS.QUART }} />
      <Text styles={styles.title}>{props.title}</Text>
    </View>
    <View>
      <Text>{props.articleTitle}</Text>
      <Text>{props.articleText}</Text>
    </View>
    <View>
      <View>
        <Text>
          {props.LeftButtonText}
        </Text>
      </View>
      <View>
        <Text>
          {props.RightButtonText}
        </Text>
      </View>
    </View>
  </View>
);


export default Card;
