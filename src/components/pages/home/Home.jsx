import  { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Proyectos from "../proyectos/Proyectos";
import NavBar from "../../commond/navBar/NavBar";
import StudioContainer from "../studio/StudioContainer";
import Image_init from "./imagen_init/Image_init";
import styles from "./Home.module.css"; // Importa el archivo de estilos CSS Module

const Home = () => {
  const [isLogoHidden, setIsLogoHidden] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down"); // 'down' o 'up'

  // Función para manejar el evento de scroll
  let lastScrollTop = 0; // Fuera de tu componente, para rastrear la última posición de scroll

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    // Ocultar o mostrar el logo basado en la posición de scroll
    if (currentScrollTop > 100) {
      // Supongamos que 100 es el umbral
      setIsLogoHidden(true);
    } else {
      setIsLogoHidden(false);
    }

    // Determinar la dirección del scroll
    if (currentScrollTop > lastScrollTop) {
      // Scroll hacia abajo
      setScrollDirection("down");
    } else {
      // Scroll hacia arriba
      setScrollDirection("up");
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para evitar valores negativos
  };

  // Usar useEffect para suscribirse y desuscribirse del evento de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* IMAGEN DE ARRIBA CON EL LOGO */}
      <Image_init />
      {/* logo */}
      <Box
        /* className={`${styles.stickyLogo} ${
          isLogoHidden ? styles.hideLogo : ""
        }`} */
        className={`${styles.stickyLogo} ${
          isLogoHidden
            ? scrollDirection === "down"
              ? styles.fadeAndDrop
              : styles.fadeAndRise
            : ""
        }`}
        sx={{
          zIndex: 1300,
          transition: "opacity 0.3s",
        }}
      >
        <img
          width={"100%"}
          src="https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/logo%2FOWblanco.png?alt=media&token=d88e194d-01ad-44fe-9b47-e5340a313a82"
          alt=""
        />
      </Box>

      {/*       empieza el navbar y el resto
       */}
      <NavBar />
      <Proyectos />
      <StudioContainer />
    </>
  );
};

export default Home;
