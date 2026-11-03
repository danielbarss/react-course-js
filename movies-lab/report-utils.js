export const getDirectorLine = movie => `Director:${movie.director.name}`;//1

export const getShortMovies = movies =>
  movies.filter(movie => movie.duration < 100);//2

export const findByTitle = (movies, title) =>
  movies.find(movie => movie.title === title);//3

export const getOscarsLine = movie => `Oscars:${movie?.awards?.oscars?? 0}`;//4

export const sortByYear = movies => [...movies].sort((a, b) => a.year - b.year);//5

export const markAsWatched = (movies, id) => {
 movies.map(movie => movie.id === id ? { ...movie, watched: true } : movie);//6
};

export const renameActor = (movie, index, newName) => {
  const copy = {
    ...movie, cast: movie.cast.map((actor, i) => i === index ? {...actor, name: newName} : actor)
  }
  return copy;
};