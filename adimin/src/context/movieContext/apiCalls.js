import React from "react";
import axios from "axios";
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesStart } from "./MovieAction";
import { getMoviesFailure } from "./MovieAction";
import { getMoviesSuccess } from "./MovieAction";

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
      const res = await axios.get("/movies", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getMoviesSuccess(res.data));
    } catch (err) {
      dispatch(getMoviesFailure());
    }
  };

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};