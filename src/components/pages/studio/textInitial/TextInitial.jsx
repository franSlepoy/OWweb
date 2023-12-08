import stylesTextInitial from "./TextInitial.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const TextInitial = ({ modulosStudio }) => {
  const { lenguage } = useContext(AuthContext);

  return (
    <p className={stylesTextInitial.parraf}>
      {lenguage === "es"
        ? modulosStudio?.modulo1?.textInitial_es
        : modulosStudio?.modulo1?.textInitial_en}
    </p>
  );
};

export default TextInitial;
