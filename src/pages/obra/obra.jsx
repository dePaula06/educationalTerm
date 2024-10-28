//Import componentes MUI
import { Button, Typography } from "@mui/material";

//import style
import "./obra.css";

//Import components

function Obra() {
  return (
    <div className="container">
      <div className="imageBackgroundObra" />
      <div className="blackOpacity" />
      <div className="contentObra">
        <Typography className="titleObra">DESCRIÇÃO DA OBRA</Typography>
        <Typography className="textObra">
          Livro publicado em 2014, Olhos d’água, da autora Conceição Evaristo, é
          uma coleção de 15 contos que abordam diversas temáticas sociais,
          existenciais e emocionais como racismo, violências e amores.  A autora
          produz narrativas de mulheres, em sua maioria, e homens
          afrobrasileiros que apresentam situações e lugares marcados pela
          violência e ao mesmo tempo pela resistência, que narram as suas
          vivências e experiências a partir dessa perspectiva social, de
          sujeitos marginalizados e discriminados em vários âmbitos. Mas não só
          isso: a escritora produz um olhar sobre a identidade e ancestralidade
          dessas personagens, marcando também o protagonismos desses sujeitos.  
          Conceição Evaristo traz em sua escrita a noção de “escrevivência”,
          criada por ela. O termo significa expressar as experiências de vida e
          vivências sociais daqueles que passam por essas experiências, dando a
          ver uma multiplicidade de características às personagens que narram
          suas visões de mundo numa perspectiva de quem vive à margem da
          sociedade e que, mesmo com todos os empecilhos, não permitem serem
          apagados da história.
        </Typography>
        <Typography className="referenceObra">
          QUEROBOLSA. Olhos d'água: resumo. Disponível em:
          https://querobolsa.com.br/enem/literatura/olhos-d-agua-resumo. Acesso
          em: 23 out. 2024.
        </Typography>
      </div>
    </div>
  );
}

export default Obra;
