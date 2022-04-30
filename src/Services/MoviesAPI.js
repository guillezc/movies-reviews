class MoviesAPI {
  constructor() {
    this.baseURL = 'https://api.nytimes.com/svc/movies/v2';
    this.config = {
      redirect: 'follow',
      headers: {
        Accept: '*/*',
        'Content-type': 'application/json',
      },
    };
    this.apiKey = 'MGGjJet1Dsi4w227jmksFx2w30ksViTv';
  }

  getMoviews = async () => {
    const response = await fetch(
      `${this.baseURL}/reviews/picks.json?api-key=${this.apiKey}`,
      {
        ...this.config,
        method: 'GET',
      },
    );
    return response.json();
  };
}

const moviesAPI = new MoviesAPI();
export default moviesAPI;
