import { useState } from "react";
import { db, onSignIn } from "../../../../firebaseConfig/FirebaseConfig";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const FormAdmin = () => {
  const navigate = useNavigate();

  const { handleLogin, user } = useContext(AuthContext);

  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const res = await onSignIn(userCredentials);
      let user = res.user;
      let refCollection = collection(db, "users");
      let refDoc = doc(refCollection, user.uid);
      let userDoc = await getDoc(refDoc);
      let finalyUser = {
        email: user.email,
        accessToken: user.accessToken,
        rol: userDoc.data().rol,
        name: userDoc.data().name,
      };
      handleLogin(finalyUser);
      navigate("/dashboard-projects");

      console.log("finalyUser : ", finalyUser);
    } catch (error) {
      console.log(error);
      console.log("Datos incorrecto o usuario sin permiso");
      setError(true);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  console.log("user del context es: ", user);

  return (
    <Box sx={{ width: "50%", margin: "auto" }}>
      {!user.accessToken && (
        <form onSubmit={handleSubmit}>
          <Grid
            mt={15}
            container
            rowSpacing={2}
            // alignItems="center"
            justifyContent={"center"}
          >
            <Grid item xs={10} md={12}>
              <TextField
                name="email"
                label="Email"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={10} md={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Contraseña
                </InputLabel>
                <OutlinedInput
                  name="password"
                  onChange={handleChange}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff color="primary" />
                        ) : (
                          <Visibility color="primary" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Contraseña"
                />
              </FormControl>
              {error && (
                <small style={{ color: "red" }}>Datos incorrectos</small>
              )}
            </Grid>
            <Link
              to="/forgot-password"
              style={{ color: "steelblue", marginTop: "10px" }}
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <Grid container justifyContent="center" spacing={3} mt={2}>
              <Grid item xs={10} md={5}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    textShadow: "2px 2px 2px grey",
                  }}
                >
                  Ingresar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}

      {user.accessToken && (
        <h2>
          Ya te encuentras loggeado con la cuenta de :{" "}
          <span> {user.name} </span>{" "}
          <Link to="/dashboard2">Volver al dashboard</Link>
        </h2>
      )}
    </Box>
  );
};

export default FormAdmin;
