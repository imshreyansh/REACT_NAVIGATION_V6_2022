import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Icon,
  width,
  w,
  height,
  h,
  poppinsBold,
  poppinsLight,
  poppinsMedium,
} from '../../utils/resources/helpers';
import {Strings} from '../../utils/languages/Strings';
import tomcomLogo from '../../assets/images/tomcomLogo.png';
import {toggleError} from '../../redux/action/toaster';
import {useDispatch} from 'react-redux';

const Login = (props: any) => {
  const [token, setToken] = useState('');
  useEffect(() => {});

  const {logoStyle, c1, t1, c3, c4, ti1, c5, t2, c6, t3, c7, t4, t5} = styles;
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={tomcomLogo} style={logoStyle} />
      <View style={c1}>
        <Text style={t1}>{Strings.loginTokenText}</Text>
      </View>
      <View style={c3}>
        <View style={c4}>
          <TextInput
            value={token}
            onChangeText={value => setToken(value)}
            style={ti1}
            placeholder="XXXX - XXXX"
            placeholderTextColor="#1A1430"
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ParentStack')}>
        <View style={c5}>
          <Text style={t2}>{Strings.mySchoolPortal}</Text>
        </View>
      </TouchableOpacity>
      <View style={c6}>
        <Text style={t3}>{Strings.tokenText}</Text>
      </View>
      <View style={c7}>
        <Text style={t5}>{Strings.needHelpLogginin}</Text>
        <TouchableOpacity>
          <Text style={t4}>{Strings.browseFaqs}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    marginTop: h / 30,
    width: width / 1.8,
    height: width / 2.5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  c1: {
    marginTop: h / 30,
    width: w / 1.1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  t1: {
    textAlign: 'center',
    width: w / 1.3,
    fontSize: width / 25,
    fontFamily: poppinsBold,
    color: '#1A1430',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  c3: {
    marginTop: h / 30,
    width: w / 1.1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  c4: {
    marginTop: width / 30,
    width: w / 1.15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#1A1430',
  },
  ti1: {
    width: w / 1.25,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: width / 25,
    height: width / 7.5,
    fontFamily: poppinsBold,
    color: '#1A1430',
    textAlign: 'center',
  },
  c5: {
    marginTop: h / 30,
    width: w / 1.15,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: width / 30,
    borderRadius: 12,
    backgroundColor: '#4A4A4A',
  },
  t2: {
    fontSize: width / 22,
    fontFamily: poppinsBold,
    color: '#fff',
  },
  c6: {
    marginTop: h / 20,
    width: w / 1.1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  t3: {
    marginTop: h / 30,
    textAlign: 'center',
    width: w / 1.15,
    fontSize: width / 30,
    fontFamily: poppinsLight,
    color: '#8d9298',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  c7: {
    marginTop: h / 30,
    width: w / 1.1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  t4: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: width / 30,
    fontFamily: poppinsMedium,
    color: '#D61A3D',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  t5: {
    marginTop: h / 40,
    textAlign: 'center',
    fontSize: width / 30,
    fontFamily: poppinsLight,
    color: '#8D9298',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Login;
