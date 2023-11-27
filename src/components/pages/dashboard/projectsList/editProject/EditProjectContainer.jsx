import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../../firebaseConfig/FirebaseConfig";
import EditProject from "./EditProject";

const EditProjectContainer = () => {
  const { id } = useParams();

  const [project, setProject] = useState({});

  useEffect(() => {
    (async () => {
      let refCollection = collection(db, "projects_test");
      let refDoc = doc(refCollection, id);
      let res = await getDoc(refDoc);
      setProject({
        ...res.data(),
        id: res.id,
      });
    })();
  }, [id]);

  console.log("el projecto es: ", project);

  return <EditProject project={project} setProject={setProject} id={id} />;
};

export default EditProjectContainer;
