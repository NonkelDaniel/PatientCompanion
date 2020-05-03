import { StyleSheet } from 'react-native';
import COLORS from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.BACKGROUND,
  },
  greeting: {
    left: '5.6%',
    right: '32.8%',
    top: '6.44%',
    bottom: '93.12%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    // fontFamily: 'Lato-Bold',
    fontSize: 34,
    lineHeight: 40,
    color: COLORS.WHITE,
  },
  emoji: {
    fontSize: 34,
    lineHeight: 40,
    marginLeft: 12,
  },
  subTitle: {
    // fontFamily: 'Lato-Regular',
    fontSize: 20,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default styles;
