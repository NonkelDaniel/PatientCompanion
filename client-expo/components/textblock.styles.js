import { StyleSheet } from 'react-native';
import COLORS from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: 275,
    paddingBottom: 12,
    paddingTop: 12,
    backgroundColor: COLORS.CARD_COLOR,
    borderRadius: 6,
    marginRight: 12,
  },
  toprow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
  },
  title: {
    fontSize: 16,
    lineHeight: 26,
    color: COLORS.WHITE,
    marginLeft: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    lineHeight: 26,
    color: 'grey',
  },
  bullet: {
    color: 'grey',
    marginHorizontal: 6,
  },
  description: {
    width: 202,
    marginLeft: 24,
    color: COLORS.WHITE,
  }
});

export default styles;
