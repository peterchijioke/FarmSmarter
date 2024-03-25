import React from 'react';
import Button from '../common/Button';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  handleReset,
  handleSave,
  handleStart,
  handleStop,
} from '../../helpes/services';

const dataAction = [
  {
    id: '1',
    name: 'Start',
    fuc: handleStart,
  },
  {
    id: '2',
    name: 'Stop',
    fuc: handleStop,
  },
  {
    id: '3',
    name: 'Reset',
    fuc: handleReset,
  },
  {
    id: '4',
    name: 'Save',
    fuc: handleSave,
  },
];
export default () => (
  <View style={styles.container}>
    {dataAction?.map(data => (
      <Button title={data.name} key={data.id} onPress={data.fuc} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
    gap: 10,
    position: 'relative',
    paddingHorizontal: 20,
  },
});
