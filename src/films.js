// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map((element) => element.director);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director.includes(director));
  return result;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorList = array.filter((movie) => movie.director.includes(director));
  let result = parseFloat((directorList.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0) / directorList.length).toFixed(2));
  return result;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result =  array.map((element) => element.title).sort();
  if (result.length > 20) {result.length = 20};
  return result;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.map((movie) => ({ title: movie.title, year: movie.year }));
  result.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
  return result;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let categoryMovies = array.filter((element) => element.genre.includes(category));
  let result = parseFloat((categoryMovies.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0) / categoryMovies.length).toFixed(2));
  return result;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const regExp = /^(\d+)[^0-9]*(\d+)*/;
  let result = array.map((movie) => ({ duration: movie.duration }));

  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    const match = element.duration.match(regExp);
    if (match[2] == undefined) {
      element.duration = parseInt(match[1]) * 60;
    } else {
      element.duration = (parseInt(match[1]) * 60) + parseInt(match[2]);
    }
  }
  return result;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = array.filter((movie) => movie.year === year);
  result.sort((a, b) => b.score - a.score);
  result.length = 1;
  return result;
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
