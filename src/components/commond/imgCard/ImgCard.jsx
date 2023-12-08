import { Box } from "@mui/material";

const ImgCard = (props) => {
  return (
    <Box height={"580px"}>
      <img
        style={{ width: "100%", height: "580px" }}
        src={props.imagen}
        alt=""
      />
    </Box>
  );
};

export default ImgCard;
