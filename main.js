const numberOfFilms = prompt('How many films have you watched already?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('One of the last viewed films?', ''),
      b = prompt('Rate?', ''),
      c = prompt('One of the last viewed films?', ''),
      d = prompt('Rate?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);