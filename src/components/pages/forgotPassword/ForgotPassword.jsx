import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { resetPassword } from "../../../firebaseConfig/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [msjEnviado, setMsjEnviado] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await resetPassword(email);
			console.log("Correo electronico enviado, revisa tu casilla");
			setMsjEnviado(true);
			setTimeout(() => {
				setMsjEnviado(false);
				navigate("/form-admin");
			}, 2000);
		} catch (error) {
			console.log({ error });
		}
	};

	console.log(email);
	return (
		<div>
			<Box
				sx={{
					width: "100%",
					minHeight: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					gap: "40px",
					// backgroundColor: theme.palette.secondary.main,
				}}
			>
				<Typography variant="h5" color={"primary"}>
					¿Olvidaste tu contraseña?
				</Typography>
				<form onSubmit={handleSubmit}>
					<Grid
						container
						rowSpacing={2}
						// alignItems="center"
						justifyContent={"center"}
					>
						<Grid item xs={10} md={12}>
							<TextField
								type="text"
								variant="outlined"
								label="Email"
								fullWidth
								name="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Grid>
						{msjEnviado && (
							<Grid item xs={10} md={12}>
								<Typography type="submit" variant="contained" color={"orange"}>
									Email enviado! revisa tu correo
								</Typography>
							</Grid>
						)}
						<Grid item xs={10} md={12}>
							<Button type="submit" variant="contained" fullWidth>
								Recuperar
							</Button>
						</Grid>
						<Grid item xs={10} md={12}>
							<Button
								type="submit"
								variant="contained"
								fullWidth
								onClick={() => navigate("/form-admin")}
							>
								Regresar
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</div>
	);
};

export default ForgotPassword;
