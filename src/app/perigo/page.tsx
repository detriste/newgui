"use client";
import * as React from "react";
import { Box, Typography, Paper, List, ListItem } from "@mui/material";
import Topbar from "../component/Topbar";

const perigosNaoVacinacao = [
  {
    doenca: "Sarampo",
    perigo:
      "Doença altamente contagiosa que pode causar complicações graves como pneumonia, encefalite e até morte, principalmente em crianças pequenas.",
  },
  {
    doenca: "Poliomielite",
    perigo:
      "Pode causar paralisia permanente e morte. Graças à vacinação, foi erradicada no Brasil, mas ainda existe o risco de reintrodução.",
  },
  {
    doenca: "Coqueluche",
    perigo:
      "Tosse intensa que pode durar meses, levando a complicações respiratórias graves, especialmente perigosa para bebês menores de 1 ano.",
  },
  {
    doenca: "Difteria",
    perigo:
      "Infecção bacteriana grave que pode obstruir as vias respiratórias e afetar o coração e sistema nervoso, podendo ser fatal.",
  },
  {
    doenca: "Meningite",
    perigo:
      "Inflamação das meninges que pode causar sequelas neurológicas permanentes, amputações e morte em poucas horas.",
  },
  {
    doenca: "Rubéola",
    perigo:
      "Causa sérios defeitos congênitos se contraída durante a gravidez, incluindo surdez, problemas cardíacos e atraso mental.",
  },
];

export default function PerigosNaoVacinacao() {
  return (
    <>
      <Topbar />

      <Box sx={{ p: 3, maxWidth: 700, margin: "auto" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Perigos da Não Vacinação
        </Typography>
        <List>
          {perigosNaoVacinacao.map(({ doenca, perigo }, i) => (
            <ListItem key={i} sx={{ mb: 2 }}>
              <Paper sx={{ p: 2, width: "100%" }} elevation={3}>
                <Typography
                  variant="h6"
                  sx={{ color: "#d32f2f", fontWeight: "bold" }}
                >
                  ⚠️ {doenca}
                </Typography>
                <Typography sx={{ mt: 1 }}>{perigo}</Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
