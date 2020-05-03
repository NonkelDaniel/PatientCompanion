import { StyleSheet } from 'react-native';
import COLORS from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: '90%',
    
  },
  toprow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.CARD_COLOR,
    height: 60,
    paddingLeft: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomrow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.CARD_COLOR,
    height: 60,
    paddingLeft: 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 26,
    color: COLORS.WHITE,
    marginLeft: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 26,
    color: COLORS.WHITE,
    marginLeft: 24,
    marginTop: 12,
  },
  innercontainer: {
    backgroundColor: COLORS.CARD_DARK
  },
  scroller: {
    marginRight: 36,
    marginLeft: 24,
    marginBottom: 24,
    width: 500,
  },
  button: {
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});

export default styles;
