import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextComponent = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("userInfo")) || {}
	);
	const [lenguage , setLenguage] = useState("es")
	const [isLogged, setIsLogged] = useState(
		JSON.parse(localStorage.getItem("isLogged")) || false
	);

	const handleLogin = (userLogged) => {
		setUser(userLogged);
		setIsLogged(true);
		localStorage.setItem("userInfo", JSON.stringify(userLogged));
		localStorage.setItem("isLogged", JSON.stringify(true));
	};

	const handleLogOut = () => {
		setUser({});
		setIsLogged(false);
		localStorage.removeItem("userInfo");
		localStorage.removeItem("isLogged");
		navigate("/form-admin");
	};

	const handleLenguage = (idioma)=> { 
		setLenguage(idioma)
	}

	let data = {
		handleLogin,
		user,
		isLogged,
		handleLogOut,
		handleLenguage,
		lenguage
		
	};
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextComponent;
