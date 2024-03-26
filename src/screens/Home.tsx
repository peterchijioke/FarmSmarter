import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform, StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import ButtonSection from '../components/home/ButtonSection';
import AppMap from '../components/AppMap';
import {handleStart, saveInitialRegion} from '../helpes/services';
import {PERMISSIONS, request} from 'react-native-permissions';

export default () => {
  useEffect(() => {
    saveInitialRegion();
  }, []);

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     try {
  //       let permission: any;
  //       if (Platform.OS === 'android') {
  //         permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
  //       } else if (Platform.OS === 'ios') {
  //         permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
  //       }
  //       const granted = await request(permission);
  //       if (granted === 'granted') {
  //         console.log('Granted');
  //       } else {
  //         console.log('Location permission denied');
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };
  //   requestLocationPermission();
  // }, []);

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
