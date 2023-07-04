function gustosSeries() {
    const generosFavoritos = ["Accion", "Drama", "Anime"];
  
    const series = {
      breakingBad: {
        titulo: "Breaking Bad",
        genero: "Drama"
      },
      walkingDead: {
        titulo: "The Walking Dead",
        genero: "Drama"
      },
      dragonBall: {
        titulo: "Dragon Ball",
        genero: "Anime"
      }
    };
  
    console.log("Géneros favoritos:");
    for (const genero of generosFavoritos) {
      console.log(`- ${genero}`);
    }
  
    console.log("");
  
    console.log("Series favoritas:");
    for (const serie in series) {
      console.log(`Título: ${series[serie].titulo}`);
      console.log(`Género: ${series[serie].genero}`);
      console.log("");
    }
  }
  
  gustosSeries();