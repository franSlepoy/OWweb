import { Link, Outlet } from "react-router-dom";
import stylesToolbar from "./ToolBarDas.module.css";
const ToolbarDash = () => {
	return (
		<div style={{ display: "flex" }}>
			<div className={stylesToolbar.toolbar}>
				<ul>
					<li>
						<Link to="dashboard-editInicio">Inicio</Link>
					</li>
					<li>
						<Link to="dashboard-editStudio">Estudio</Link>
					</li>
					<li>
						<Link to="dashboard-addProjects">Agregar</Link>
					</li>
					<li>
						<Link to="dashboard-projects">Listado</Link>
					</li>
				</ul>
			</div>
			<Outlet />
		</div>
	);
};

export default ToolbarDash;
