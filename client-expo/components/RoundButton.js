import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons/';

import styles from './roundbutton.styles';

type Props= {
  icon: String,
  iconSize: Number,
  color: String,
  extraStyle: Number,
};

const RoundButton = (props: Props) => (
  <View style={[styles.container, props.extraStyle]}>
    <MaterialCommunityIcons name={props.icon} size={props.iconSize} color={props.color} />
  </View>
);


export default RoundButton;
