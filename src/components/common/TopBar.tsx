import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
import {toggleError} from '../../redux/action/toaster';
import {useDispatch} from 'react-redux';

const TopBar = (props: any) => {
  useEffect(() => {});

  const {icon, c1, c2, t1, c3, c4, t2} = styles;
  return (
    <View>
      <View style={c1}>
        <View style={c2}>
          <Text style={t1}>{Strings.tomcom}</Text>
          <View style={c3}>
            <Icon name="user" color="#1A1430" size={width / 13} style={icon} />
            <Icon
              name="search"
              color="#1A1430"
              size={width / 13}
              style={icon}
            />
            <View>
              <Icon
                name="tomcomwhite"
                color="#1A1430"
                size={width / 13}
                style={icon}
              />
              <View style={c4}>
                <Text style={t2}>12</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  c1: {
    width: w,
    paddingBottom: width / 50,
    borderBottomWidth: 1,
    borderBottomColor: '#D10027',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  c2: {
    width: w / 1.1,
    marginTop: width / 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  t1: {
    fontSize: width / 12,
    color: '#1A1430',
    fontFamily: poppinsBold,
    top: 5,
  },
  c3: {
    width: w / 3.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  c4: {
    width: width / 22,
    height: width / 22,
    borderRadius: width / 44,
    backgroundColor: '#D10027',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 6,
    left: width / 30,
  },
  t2: {
    fontSize: width / 50,
    color: '#fff',
    fontFamily: poppinsBold,
  },
});

export default TopBar;
