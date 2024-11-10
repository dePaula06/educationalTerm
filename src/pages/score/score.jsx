import React from 'react';
import { Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

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
        <Typography align="center" sx={{color: "#fff", fontFamily: "Poppins-Medium", fontSize: "2rem", marginBottom: '20px'}}>
          Parabéns pelo desempenho no jogo "Termo"! <br />
          Sua pontuação final foi: {score}
        </Typography>
        <Typography align="center" sx={{color: "#fff", fontFamily: "Poppins-Regular", fontSize: "1.2rem", marginBottom: '40px'}}>
          Inspirado no conto "Olhos D'Água", onde a reflexão e a percepção se entrelaçam. Você demonstrou grande habilidade ao conectar as palavras e completar o desafio!
        </Typography>
      </div>
      
      {/* Botão posicionado no canto superior direito */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.href = '/'}
        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '1rem',
          fontFamily: 'Poppins-Bold',
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
  );
}

export default ScorePage;
