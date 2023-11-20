const AddSlides = ({ setFormData, formData }) => {
	return (
		<div>
			<p>Ficha Slide 1 - Es</p>
			<textarea
				id=""
				cols="30"
				rows="10"
				name={formData.slides.slides1_es}
				value={formData.slides.slides1_es}
				onChange={(e) =>
					setFormData({
						...formData,
						slides: {
							...formData.slides,
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
				name={formData.slides.slides1_en}
				value={formData.slides.slides1_en}
				onChange={(e) =>
					setFormData({
						...formData,
						slides: {
							...formData.slides,
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
				name={formData.slides.slides2_es}
				value={formData.slides.slides2_es}
				onChange={(e) =>
					setFormData({
						...formData,
						slides: {
							...formData.slides,
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
				name={formData.slides.slides2_en}
				value={formData.slides.slides2_en}
				onChange={(e) =>
					setFormData({
						...formData,
						slides: {
							...formData.slides,
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
				name={formData.memories.memorie_es}
				value={formData.memories.memorie_es}
				onChange={(e) =>
					setFormData({
						...formData,
						memories: {
							...formData.memories,
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
				name={formData.memories.memorie_en}
				value={formData.memories.memorie_en}
				onChange={(e) =>
					setFormData({
						...formData,
						memories: {
							...formData.memories,
							memorie_en: e.target.value,
						},
					})
				}
			></textarea>
		</div>
	);
};

export default AddSlides;
