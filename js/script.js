"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
let rating = prompt("На сколько оцените его?", "");

personalMovieDB.movies = {
    lastFilm,
    rating
};

console.log(personalMovieDB.movies);