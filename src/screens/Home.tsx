import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import ButtonSection from '../components/home/ButtonSection';
import AppMap from '../components/AppMap';
import {handleStart, saveInitialRegion} from '../helpes/services';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapWrapper}>
        <AppMap />
      </View>
      <ButtonSection />
    </View>
  );
};

const styles = StyleSheet.create({
  mapWrapper: {
    height: '80%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },

  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
});
