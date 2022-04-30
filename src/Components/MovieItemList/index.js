import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MovieItemList = ({image, title, headline, director, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.rightContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.headline}>{headline}</Text>
        <Text style={styles.director}>{director}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 5,
    paddingBottom: 5,
  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    fontWeight: '700',
    marginBottom: 5,
  },
  rightContent: {
    flex: 1,
    marginLeft: 15,
    marginRight: 10,
  },
});

export default MovieItemList;
