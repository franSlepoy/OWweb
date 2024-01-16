import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import InputSearch from "../../../commond/inputSearch/InputSearch";

export default function ProjectsList({
  setChangesProjects,
  filteredProjects,
  searchTerm,
  setSearchTerm,
}) {
  const updateVisibility = async (project) => {
    let obj = {
      ...project,
      visible: !project.visible,
    };

    let refDoc = doc(db, "projects_test", project.id);
    await updateDoc(refDoc, obj);
    setChangesProjects(true);
  };

  const cambiarOrden = async (project, value) => {
    let obj = {
      ...project,
      order: +value,
    };
    let refDoc = doc(db, "projects_test", project.id);
    await updateDoc(refDoc, obj);
    setChangesProjects(true);
  };

  const deleteProject = async (project) => {
    const rta = confirm("Deseas eliminar estre producto? : " + project.name);
    if (rta) {
      alert(project.name + " fue eliminado");
      let refDoc = doc(db, "projects_test", project.id);
      deleteDoc(refDoc);
      setChangesProjects(true);
    } else {
      alert("Sigue donde está");
    }
  };

  const navigate = useNavigate();

  const editProject = (project) => {
    navigate(`/edit-project/${project.id}`);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <InputSearch
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          text={"Productos"}
        />
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Orden</TableCell>
              <TableCell align="right">Proyecto</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell
                  component="th"
                  scope="row"
                >
                  <input
                    type="numer"
                    value={project.order}
                    onChange={(e) => cambiarOrden(project, e.target.value)}
                  />
                  {/* {project.order} */}
                </TableCell>
                <TableCell align="right">{project.name}</TableCell>
                <TableCell align="right">
                  <div>
                    <IconButton onClick={() => updateVisibility(project)}>
                      {project.visible ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>

                    <IconButton onClick={() => editProject(project)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteProject(project)}>
                      <DeleteForeverIcon />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
