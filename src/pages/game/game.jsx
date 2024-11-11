import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import { Button, Typography, TextField } from "@mui/material";
import "./game.css";

// Import ícones FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

const words = ["OXUM", "ORIXAS", "YABAS", "RAINHA", "VERRUGA", "SEIS"];
const hints = [
  "Os olhos da mãe da protagonista eram 'cor de olhos d’água'. Águas de Mamãe...",
  "Ao voltar para casa, a protagonista sentiu-se cumprindo um ritual. Descobrir a cor dos olhos de sua mãe era como uma oferenda aos...",
  "Como eram chamadas as ancestrais da protagonista, que entoavam louvores e aravam a terra desde a África?",
  "Qual era a brincadeira favorita da mãe com suas filhas?",
  "Ao brincar de pentear a boneca-mãe, as filhas confundiram uma ___ com um piolho.",
  "Quantas irmãs a protagonista tem?",
];

function Game() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [attempts, setAttempts] = useState(["", "", "", "", ""]);
  const [currentAttempt, setCurrentAttempt] = useState("");
  const [feedback, setFeedback] = useState([[], [], [], [], []]);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [message, setMessage] = useState(""); // Mensagem de acerto ou erro
  const maxAttempts = 5;

  const currentWord = words[currentWordIndex];
  const currentHint = hints[currentWordIndex];
  const navigate = useNavigate(); // Hook para navegação

  const checkAttempt = () => {
    if (currentAttempt.length !== currentWord.length) return;

    const newFeedback = currentAttempt.split("").map((char, idx) => {
      if (char === currentWord[idx]) return "correct"; // Letra e posição corretas
      if (currentWord.includes(char)) return "present"; // Letra na palavra, posição incorreta
      return "absent"; // Letra não está na palavra
    });

    const newAttempts = [...attempts];
    const attemptIndex = attempts.findIndex((attempt) => attempt === "");
    newAttempts[attemptIndex] = currentAttempt;

    setFeedback((prevFeedback) => {
      const newFb = [...prevFeedback];
      newFb[attemptIndex] = newFeedback;
      return newFb;
    });
    setAttempts(newAttempts);

    // Calcula a pontuação com base no número de tentativas
    if (newFeedback.every((status) => status === "correct")) {
      setScore(score + (maxAttempts - attemptIndex) * 10); // Mais pontos com menos tentativas
      setMessage("Parabéns! Você acertou!"); // Mensagem de acerto
      setGameEnded(true); // Finaliza a palavra atual em caso de acerto
    } else if (attemptIndex + 1 === maxAttempts) {
      const revealFeedback = Array(currentWord.length).fill("reveal");
      const newFb = [...feedback];
      newFb[attemptIndex] = revealFeedback;
      setFeedback(newFb);
      newAttempts[attemptIndex] = currentWord; // Exibe a palavra correta
      setAttempts(newAttempts);
      setMessage(`Que pena! A palavra correta era "${currentWord}".`); // Mensagem de erro
      setGameEnded(true);
    } else {
      setCurrentAttempt("");
    }
  };

  const handleNext = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setAttempts(["", "", "", "", ""]);
      setFeedback([[], [], [], [], []]);
      setCurrentAttempt("");
      setGameEnded(false);
      setMessage(""); // Limpa a mensagem para a próxima rodada
    } else {
      // Redireciona para a página de pontuação final
      navigate("/score", { state: { score } });
    }
  };

  return (
    <div className="container">
      <div className="imageBackgroundGame" />
      <div className="blackOpacityGame" />
      <div className="contentGame">
        <div className="header">
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "MonumentExtend-UltraBold",
              fontSize: "3rem",
            }}
          >
            TERMO
          </Typography>
          <Typography
            align="center"
            sx={{ fontFamily: "Poppins-Medium", marginTop: "10px" }}
          >
            Dica: {currentHint}
          </Typography>
        </div>
        <div className="attemptsGrid">
          {attempts.map((attempt, attemptIndex) => (
            <div key={attemptIndex} className="attemptRow">
              {Array.from({ length: currentWord.length }).map(
                (_, charIndex) => (
                  <div
                    key={charIndex}
                    className={`attemptCell ${
                      feedback[attemptIndex][charIndex] || ""
                    }`}
                  >
                    {attempt[charIndex] || ""}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
        {!gameEnded && (
          <>
            <TextField
              sx={{
                marginTop: "5px",
                border: "2px solid #fff",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  color: "#fff", // Cor do texto do input
                  fontFamily: "Poppins-Medium", // Fonte personalizada
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "15px", // Ajuste do padding interno
                },
              }}
              InputProps={{
                style: { fontFamily: "Poppins-Medium", color: "#fff" },
              }}
              InputLabelProps={{
                style: { color: "#fff" }, // Cor do placeholder
              }}
              inputProps={{
                style: { color: "#fff", fontFamily: "Poppins-Medium" }, // Cor do texto e fonte
              }}
              placeholder="Digite sua tentativa"
              variant="outlined"
              value={currentAttempt}
              onChange={(e) => {
                const regex = /^[A-Z]*$/; // Somente letras maiúsculas sem acentuação
                const input = e.target.value.toUpperCase().replace(/[^A-Z]/g, ""); // Remove acentos e caracteres inválidos
                if (input.length <= currentWord.length && regex.test(input)) {
                  setCurrentAttempt(input);
                }
              }}
              onKeyPress={(e) => e.key === "Enter" && checkAttempt()}
              fullWidth
            />
            <Button
              variant="contained"
              onClick={checkAttempt}
              sx={{
                marginTop: "20px",
                width: "100%",
                backgroundColor: "#83DF68",
                color: "#FFF",
                fontFamily: "Poppins-Bold",
                fontSize: "1.2rem",
                textTransform: "capitalize"
              }}
            >
              Verificar
            </Button>
          </>
        )}
        {gameEnded && (
          <>
            <Typography
              sx={{
                fontFamily: "Poppins-Regular",
                color: "#fff",
                fontSize: "1.1rem",
              }}
              color="textSecondary"
              align="center"
            >
              {message}
            </Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                marginTop: "20px",
                width: "100%",
                backgroundColor: "#83DF68",
                color: "#FFF",
                fontFamily: "Poppins-Bold",
                fontSize: "1.2rem",
                textTransform: "capitalize"
              }}
            >
              {currentWordIndex < words.length - 1 ? (
                <>
                  Próxima Palavra{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ marginLeft: "15px" }}
                  />
                </>
              ) : (
                <>
                  Finalizar{" "}
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginLeft: "15px" }}
                  />
                </>
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Game;
