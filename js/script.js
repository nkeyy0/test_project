"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    rating = +prompt("На сколько оцените его?", ""),
    lastFilm1 = prompt("Один из последних просмотренных фильмов?", ""),
    rating1 = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = rating;
personalMovieDB.movies[lastFilm1] = rating1; 

console.log(personalMovieDB.movies);