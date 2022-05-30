import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/fonts/selection.json';
import {Dimensions} from 'react-native';

export const Icon = createIconSetFromIcoMoon(icoMoonConfig);

export const w = Dimensions.get('window').width;
export const h = Dimensions.get('window').height;
export const width = h / w > 1.6 ? w : 500;
export const height = h / w > 1.6 ? h : 900;
export const isTablet = h / w > 1.6;

export const poppinsLight = 'Poppins-Light';
export const poppinsBold = 'Poppins-Bold';
export const poppinsMedium = 'Poppins-Medium';
