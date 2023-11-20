import Box from "@mui/material/Box";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { Link } from "react-router-dom";

export default function SettingsAdmin() {
	const auth = getAuth();

	const { user } = useContext(AuthContext);
	//Me traigo el usuario loggeado
	onAuthStateChanged(auth, (user) => {
		if (user) {
			/* 	const uid = user.uid; */ // ya hice antes que coincida con la DB
			console.log("user es: ", user.email);
		} else {
			// User is signed out
			//navegar al login
		}
	});

	/* 	const user = auth.currentUser;
	console.log("user de auth.courrentUser: ", user); */
	console.log("el user del context es: ", user);

	return (
		<Box>
			<h2>Admin Configuration</h2>
			<h5>
				Name: <span>{user.name}</span>
			</h5>
			<h5>
				Email: <span>{user.email}</span>
			</h5>
			<h5>
				Rol: <span>{user.rol}</span>
			</h5>
			<Link to="/forgot-password"> Cambiar contraseña </Link>
		</Box>
	);
}
