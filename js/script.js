"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count <= 10 && personalMovieDB.count > 0) {
    alert("Просмотренно мало фильмов");
}
else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else  if (personalMovieDB.count > 30) {
    alert("Вы киноман!");
} else {
    alert("Произошла обишка");
}


let num = 1;
while(num <=2) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    if(lastFilm != null && lastFilm.length != '' && lastFilm.length < 50) {
        let rating = prompt("На сколько оцените его?", "");
        personalMovieDB.movies[lastFilm] = rating;
        num++;
    }
}

console.log(personalMovieDB);