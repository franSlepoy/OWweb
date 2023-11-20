import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RoutesManageAdmin = () => {
	const { user } = useContext(AuthContext);
	const userRol = user?.rol;
	return (
		<>{userRol === "admin" ? <Outlet /> : <Navigate to="/form-admin" />}</>
	);
};

export default RoutesManageAdmin;
