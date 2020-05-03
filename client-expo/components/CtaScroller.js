import React from 'react';
import {
  ScrollView
} from 'react-native';
import Emoji from 'react-native-emoji';

import RoundButton from './RoundButton';

import styles from './ctascroller.styles';
import COLORS from '../styles/colors';

class CtaScroller extends React.Component {
  render() {
    const iconSize = 30;
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroller}
      >
        <RoundButton
          icon='atom'
          iconSize={iconSize}
          color={COLORS.WHITE}
          extraStyle={{ backgroundColor: COLORS.PRIMARY }}
        />
        <RoundButton
          icon='lightbulb-outline'
          iconSize={iconSize}
          color={COLORS.WHITE}
          extraStyle={{ backgroundColor: COLORS.QUART }}
        />
        <RoundButton
          icon='inbox'
          iconSize={iconSize}
          color={COLORS.WHITE}
          extraStyle={{ backgroundColor: COLORS.TERTIARY }}
        />
        <RoundButton
          icon='chat'
          iconSize={iconSize}
          color={COLORS.WHITE}
          extraStyle={{ backgroundColor: COLORS.RED }}
        />
        <RoundButton
          icon='lightbulb-outline'
          iconSize={iconSize}
          color={COLORS.WHITE}
          extraStyle={{ backgroundColor: COLORS.FOURTH }}
        />
        <RoundButton
          icon='atom'
          iconSize={iconSize}
          color={COLORS.WHITE}
          extraStyle={{ backgroundColor: COLORS.PRIMARY_DARK }}
        />
      </ScrollView>
    );
  }
}

export default CtaScroller;
