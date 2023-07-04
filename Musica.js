function gustosMusicales() {
    const genero = "Rock";
    
    const bandas = {
      nirvana: {
        nombre: "Nirvana",
        cancionesFavoritas: ["In bloom", "Serve the servants", "You know you`re right"]
      },
      marilynManson: {
        nombre: "Marilyn Manson",
        cancionesFavoritas: ["Coma white", "Say 10", "Tainted Love"]
      },
      ghostBC: {
        nombre: "Ghost B.C.",
        cancionesFavoritas: ["Cirice", "Call me little sunshine", "Year zero"]
      }
    };
  
    console.log(`Género musical: ${genero}`);
  
    for (const banda in bandas) {
      console.log(`Banda: ${bandas[banda].nombre}`);
      console.log("Canciones favoritas:");
      
      for (const cancion of bandas[banda].cancionesFavoritas) {
        console.log(`- ${cancion}`);
      }
      
      console.log(""); // Agrega una línea en blanco entre cada banda
    }
  }
  
  gustosMusicales();
  