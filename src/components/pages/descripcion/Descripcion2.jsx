import { collection, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig/FirebaseConfig";
import { useTheme } from "@mui/material/styles";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Descripcion2 = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    let refCollection = collection(db, "projects_test");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => {
      setProject(res.data());
    });
  }, [id]);

  const images = [
    ...project.gallery.map((item) => ({
      label: `Imagen ${item.order}`, // Puedes cambiar esto por el texto que prefieras
      imgPath: item.url,
      isImage: true,
    })),
    {
      label: `Slide EN`,
      text: project?.slides?.slides1_en, // Asegúrate de que tus slides tienen un campo de texto
      isImage: false,
    },
    {
      label: `Slide ES`,
      text: project?.slides?.slides2_es, // Asegúrate de que tus slides tienen un campo de texto
      isImage: false,
    },
    {
      label: `Memoria EN`,
      text: project?.memories?.memorie_en, // Asegúrate de que tus memories tienen un campo de texto
      isImage: false,
    },
    {
      label: `Memoria ES`,
      text: project?.memories?.memorie_es, // Asegúrate de que tus memories tienen un campo de texto
      isImage: false,
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  console.log(images);
  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>

      {images.map((step, index) => (
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Box
              component="img"
              sx={{
                height: 255,
                display: "block",
                maxWidth: 400,
                overflow: "hidden",
                width: "100%",
              }}
              src={step.imgPath}
              alt={step.label}
            />
          ) : null}
        </div>
      ))}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Descripcion2;
