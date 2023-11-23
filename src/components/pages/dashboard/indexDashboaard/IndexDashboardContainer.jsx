import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import {
  AppBar,
  Box,
  Button,
  Hidden,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const IndexDashboardContainer = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  return (
    <>
      <AppBar sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Box display={"flex"} width={"100%"}>
            <Box width={"90%"}>
              <Typography variant="h1" sx={{ fontSize: "29px" }}>
                Ordoñez Wenzke
              </Typography>
            </Box>

            <Hidden smDown>
              {user && user.rol === "admin" && (
                <Box display={"flex"}>
                  <Link to="/dashboard-settings">
                    <Button sx={{ p: 1, cursor: "pointer" }} variant="text">
                      <Typography
                        sx={{ color: "white", textTransform: "none" }}
                      >
                        Admin
                      </Typography>
                    </Button>
                  </Link>
                  <Button
                    sx={{ p: 0, cursor: "pointer" }}
                    variant="text"
                    onClick={handleLogOut}
                  >
                    <Typography sx={{ textTransform: "none", color: "white" }}>
                      Login
                    </Typography>
                  </Button>
                </Box>
              )}
            </Hidden>
            
            <Hidden smUp>
              <Button sx={{color:"white", padding:0}}> <MenuIcon fontSize="large" /> </Button>
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default IndexDashboardContainer;
