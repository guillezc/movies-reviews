import React from 'react';
import {
  Image,
  Linking,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import SafeWrapper from '../../Components/SafeWrapper';

const WINDOW = Dimensions.get('window');

const MoviesDetails = ({navigation, route}) => {
  const movie = route.params?.movie;

  return (
    <SafeWrapper>
      <Image source={{uri: movie.multimedia.src}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{movie.display_title}</Text>
        <View style={styles.spaceBordered} />
        <Text style={styles.body}>{movie.headline}</Text>
        <View style={styles.spaceBordered} />
        <Text style={styles.body}>{`by ${String(
          movie.byline,
        ).toUpperCase()}`}</Text>
        <View style={styles.spaceBordered} />
        <Text style={styles.body}>{movie.summary_short}</Text>
        <View style={styles.spaceBordered} />
        <Text style={styles.body}>{`Release date: ${movie.opening_date}`}</Text>
        <View style={styles.spaceBordered} />
        <TouchableOpacity onPress={() => Linking.openURL(movie.link.url)}>
          <Text
            style={
              styles.link
            }>{`Read the New York Times Review of: ${movie.display_title}\non web browser >>`}</Text>
        </TouchableOpacity>
        <View style={styles.spaceBordered} />
        <TouchableOpacity
          onPress={() => navigation.navigate('WebView', {url: movie.link.url})}>
          <Text
            style={
              styles.link
            }>{`Read the New York Times Review of: ${movie.display_title}\non in-app browser >>`}</Text>
        </TouchableOpacity>
      </View>
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: WINDOW.width,
    height: WINDOW.width * 0.5,
  },
  content: {
    marginTop: 15,
    marginLeft: 15,
  },
  spaceBordered: {
    height: 1,
    backgroundColor: '#d4d4d4',
    marginBottom: 10,
  },
  title: {
    fontWeight: '700',
    marginBottom: 10,
  },
  body: {
    fontWeight: '400',
    marginBottom: 10,
  },
  link: {
    color: '#4597FD',
    fontWeight: '400',
    marginBottom: 10,
  },
});

export default MoviesDetails;
