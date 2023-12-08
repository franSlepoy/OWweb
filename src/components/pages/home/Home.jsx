import { Box } from "@mui/material";
import Proyectos from "../proyectos/Proyectos";
import NavBar from "../../commond/navBar/NavBar";
import StudioContainer from "../studio/StudioContainer";
import Image_init from "./imagen_init/Image_init";

const Home = () => {
  /* 	const [scrollPosition, setScrollPosition] = useState(0);
	const [isTitleVisible, setIsTitleVisible] = useState(true);
	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setIsTitleVisible(currentPosition <= scrollPosition); // Desplazándose hacia arriba
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPosition]); */

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
          zIndex: 4,
          /* opacity: isTitleVisible ? 1 : 0, */
          transition: "opacity 0.3s",
        }}
      >
        <img
          width={"100%"}
          src="public/imagenes/owblanco.png"
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
