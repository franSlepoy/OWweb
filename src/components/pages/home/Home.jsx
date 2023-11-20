import { Box } from "@mui/material";
import Proyectos from "../proyectos/Proyectos";
import { useEffect, useState } from "react";
import NavBar from "../../commond/navBar/NavBar";
import StudioContainer from "../studio/StudioContainer";

const Home = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
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
	}, [scrollPosition]);

	return (
		<>
			{/* IMAGEN DE ARRIBA CON EL LOGO */}
			<Box sx={{ zIndex: 333 }}>
				<img
					/* height="766px" */
					width="100%"
					src="public/imagenes/1673364522_1.jpg"
					alt="una casa en la playa"
					style={{ height: "100vh" }}
				/>
			</Box>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: 4,
					opacity: isTitleVisible ? 1 : 0,
					transition: "opacity 0.3s",
				}}
			>
				<img width={"100%"} src="public/imagenes/owblanco.png" alt="" />
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
