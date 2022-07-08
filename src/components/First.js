import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import React from "react";
import { grey, purple, red } from "@mui/material/colors";

export default function First() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: "#161b1d",
          height: "32px",
          fontFamily: "Myriad Pro",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Stack
            direction="row"
            divider={
              <Divider
                orientation="vertical"
                sx={{ backgroundColor: "grey" }}
                flexItem
              />
            }
            spacing={1}
            height="32px"
            justifyContent="flex-end"
            sx={{
              marginTop: "-35px",
            }}
          >
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <PhoneIphoneIcon
                style={{ heigth: "13px", alignItems: "center" }}
              />
              <span style={{ fontSize: "12px" }}>+233 54 96 21 89</span>
            </Button>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "gray" }}
              flexItem
            />
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
                Login
              </span>
            </Button>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "gray" }}
              flexItem
            />
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
                Register
              </span>
            </Button>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "gray" }}
              flexItem
            />
            <Box width="235px" />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
