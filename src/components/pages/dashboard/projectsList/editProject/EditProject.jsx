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

				{/* 	<ImagePpal
					formData={formData}
					setFile={setFile}
					file={file}
					handleImageUpload={handleImageUpload}
					loadingImage={loadingImage}
					isImageUpload={isImageUpload}
				/>

				<AddSlides setFormData={setFormData} formData={formData} />

				<AddGallery3 setFormData={setFormData} formData={formData} /> */}

				<button type="submit">Crear Producto</button>
			</form>
		</div>
	);
};

export default EditProject;
