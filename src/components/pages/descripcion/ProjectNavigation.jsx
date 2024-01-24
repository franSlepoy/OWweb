import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig/FirebaseConfig";
import "./descripcion_styles.css";
import botonSiguiente from "../../../../public/imagenes/boton_siguiente.svg";
import botonAnterior from "../../../../public/imagenes/boton_anterior.svg";

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
      <div className="project-footer-left">
        {" "}
        <Link
          to={`/project2/${prevProject?.id}`}
          style={{ fontSize: "16px", color: "#1d1d1d" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              gap: 8,
             
            }}
          >
            <img src={botonAnterior} /> {prevProject?.name}
          </div>
        </Link>
      </div>
      <div className="project-footer-center">
        {" "}
        <p>{currentProject?.name}</p>
      </div>
      <div className="project-footer-right">
        {" "}
        <Link
          to={`/project2/${nextProject?.id}`}
          style={{ fontSize: "16px", color: "#1d1d1d" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 8,
            }}
          >
            {nextProject?.name} <img src={botonSiguiente} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectNavigation;
