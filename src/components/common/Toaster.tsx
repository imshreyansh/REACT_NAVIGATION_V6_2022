import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {width, w} from '../../utils/resources/helpers';
import {useSelector} from 'react-redux';

const Toaster = () => {
  const store = useSelector(toast => {
    return {
      flag: toast.toaster.flag,
      message: toast.toaster.message,
      type: toast.toaster.type,
    };
  });

  const {flag, message, type} = store;

  if (flag) {
    return (
      <View style={styles.T1}>
        <View
          style={[
            styles.T2,
            {
              backgroundColor: type === 'success' ? '#009688' : '#f44336',
              borderLeftColor: type === 'success' ? '#004d40' : '#b71c1c',
            },
          ]}>
          <View style={styles.T3}>
            <View style={styles.T4}>
              {/* <Icon
                name={type === 'success' ? 'uniEA9E' : 'uniEABC'}
                color={type === 'success' ? '#004d40' : '#b71c1c'}
                size={width / 25}
              /> */}
            </View>
            <Text style={styles.T5}>{message}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  T1: {
    position: 'absolute',
    bottom: width / 30,
    width: w,
  },
  T2: {
    width: w / 1.1,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: width / 50,
    borderRadius: 5,
    borderLeftWidth: 10,
  },
  T3: {
    width: w / 1.2,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
  },
  T4: {
    width: width / 14,
    height: width / 14,
    borderRadius: width / 28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  T5: {
    fontSize: width / 25,
    color: '#fff',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: width / 30,
    width: w / 1.45,
  },
});
export default Toaster;
