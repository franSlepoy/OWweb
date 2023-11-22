import AddGalleryEdit from "./addGalleryEdit/AddGalleryEdit";
import AddSlidesEdit from "./addSlidesEdit/AddSlidesEdit";
import ImagePpalEdit from "./imagePpalEdit/ImagePpalEdit";

const EditProject = ({ project, setProject }) => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("valores ", project);
	};

	return (
		<div>
			<h2>PROYECTO A EDITAR - {project.name}</h2>
			<p>Listado - Agregar proyectos </p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="">Proyecto</label>
					<input
						type="text"
						placeholder="Nombre del proyecto"
						name="name"
						value={project.name}
						onChange={(e) => setProject({ ...project, name: e.target.value })}
					/>
				</div>

				<ImagePpalEdit project={project} setProject={setProject} />

				<AddSlidesEdit project={project} setProject={setProject} />

				<AddGalleryEdit project={project} setProject={setProject} />

				<button type="submit">Crear Producto</button>
			</form>
		</div>
	);
};

export default EditProject;
