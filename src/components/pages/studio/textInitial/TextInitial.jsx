import { useTranslation } from "react-i18next";

import stylesTextInitial from "./TextInitial.module.css";

const TextInitial = () => {
  const { t } = useTranslation();

  return <p className={stylesTextInitial.parraf}>{t("textInitial")}</p>;
};

export default TextInitial;
