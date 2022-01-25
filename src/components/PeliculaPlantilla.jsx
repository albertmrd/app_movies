import React, { useEffect, useState } from "react";
import getPeliculas from "../helpers/getPeliculas";
import Pelicula from "./Pelicula";
import estilos from "./css/peliculaPlantilla.module.css";

const PeliculaPlantilla = () => {
  //estados
  const [peliculas, setPeliculas] = useState([]);
  const consultarApi = () => {
    getPeliculas()
      .then((data) => {
        setPeliculas(data?.results)
        //console.log(data.results);

      })
      .catch((err) => console.log(err));
  };
  //efectos
    useEffect(() =>{
        consultarApi();
    },[]);
  //pintado de componente
  return (
      <ul className={estilos.moviesGrid}>
          {peliculas.map((peli,index) => (
              <Pelicula
                  key={peli.id}
                  title={peli.title}
                  poster_path={peli.poster_path}
                  id={peli.id}
              />
          ))}
      </ul>
  );
};

export default PeliculaPlantilla;
