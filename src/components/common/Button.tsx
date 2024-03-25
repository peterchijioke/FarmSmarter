import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
  loading?: boolean;
}

export default (props: Props) => {
  const TouchableComponent: any =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableComponent onPress={props.onPress}>
      <View style={styles.button}>
        {props?.loading ? (
          <ActivityIndicator size={20} color={'white'} />
        ) : (
          <Text style={styles.buttonText}>{props.title}</Text>
        )}
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'maroon',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexGrow: 1,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
