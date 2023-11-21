import ProjectsList from "./ProjectsList";
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../../../firebaseConfig/FirebaseConfig";

const ProjectsListContainer = () => {
	const [projects, setProjects] = useState([]);
	const [changesProjects, setChangesProjects] = useState(false);
	console.log(changesProjects);

	useEffect(() => {
		setChangesProjects(false);
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
	}, [changesProjects]);

	console.log(projects);
	return (
		<ProjectsList projects={projects} setChangesProjects={setChangesProjects} />
	);
};

export default ProjectsListContainer;
