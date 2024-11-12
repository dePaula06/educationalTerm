// Import hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import components MUI Material
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion"; // Importar framer-motion

// Import style
import "./header.css";

// Import ícones FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faPersonDress } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Função para alternar a abertura/fechamento do Drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navigation = useNavigate();

  // Funções de navegação
  const handleBiography = () => {
    navigation("/biografia");
  };

  const handleWork = () => {
    navigation("/obra");
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          {/* Box para manter o menu hamburguer à esquerda */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                marginRight: 2,
              }}
              // Exibe apenas em telas xs e sm
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Botões "Obra" e "Autora" alinhados à direita, visíveis apenas em telas maiores que md */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Exibe esses botões em telas maiores que md
              gap: "30%",
              justifyContent: "flex-end",
              marginRight: "3%",
              marginTop: "25px",
            }}
          >
            {/* Botão "Obra" com animação */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} // Inicialmente invisível e deslocado para a direita
              animate={{ opacity: 1, x: 0 }} // Tornar visível e retornar à posição original
              transition={{ duration: 0.6 }} // Duração da animação
            >
              <Button className="button" onClick={handleWork}>
                <FontAwesomeIcon icon={faBookOpen} />
                Obra
              </Button>
            </motion.div>

            {/* Botão "Autora" com animação */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} // Inicialmente invisível e deslocado para a direita
              animate={{ opacity: 1, x: 0 }} // Tornar visível e retornar à posição original
              transition={{ duration: 0.6, delay: 0.2 }} // Duração da animação com um pequeno atraso
            >
              <Button className="button" onClick={handleBiography}>
                <FontAwesomeIcon icon={faPersonDress} />
                Autora
              </Button>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer que abre do lado esquerdo em telas menores que md */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: "200px",
            height: "100%", // Altura total do Drawer
            backgroundColor: "#1E1E1E", // Cor do fundo do Drawer
          }}
          role="presentation"
        >
          <List>
            <ListItem
              button
              onClick={() => {
                handleBiography();
                setDrawerOpen(false); // Fecha o Drawer após a navegação
              }}
            >
              <ListItemText className="textButtonMenu" primary="Autora" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                handleWork();
                setDrawerOpen(false); // Fecha o Drawer após a navegação
              }}
            >
              <ListItemText className="textButtonMenu" primary="Obra" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
