import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { fontSize, fontWeight } from "@mui/system";

export default function () {
  const _radiusNum = 100;
  return (
    <Box>
      <Typography
        sx={{
          backgroundColor: "#dddddd",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        NOS SERVICES
      </Typography>
      <Typography
        sx={{
          backgroundColor: "#dddddd",
          textAlign: "center",
        }}
      >
        Visiter notre "boutique digitale" Nous maîtrisons l'ensemble des métier
        du web
      </Typography>
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#dddddd" }}
        direction="row"
        spacing={6}
      >
        {/* Ato le boribory */}
        <Stack position="relative" width={230} direction="column">
          <Stack height={50} />
          <Stack
            width="100%"
            height={200}
            borderRadius={_radiusNum}
            borderColor="#2196f3"
            sx={{
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            direction="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Stack height="15px" />
            <Typography textAlign={"center"} fontWeight={"bold"}>
              Developpment Web
            </Typography>
            <Typography textAlign={"center"}>
              Lorem ipsum dolor sit
              <br /> amet consectetur adipisicing
              <br /> elit. Quo, id?
            </Typography>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#2196f3",
                }}
              >
                Read more
              </span>
              <DoubleArrowIcon
                style={{ heigth: "0px", width: "10px", alignItems: "center" }}
              />
            </Button>
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            pt={3}
          >
            <Stack
              width={60}
              height={60}
              borderRadius={_radiusNum}
              sx={{
                backgroundColor: "#00a099",
              }}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="#fff" fontSize={24}>
                <TvIcon />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* Ato le borybory */}

        {/* Ato le boribory */}
        <Stack position="relative" width={230} direction="column">
          <Stack height={50} />
          <Stack
            width="100%"
            height={200}
            borderRadius={_radiusNum}
            borderColor="#2196f3"
            sx={{
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            direction="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Stack height="15px" />
            <Typography textAlign={"center"} fontWeight={"bold"}>
              Developpment mobile
            </Typography>
            <Typography textAlign={"center"}>
              Lorem ipsum dolor sit
              <br /> amet consectetur adipisicing
              <br /> elit. Quo, id?
            </Typography>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#2196f3",
                }}
              >
                Read more
              </span>
              <DoubleArrowIcon
                style={{ heigth: "0px", width: "10px", alignItems: "center" }}
              />
            </Button>
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            pt={3}
          >
            <Stack
              width={60}
              height={60}
              borderRadius={_radiusNum}
              sx={{
                backgroundColor: "#00a099",
              }}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="#fff" fontSize={24}>
                <TvIcon />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* Ato le borybory */}

        {/* Ato le boribory */}
        <Stack position="relative" width={230} direction="column">
          <Stack height={50} />
          <Stack
            width="100%"
            height={200}
            borderRadius={_radiusNum}
            borderColor="#2196f3"
            sx={{
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            direction="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Stack height="15px" />
            <Typography textAlign={"center"} fontWeight={"bold"}>
              Web Design
            </Typography>
            <Typography textAlign={"center"}>
              Lorem ipsum dolor sit
              <br /> amet consectetur adipisicing
              <br /> elit. Quo, id?
            </Typography>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#2196f3",
                }}
              >
                Read more
              </span>
              <DoubleArrowIcon
                style={{ heigth: "0px", width: "10px", alignItems: "center" }}
              />
            </Button>
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            pt={3}
          >
            <Stack
              width={60}
              height={60}
              borderRadius={_radiusNum}
              sx={{
                backgroundColor: "#00a099",
              }}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="#fff" fontSize={24}>
                <TvIcon />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* Ato le borybory */}

        {/* Ato le boribory */}
        <Stack position="relative" width={230} direction="column">
          <Stack height={50} />
          <Stack
            width="100%"
            height={200}
            borderRadius={_radiusNum}
            borderColor="#2196f3"
            sx={{
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            direction="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Stack height="15px" />
            <Typography textAlign={"center"} fontWeight={"bold"}>
              Test Qualité Assurance
            </Typography>
            <Typography textAlign={"center"}>
              Lorem ipsum dolor sit
              <br /> amet consectetur adipisicing
              <br /> elit. Quo, id?
            </Typography>
            <Button
              variant="text"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#2196f3",
                }}
              >
                Read more
              </span>
              <DoubleArrowIcon
                style={{ heigth: "0px", width: "10px", alignItems: "center" }}
              />
            </Button>
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            pt={3}
          >
            <Stack
              width={60}
              height={60}
              borderRadius={_radiusNum}
              sx={{
                backgroundColor: "#00a099",
              }}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="#fff" fontSize={24}>
                <TvIcon />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* Ato le borybory */}
      </Stack>
    </Box>
  );
}
