import  { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ProjectsList from "./ProjectsList"; // Ajusta la ruta según tu estructura de archivos

const ProjectsWithSearch = ({ projects, setChangesProjects }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects ? projects.filter((project) =>
  project.name.toLowerCase().includes(searchTerm.toLowerCase())
) : [];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <TextField
        label="Buscar proyectos"
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleSearch}
      />
      <ProjectsList projects={filteredProjects} setChangesProjects={setChangesProjects} />
    </div>
  );
};

export default ProjectsWithSearch;