import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  PermissionsAndroid,
  PermissionStatus,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import MapView, {
  AnimatedRegion,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {request, PERMISSIONS} from 'react-native-permissions';
import {RootState} from '../app/store';
import {saveInitialRegion, switchOnLocation} from '../helpes/services';

export default () => {
  const [showMap, setShowMap] = useState(false);
  const pathsCoordinates = useSelector((state: RootState) => state.app.data);
  const region = useSelector((state: RootState) => state.app.region);
  const initialRegion = useSelector(
    (state: RootState) => state.app.initialRegion,
  );
  const [animatedRegion, _] = useState<any>(
    new AnimatedRegion({
      ...region,
    }),
  );
  useEffect(() => {}, [pathsCoordinates]);

  const animatedMarker: any = useRef(null);
  const mapRef: any = useRef(null);
  const onMapLayout = useCallback(() => {
    if (Platform.OS === 'android') {
      if (mapRef.current) {
        mapRef?.current?.fitToCoordinates([region], {
          edgePadding: {top: 20, right: 20, bottom: 20, left: 20},
          animated: true,
        });
      }
    }
  }, [region]);

  useEffect(() => {
    animateMarker(region.longitude, region.latitude);
  }, [region]);
  const animateMarker = (longitude: any, latitude: any) => {
    const newCord = {longitude, latitude};
    if (Platform.OS === 'android') {
      animatedMarker.current?.animateMarkerToCoordinate(newCord, 700);
    } else {
      animatedRegion
        .timing({
          ...newCord,
          useNativeDriver: true,
          toValue: 0,
          latitudeDelta: 0,
          longitudeDelta: 0,
        })
        .start();
    }
  };
  const getMapRegion = () => {
    return {
      ...initialRegion,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    };
  };

  return (
    <MapView.Animated
      ref={mapRef}
      onLayout={onMapLayout}
      provider={Platform.select({
        android: PROVIDER_GOOGLE,
        ios: undefined,
      })}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
      region={getMapRegion()}>
      {pathsCoordinates !== null &&
        Array.isArray(pathsCoordinates) &&
        pathsCoordinates.length > 0 && (
          <Polyline
            coordinates={pathsCoordinates}
            strokeColor="maroon"
            strokeWidth={4}
          />
        )}
      <Marker.Animated
        ref={animatedMarker}
        coordinate={animatedRegion}
        title="Initial Location"
        description="Initial Location ">
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 50,
            backgroundColor: 'maroon',
          }}
        />
      </Marker.Animated>
    </MapView.Animated>
  );
};
function checkLocationSettings() {
  throw new Error('Function not implemented.');
}
