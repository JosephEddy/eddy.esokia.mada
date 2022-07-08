import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import chien from "../assets/chien.png";
import logo_esokia from "../assets/logo_esokia.png";
import React from "react";

export default function Second() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${process.env.PUBLIC_URL + chien})`,
        flexDirection: "column",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "600px",
      }}
    >
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Box style={{ width: "140px" }} />
          <img src={logo_esokia} alt="logo_esokia" />
          <Stack
            direction="row"
            style={{ backgroundColor: "transparent" }}
            spacing={-1}
          >
            <Stack width={"300px"} />
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "12px", textTransform: "none" }}>
                Esokia
              </span>
            </Button>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "12px", textTransform: "none" }}>
                Service
              </span>
            </Button>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "12px", textTransform: "none" }}>
                Références
              </span>
            </Button>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "12px", textTransform: "none" }}>
                Carrières
              </span>
            </Button>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "12px", textTransform: "none" }}>
                Actualités
              </span>
            </Button>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "12px", textTransform: "none" }}>
                Dévis
              </span>
            </Button>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "12px", textTransform: "none" }}>
                Contrat
              </span>
            </Button>
          </Stack>
          {/* <Stack width="800px" style={{ backgroundColor: "red" }}>
            bla
          </Stack> */}
        </Toolbar>
      </AppBar>
      <Stack height={100} />
      <Stack direction="row">
        <Stack width={158} />
        <Typography variant="h2" style={{ color: "white" }}>
          L'agence digitale
          <br />
          offshore
          <br />
          <p style={{ fontSize: "14px" }}>
            Nous développons pour vous le concept de "boutique digitale"
          </p>
          <p style={{ fontSize: "14px" }}>
            en vous proposant une offre sur mesure
          </p>
        </Typography>
      </Stack>
    </Box>
  );
}
