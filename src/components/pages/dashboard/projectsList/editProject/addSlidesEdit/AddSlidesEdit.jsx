const AddSlidesEdit = ({ project, setProject }) => {
	return (
		<div>
			<p>Ficha Slide 1 - Es</p>
			<textarea
				id=""
				cols="30"
				rows="10"
				name={project?.slides?.slides1_es}
				value={project?.slides?.slides1_es}
				onChange={(e) =>
					setProject({
						...project,
						slides: {
							...project.slides,
							slides1_es: e.target.value,
						},
					})
				}
			></textarea>
			<p>Ficha Slide 1 - En</p>
			<textarea
				id=""
				cols="30"
				rows="10"
				name={project?.slides?.slides1_en}
				value={project?.slides?.slides1_en}
				onChange={(e) =>
					setProject({
						...project,
						slides: {
							...project.slides,
							slides1_en: e.target.value,
						},
					})
				}
			></textarea>
			<p>Ficha Slide 2 - Es</p>
			<textarea
				id=""
				cols="30"
				rows="10"
				name={project?.slides?.slides2_es}
				value={project?.slides?.slides2_es}
				onChange={(e) =>
					setProject({
						...project,
						slides: {
							...project.slides,
							slides2_es: e.target.value,
						},
					})
				}
			></textarea>
			<p>Ficha Slide 2 - En</p>
			<textarea
				id=""
				cols="30"
				rows="10"
				name={project?.slides?.slides2_en}
				value={project?.slides?.slides2_en}
				onChange={(e) =>
					setProject({
						...project,
						slides: {
							...project.slides,
							slides2_en: e.target.value,
						},
					})
				}
			></textarea>
			<p>Memorias - Es</p>
			<textarea
				id=""
				cols="30"
				rows="10"
				name={project?.memories?.memorie_es}
				value={project?.memories?.memorie_es}
				onChange={(e) =>
					setProject({
						...project,
						memories: {
							...project.memories,
							memorie_es: e.target.value,
						},
					})
				}
			></textarea>
			<p>Memorias - En</p>
			<textarea
				id=""
				cols="30"
				rows="10"
				name={project?.memories?.memorie_en}
				value={project?.memories?.memorie_en}
				onChange={(e) =>
					setProject({
						...project,
						memories: {
							...project.memories,
							memorie_en: e.target.value,
						},
					})
				}
			></textarea>
		</div>
	);
};

export default AddSlidesEdit;
