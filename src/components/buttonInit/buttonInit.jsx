// Importar componentes MUI e framer-motion
import { Button } from "@mui/material";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

// Importar estilo
import "./buttonInit.css";

function ButtonInit() {
  const navigation = useNavigate();
  function handleGame() {
    navigation("/game");
  }
  return (
    <div className="containerButton">
      {/* Animação de entrada para o botão */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Inicialmente invisível e deslocado para baixo
        animate={{ opacity: 1, y: 0 }} // Tornar visível e retornar à posição original
        transition={{ duration: 0.6 }} // Duração da animação
      >
        <Button className="buttonInit" onClick={handleGame}>Começar</Button>
      </motion.div>
    </div>
  );
}

export default ButtonInit;
