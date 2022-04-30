import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import SafeWrapper from '../../Components/SafeWrapper';
import MovieItemList from '../../Components/MovieItemList';

import {useMovies} from '../../Services/Movies';

const MoviesList = ({navigation}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const _movies = await useMovies.getAll();
    const moviesWithId = _movies.map((m, index) => ({...m, id: index}));
    setMovies(moviesWithId);
  };

  const keyExtractor = item => item.id.toString();

  return (
    <SafeWrapper>
      <FlatList
        contentContainerStyle={styles.list}
        data={movies}
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <MovieItemList
            image={item.multimedia.src}
            title={item.display_title}
            headline={item.headline}
            director={item.byline}
            onPress={() => navigation.navigate('MoviesDetails', {movie: item})}
          />
        )}
      />
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 5,
  },
});

export default MoviesList;
