function gustosCinematograficos() {
    const generosFavoritos = ["Thriller", "Acción"];
  
    const peliculas = {
      spiderman: {
        titulo: "Spider-Man (Sam Raimi)",
        genero: "Acción"
      },
      pesadillaEnLaCalleElm: {
        titulo: "Pesadilla en la Calle Elm",
        genero: "Thriller"
      },
      johnWick: {
        titulo: "John Wick",
        genero: "Acción"
      }
    };
  
    console.log("Géneros favoritos:");
    for (const genero of generosFavoritos) {
      console.log(`- ${genero}`);
    }
  
    console.log("");
  
    console.log("Películas favoritas:");
    for (const pelicula in peliculas) {
      console.log(`Título: ${peliculas[pelicula].titulo}`);
      console.log(`Género: ${peliculas[pelicula].genero}`);
      console.log("");
    }
  }
  
  gustosCinematograficos();