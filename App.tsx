import React, {useEffect} from 'react';
import {SafeAreaView, LogBox, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Sentry from '@sentry/react-native';
import Navigator from './src/components/navigators/Navigator';
import Toaster from './src/components/common/Toaster';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    Icon.loadFont();
    Sentry.init({
      dsn: 'https://d4a2552a9a704dc0972dbbbb5f89ca4f@o1264425.ingest.sentry.io/6447077',
      // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
      // We recommend adjusting this value in production.
      // tracesSampleRate: 1.0,
    });
  });

  LogBox.ignoreAllLogs();
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <Toaster />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Sentry.wrap(App);
