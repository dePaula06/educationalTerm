// Import componentes MUI
import { Typography } from "@mui/material";
import { motion } from "framer-motion"; // Importar framer-motion

// Import estilo
import "./welcome.css";

function Welcome() {
  return (
    <div
      className="welcomeContainer"
    >
      {/* Animação de entrada para o título */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Inicialmente invisível e deslocado para cima
        animate={{ opacity: 1, y: 0 }} // Tornar visível e retornar à posição original
        transition={{ duration: 0.6 }} // Duração da animação
      >
        <Typography className="title">OLHOS D'ÁGUA</Typography>
      </motion.div>

      {/* Animação de entrada para o texto de boas-vindas */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Inicialmente invisível e deslocado para baixo
        animate={{ opacity: 1, y: 0 }} // Tornar visível e retornar à posição original
        transition={{ duration: 0.6, delay: 0.2 }} // Duração da animação com um pequeno atraso
      >
        <Typography className="textWelcome">
          Que tal testar sua percepção e mergulhar nas profundezas de um dos
          contos mais marcantes da literatura contemporânea? Em "Olhos D'água",
          Conceição Evaristo nos envolve com personagens intensos, emoções
          profundas e uma escrita carregada de significados.
        </Typography>
      </motion.div>
    </div>
  );
}

export default Welcome;