import config from '../config';

export async function queryUrl(query, page = 1) {
  
  const url =`${config.apiUrl}/search/movie?api_key=${config.apiKey}&query=${encodeURI(query)}&page=${page}&include_adult=false`;
  let dataRes = {
    loading: true,
    data: null,
    error: {
      status: false,
      error: ''
    }
  };

  await fetch(url)
    .then(response => response.json())
    .then(data => {
      dataRes = {
        ...dataRes,
        loading: false,
        data
      };
    })
    .catch(err => {
      dataRes = {
        ...dataRes,
        loading: false,
        error: {
          status: true,
          error: err,
        }
      }
    });

  return dataRes;

}

export async function getTrendingMovies(page = 1) {

  const url =`${config.apiUrl}/movie/popular?api_key=${config.apiKey}&page=${page}`;
  let dataRes = {
    loading: true,
    data: null,
    error: {
      status: false,
      error: ''
    }
  };

  await fetch(url)
    .then(response => response.json())
    .then(data => {
      dataRes = {
        ...dataRes,
        loading: false,
        data
      };
    })
    .catch(err => {
      dataRes = {
        ...dataRes,
        loading: false,
        error: {
          status: true,
          error: err,
        }
      }
    });

  return dataRes;
};

export async function getTopRated(page = 1) {

  const url =`${config.apiUrl}/movie/top_rated?api_key=${config.apiKey}&page=${page}`;
  let dataRes = {
    loading: true,
    data: null,
    error: {
      status: false,
      error: ''
    }
  };

  await fetch(url)
    .then(response => response.json())
    .then(data => {
      dataRes = {
        ...dataRes,
        loading: false,
        data
      };
    })
    .catch(err => {
      dataRes = {
        ...dataRes,
        loading: false,
        error: {
          status: true,
          error: err,
        }
      }
    });

  return dataRes;
};

export async function getInfoMovie(id) {

  const url =`${config.apiUrl}/movie/${id}?api_key=${config.apiKey}`;
  let dataRes = {
    loading: true,
    data: null,
    error: {
      status: false,
      error: ''
    }
  };

  await fetch(url)
    .then(response => response.json())
    .then(data => {
      dataRes = {
        ...dataRes,
        loading: false,
        data
      };
    })
    .catch(err => {
      dataRes = {
        ...dataRes,
        loading: false,
        error: {
          status: true,
          error: err,
        }
      }
    });

  return dataRes;

}

export async function getActorsMovieUrl(id) {
  const url =`${config.apiUrl}/movie/${id}/credits?api_key=${config.apiKey}`;
  let dataRes = {
    loading: true,
    data: null,
    error: {
      status: false,
      error: ''
    }
  };

  await fetch(url)
    .then(response => response.json())
    .then(data => {
      dataRes = {
        ...dataRes,
        loading: false,
        data
      };
    })
    .catch(err => {
      dataRes = {
        ...dataRes,
        loading: false,
        error: {
          status: true,
          error: err,
        }
      }
    });

  return dataRes;
}
