//Import componentes MUI
import { Button, Typography } from "@mui/material";

//Import ícones FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDress, faBookOpen } from "@fortawesome/free-solid-svg-icons";

//import style
import "./init.css";

//Import components
import Header from "../../components/header/header";
import Welcome from "../../components/welcome/welcome";
import ButtonInit from "../../components/buttonInit/buttonInit";

function Init() {
  return (
    <div className="container">
      <div className="imageBackground" />
      <div className="blackOpacity" />
      <div className="content">
        <Header />
        <Welcome />
        <ButtonInit />
      </div>
    </div>
  );
}


export default Init;
