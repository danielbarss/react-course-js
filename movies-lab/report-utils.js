export const getDirectorLine = movie => `Director:${movie.director.name}`;//1

export const getShortMovies = movies =>
  movies.filter(movie => movie.duration < 100);//2

export const findByTitle = (movies, title) =>
  movies.find(movie => movie.title === title);//3

export const getOscarsLine = movie => `Oscars:${movie?.awards?.oscars?? 0}`;//4

export const sortByYear = movies => movies.sort((a, b) => a.year - b.year);

export const markAsWatched = (movies, id) => {
  const movie = movies.find(movie => movie.id === id);
  movie.watched = true;
  return movies;
};

export const renameActor = (movie, index, newName) => {
  const copy = { ...movie };
  copy.cast[index].name = newName;
  return copy;
};