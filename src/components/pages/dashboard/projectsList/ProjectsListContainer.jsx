import ProjectsList from "./ProjectsList";
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../../../firebaseConfig/FirebaseConfig";

const ProjectsListContainer = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		let refCollection = collection(db, "projects_test");
		getDocs(refCollection)
			.then((res) => {
				const projectsArr = res.docs.map((project) => {
					return {
						...project.data(),
						id: project.id,
					};
				});
				setProjects(projectsArr);
			})
			.catch((err) => console.log(err));
	}, []);

	console.log(projects);
	return <ProjectsList projects={projects} />;
};

export default ProjectsListContainer;
