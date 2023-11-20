import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Descripcion from "./components/pages/descripcion/Descripcion";
import IndexDashboardContainer from "./components/pages/dashboard/indexDashboaard/IndexDashboardContainer";
import IndexDash2 from "./components/pages/dashboard/indexDashboaard/IndexDash2";
import ProjectsListContainer from "./components/pages/dashboard/projectsList/ProjectsListContainer";
import SettingsAdmin from "./components/pages/dashboard/settingsAdmin/SettingsAdmin";
import EditInicio from "./components/pages/dashboard/editInicio/EditInicio";
import FormAdmin from "./components/pages/dashboard/formAdmin/FormAdmin";
import AuthContextComponent from "./context/AuthContext";
import RoutesManageAdmin from "./routes/RoutesManageAdmin";
import ToolbarDash from "./components/pages/dashboard/toolBar/ToolBarDash";
import ForgotPassword from "./components/pages/forgotPassword/ForgotPassword";
import EditStudio3 from "./components/pages/dashboard/editStudio/ediStudio3";
import AddProjectsContainer from "./components/pages/dashboard/agregarProjects/AddProjects";

function App() {
	return (
		<BrowserRouter>
			<AuthContextComponent>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/description" element={<Descripcion />} />
					<Route element={<IndexDashboardContainer />}>
						<Route path="/form-admin" element={<FormAdmin />} />
						<Route path="/forgot-password" element={<ForgotPassword />} />
						<Route element={<RoutesManageAdmin />}>
							<Route element={<ToolbarDash />}>
								<Route path="/dashboard-editInicio" element={<EditInicio />} />
								<Route path="/dashboard2" element={<IndexDash2 />} />
								<Route
									path="/dashboard-projects"
									element={<ProjectsListContainer />}
								/>
								<Route path="/dashboard-settings" element={<SettingsAdmin />} />
								<Route
									path="/dashboard-addProjects"
									element={<AddProjectsContainer />}
								/>
								<Route path="/dashboard-editStudio" element={<EditStudio3 />} />
							</Route>
						</Route>
					</Route>
				</Routes>
			</AuthContextComponent>
		</BrowserRouter>
	);
}

export default App;
