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
    privat: false,
    detectPersonalLevel: function(){
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
    },
    rememberMyFilms: function() {
    let num = 1;
    while(num <=2) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    let rating = prompt("На сколько оцените его?", "");
    if(lastFilm != null && rating !=null && rating !='' && lastFilm.length != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rating;
        num++;
        }
    }
    },
    showMyDB: function(callback){
        callback();
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("Error");
        } 
    },
    /*
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
    writeYourGenres: function() {
        for(let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            while(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == ''){
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр №{$i} это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        }
        else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB);