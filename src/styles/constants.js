import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const Size = (n = 1) => n * 10 * width / 250;

export const Colors = {
  primary: '#05174f',
  secondary: '#9f9f9f',
  yellow100: '#ed8829',
  gradient: {
    primary: '#0f0ed4',
    secondary: '#0e0b8a',
    third: '#0f0c79'
  },
  loginHeader: {
    bar: '#a4a3cd'
  },
  divider: '#b8b8b8',
  text: {
    danger: 'red'
  },
  postBottom: {
    primary: '#f1f6fb'
  },
  green1: '#4cb906',
};
