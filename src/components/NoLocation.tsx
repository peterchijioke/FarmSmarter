import {Text, View} from 'react-native';
import React from 'react';
export default () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    }}>
    <Text
      style={{
        color: 'black',
        fontSize: 18,
      }}>
      Location Not switched on
    </Text>
  </View>
);
