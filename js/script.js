"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel () {
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
}

detectPersonalLevel();

function rememberMyFilms() {
    let num = 1;
    while(num <=2) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    let rating = prompt("На сколько оцените его?", "");
    if(lastFilm != null && rating !=null && rating !='' && lastFilm.length != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rating;
        num++;
    }
}
}

rememberMyFilms();

function showMyDB () {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("Error");
    } 
}

showMyDB();

// Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// 
function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
        personalMovieDB.genres[i] = genre;
    }   
}

writeYourGenres();