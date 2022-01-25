import estilos from "./css/pelicula.module.css";

const Pelicula = ({ key, id, title, poster_path }) => {
  const urlImg = "https://image.tmdb.org/t/p/w500" + poster_path;

  //pintamos
  return (
    <li key = {key} className={estilos.movieCard}>
      <img
        className={estilos.movieImage}
        width={230}
        src={urlImg}
        alt={title}
      />
      <div>{title}</div>
    </li>
  );
};

export default Pelicula;
