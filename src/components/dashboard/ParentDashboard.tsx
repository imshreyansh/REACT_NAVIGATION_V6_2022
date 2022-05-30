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
import TopBar from '../common/TopBar';
import {toggleError} from '../../redux/action/toaster';
import {useDispatch} from 'react-redux';

const ParentDashboard = (props: any) => {
  useEffect(() => {});

  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##EEEEEE',
  },
});

export default ParentDashboard;
