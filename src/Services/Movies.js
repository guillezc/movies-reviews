import moviesAPI from './MoviesAPI';

export const useMovies = {
  getAll: async () => {
    try {
      const movies = await moviesAPI.getMoviews();
      return movies?.results;
    } catch (e) {
      return [];
    }
  },
};
