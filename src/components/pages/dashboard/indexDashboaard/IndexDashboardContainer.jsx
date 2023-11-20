import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { Button } from "@mui/material";

const IndexDashboardContainer = () => {
	const { user, handleLogOut } = useContext(AuthContext);
	return (
		<>
			<div
				style={{
					border: "solid green",
					minHeight: "20vh",
					backgroundColor: "pink",
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<h2>Dashboard Container</h2>
				{user && user.rol === "admin" && (
					<div>
						<Link to="/dashboard-settings">ADMIN</Link>
						<Button onClick={handleLogOut}>Logout</Button>
					</div>
				)}
			</div>
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default IndexDashboardContainer;
