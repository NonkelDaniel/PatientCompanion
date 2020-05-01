import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import styles from './roundbutton.styles';

type Props= {
  icon: any,
  styles: Number,
};

const RoundButton = (props: Props) => (
  <View style={[styles.container, props.styles]}>
    <Image source={props.icon} style={styles.icon} />
  </View>
);


export default RoundButton;
