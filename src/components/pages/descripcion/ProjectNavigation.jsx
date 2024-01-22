import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig/FirebaseConfig";
import "./descripcion_styles.css";


const ProjectNavigation = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects_test"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsList);

      // Encuentra el índice del proyecto actual
      const currentIdx = projectsList.findIndex((project) => project.id === id);
      setCurrentIndex(currentIdx);
    };

    fetchProjects();
  }, [id]);

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];
  const currentProject = projects[currentIndex];


  return (
    <div className="project-navigation-footer">
      <Link to={`/project2/${prevProject?.id}`}>{prevProject?.name}</Link>
      <p>{currentProject?.name}</p>
      <Link to={`/project2/${nextProject?.id}`}>{nextProject?.name}</Link>
    </div>
  );
};

export default ProjectNavigation;
