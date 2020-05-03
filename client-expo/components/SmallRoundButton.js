import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons/';

import styles from './smallroundbutton.styles';

type Props= {
  icon: String,
  iconSize: Number,
  color: String,
  extraStyle: Number,
};

const SmallRoundButton = (props: Props) => (
  <View style={[styles.container, props.extraStyle]}>
    <MaterialCommunityIcons name={props.icon} size={props.iconSize} color={props.color} />
  </View>
);


export default SmallRoundButton;
