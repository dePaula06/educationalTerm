//Import componentes MUI
import { Button, Typography } from "@mui/material";

//import style
import "./autora.css";

//Import components

function Autora() {
  return (
    <div className="container">
      <div className="imageBackgroundAutora" />
      <div className="blackOpacity" />
      <div className="contentAutora">
        <Typography className="titleBiography">BIOGRAFIA DA AUTORA</Typography>
        <Typography className="textBiography">
          Conceição Evaristo nasceu em 29 de novembro de 1946, em Belo
          Horizonte, no estado de Minas Gerais. Trabalhou como empregada
          doméstica, se tornou professora e fez faculdade de Letras, além de
          mestrado e doutorado. Mas, apesar de consagrada como escritora, não
          foi eleita pela Academia Brasileira de Letras em 2018. A romancista,
          poetisa e contista é autora de livros como Ponciá Vicêncio, seu
          romance mais famoso. Suas obras, pertencentes à literatura
          contemporânea, são caracterizadas pelo protagonismo feminino e pela
          denúncia de discriminação racial. Assim, são realistas e discutem
          questões de gênero e etnia.
        </Typography>
        <Typography className="referenceBiography">
          PORTUGUÊS.com.br. Conceição Evaristo: Vida e obra. Disponível em:
          https://www.portugues.com.br/literatura/conceicao-evaristo.html.
          Acesso em: 23 out. 2024.
        </Typography>
      </div>
    </div>
  );
}

export default Autora;
