export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
  });
  
  export const getMoviesSuccess = (movie) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movie,
  });
  
  export const getMoviesFailure = () => ({
    type: "GET_MOVIE_FAILURE",
  });

  //Create movie

  export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
  });
  
  export const createMovieSuccess = (movies) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movies,
  });
  
  export const createMovieFailure = () => ({
    type: "CREATE_MOVIES_FAILURE",
  });



  //Delete

  export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START",
  });
  
  export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
  });
  
  export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE",
  });