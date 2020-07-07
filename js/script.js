"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");
    }
    },
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
    writeYourGenres: function() {
        /*for(let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            while(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == ''){
                alert("Вы ввели некорректные данные");
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр №${i+1} это ${item}`);
        });*/
        for(let i = 0; i < 1; i++){
        let genre = prompt('Введите ваши любимые жанры через запятую:');
            if(genre == null || genre == ''){
                i--;
                alert('Вы ввели неверные данные');
            }
            else{
            personalMovieDB.genres = genre.split(', ');
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB);