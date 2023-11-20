import React from "react";
import Carousel from "react-material-ui-carousel";
import { ProyectosData } from "../../../DB/ProyectosData";
import { Box, Typography } from "@mui/material";
import ImgCard from "../../commond/imgCard/ImgCard";

const Descripcion = () => {
	return (
		<>
			<Box mt={6} ml={6} mb={6}>
				<a href="/">
					<Typography
						sx={{
							fontSize: "16px",
							color: "#000",
							underline: "none",
							fontFamily: "Pragmatica",
							textDecoration: "none",
						}}
					>
						VOLVER
					</Typography>
				</a>
			</Box>

			<Box
				sx={{
					width: "98%",
					m: "auto",
					mb: 3,
				}}
			>
				<Carousel
					indicators={false}
					navButtonsProps={{
						style: {
							display: "none",
						},
					}}
					animation="fade"
					timeout={1}
					sx={{ width: "95%", m: "auto" }}
				>
					{ProyectosData.map((proyecto) => (
						<Box key={proyecto.id}>
							<ImgCard imagen={proyecto.imagen} />
						</Box>
					))}
				</Carousel>
			</Box>
		</>
	);
};

export default Descripcion;
