import { Link, Outlet } from "react-router-dom";
import stylesToolbar from "./ToolBarDas.module.css";
import { Box, Typography } from "@mui/material";
const ToolbarDash = () => {
  return (
    <Box sx={{ display: "flex", mt: 8 }}>
      <div className={stylesToolbar.toolbar}>
        <ul>
          <li>
            <Link to="dashboard-editInicio">
              <Typography
                sx={{ cursor: "pointer", fontSize: "20px", m: 1 }}
                color={"black"}
              >
                Inicio
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="dashboard-editStudio">
              <Typography
                sx={{ cursor: "pointer", fontSize: "20px", m: 1 }}
                color={"black"}
              >
                Estudio
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="dashboard-addProjects">
              <Typography
                sx={{ cursor: "pointer", fontSize: "20px", m: 1 }}
                color={"black"}
              >
                Agregar
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="dashboard-projects">
              <Typography
                sx={{ cursor: "pointer", fontSize: "20px", m: 1 }}
                color={"black"}
              >
                {" "}
                Listado
              </Typography>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </Box>
  );
};

export default ToolbarDash;
