let numberOfFilms;

function start(){
    numberOfFilms = +prompt('How many films have you watched already?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many films have you watched already?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms(){
    for(let i = 0; i<2; i++){
        const a = prompt('One of the last viewed films?', ''),
            b = prompt('Rate?', '');
    
        if (a != null && b != null && a.length <= 50 && b.length <= 50 && a != '' && b != ''){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('You have saw so little number of films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('You are a great watcher');
    } else if (personalMovieDB.count >= 30){
        console.log('You are a cinephile');
    } else {
        console.log('Something went wrong');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
    console.log('Private mode is ON');
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(i = 1; i < 4; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();