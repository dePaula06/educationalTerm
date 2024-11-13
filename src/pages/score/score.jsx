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
    <div className="containerScore">
      <div className="imageBackgroundScore" />
      <div className="blackOpacityScore" />
      <div className="contentScore">
        <Typography
          className="typographyTitle"
          sx={{
            fontFamily: "MonumentExtend-UltraBold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "4rem" },
          }}
        >
          FIM DA JORNADA!
        </Typography>
        <Typography
          className="typographyDescription"
          sx={{
            fontFamily: "Poppins-Medium",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
            marginTop: "50px",
            width: "70%",
          }}
        >
          Assim como a protagonista desvendou as raízes de sua história, você
          decifrou cada palavra e chegou ao final da jornada! Parabéns por cada
          acerto conquistado!
        </Typography>
        <Typography
          className="typographyScore"
          sx={{
            fontFamily: "Poppins-Medium",
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem", lg: "1.5rem" },
            marginTop: "75px",
            width: "70%",
            fontWeight: "bold",
          }}
        >
          Sua pontuação final foi de{" "}
          <span style={{ fontWeight: "bold" }}>
            {score} pontos
          </span>
          . Obrigado por jogar e embarcar nesta viagem de descobertas. Que a
          sabedoria das palavras continue a te guiar!
        </Typography>
        <div className="buttonContainer">
          <Button
            onClick={() => window.location.href = '/'}
            sx={{
              fontSize: { lg: "1.2rem", md: "1.2rem", xs: "1rem" },
              width: "70%",
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
