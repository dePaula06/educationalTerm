import React from "react";
import { Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

// Importando o estilo
import "./score.css";

function ScorePage() {
  // Pegue a pontuação passada pela navegação
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  return (
    <div className="container">
      <div className="imageBackgroundScore" />
      <div className="blackOpacityScore" />
      <div className="contentScore">
        <Typography
          sx={{
            fontFamily: "MonumentExtend-UltraBold",
            fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
            marginTop: { xs: "-25px", sm: "-50px", md: "-100px" },
          }}
        >
          FIM DA JORNADA!
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins-Medium",
            fontSize:  { xs: "1rem", sm: "1.3rem", md: "1.5rem", lg: "1.5rem" },
            marginTop: "50px",
            width: "70%",
          }}
        >
          Assim como a protagonista desvendou as raízes de sua história, você
          decifrou cada palavra e chegou ao final da jornada! Parabéns por cada
          acerto conquistado!
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins-Medium",
            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem", lg: "1.5rem" },
            marginTop: "75px",
            width: "70%"
          }}
        >
          Sua pontuação final foi de{" "}
          <span
            style={{ fontWeight: "bold" }}
          >
            {score} pontos
          </span>
          . Obrigado por jogar e embarcar nesta viagem de descobertas. Que a
          sabedoria das palavras continue a te guiar!
        </Typography>
        <div className="buttonContainer">
          <Button
            onClick={() => window.location.href = '/'}
            sx={{
              fontSize: {lg: "1.2rem", md: "1.2rem", xs: "1rem"},
              width: "50%",
              fontFamily: 'Poppins-Bold',
              color: "#fff",
              textTransform: "capitalize",
              padding: '10px 20px',
              backgroundColor: '#83DF68', // Cor do botão
              "&:hover": {
                backgroundColor: '#6bba4a' // Efeito de hover
              }
            }}
          >
            Voltar para o Jogo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ScorePage;
