import React from 'react';
import {View, StyleSheet} from 'react-native';

const SafeWrapper = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 25
  },
});

export default SafeWrapper;
