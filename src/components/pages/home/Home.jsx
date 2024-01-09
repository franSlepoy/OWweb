import  { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Proyectos from "../proyectos/Proyectos";
import NavBar from "../../commond/navBar/NavBar";
import StudioContainer from "../studio/StudioContainer";
import Image_init from "./imagen_init/Image_init";

const Home = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const halfWindowHeight = windowHeight / 2;

      if (scrollPosition > halfWindowHeight) {
        setIsTitleVisible(false);
      } else {
        setIsTitleVisible(true);
      }
    };

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
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1300,
          opacity: isTitleVisible ? 1 : 0,
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
