import Box from "@mui/material/Box";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

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
    <Box m={5}>
      <Typography variant="h2" sx={{ fontSize: "22px" }}>
        Admin Configuration
      </Typography>
      <Typography mt={2}>
        Name: <span>{user.name}</span>
      </Typography>
      <Typography>
        Email: <span>{user.email}</span>
      </Typography>
      <Typography>
        Rol: <span>{user.rol}</span>
      </Typography>

      <Link to="/forgot-password">
        <Typography sx={{color:"darkgrey", cursor:"pointer", mt:2}}> Cambiar contraseña </Typography>
      </Link>
    </Box>
  );
}
