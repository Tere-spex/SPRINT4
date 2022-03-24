// Exercise 1: Get the array of all directors.✔
function getAllDirectors(movies) {
  let director = movies.map((movie) => movie.director);
  //console.log("EXERCICE 1 ->", directores);
  return director;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies) {
 let moviesFromDirector = movies.filter((movies) => movies.director === 'Quentin Tarantino');
 return  moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies) {
  const moviesDirector = getMoviesFromDirector(movies);
  if (moviesDirector.length === 0) return 0;
  const sumaDeTot = moviesDirector.reduce((acc, movie) => {
    if(movie.score !== undefined){
    return movie.score + acc;
    } else {
      return acc;
    }
  }, 0);
  const resultat = (sumaDeTot / moviesDirector.length).toFixed(2);
  return Number(resultat);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let moviesByNameAlphabetically = movies.map((movie) => movie.title).sort();
  let moviesAlphabeticallyFirstTwenty = moviesByNameAlphabetically.slice(0, 20);
  return moviesAlphabeticallyFirstTwenty;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
 let moviesByYear =  movies.map((movie) => movie).sort((a, b) => {
   if (a.year > b.year) { 
    return 1;
   }else if (a.year < b.year) {
     return -1;
   }else{ //Si el año es igual, quiero que me los ordene alfabeticamente//No quiero que me retorne 0.
    if (a.title > b.title) {
      return 1;
    }else if (a.title < b.title) {
      return -1;
    }else{
      return 0;
    }
   }
 })
 return moviesByYear;
}

//Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies) {
  const dramaMovies = movies.filter((peli, i) => peli.genre[i] === 'Drama' && peli.genre.length === 1)
  const sumaDeTot = dramaMovies.reduce((acc, movie) => {
    if(movie.score !== undefined){
    return movie.score + acc;
    } else {
      return acc;
    }
  }, 0);
  const resultat = (sumaDeTot / dramaMovies.length).toFixed(2);
  return Number(resultat);
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let moviesDuration = movies.map((movie) => movie.duration);
    for (let i = 0; i < moviesDuration.length; i++) {
      let horas = moviesDuration[i].substring(0, moviesDuration[i].search("h"));
      let minutos = moviesDuration[i].substring(moviesDuration[i].search("h") + 1, moviesDuration[i].search("min")) * 1;
      let horasEnMinutos = horas * 60 + minutos;
      return horasEnMinutos; 
    }
  }
  
// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
