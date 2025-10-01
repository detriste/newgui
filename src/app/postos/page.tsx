"use client";
import * as React from "react";
import { Box, Typography, Paper, List, ListItem } from "@mui/material";
import Topbar from "../component/Topbar";

const postosProximos = [
  {
    nome: "UBS Central Pompéia",
    endereco: "Rua Duque de Caxias, 450 - Centro",
    horario: "Segunda a Sexta: 7h às 17h",
    telefone: "(14) 3452-1234",
  },
  {
    nome: "UBS Vila São José",
    endereco: "Av. Brasil, 890 - Vila São José",
    horario: "Segunda a Sexta: 7h às 17h",
    telefone: "(14) 3452-5678",
  },
  {
    nome: "UBS Jardim Paraíso",
    endereco: "Rua das Flores, 123 - Jardim Paraíso",
    horario: "Segunda a Sexta: 7h às 17h",
    telefone: "(14) 3452-9012",
  },
  {
    nome: "Posto de Saúde Vila Nova",
    endereco: "Rua Santos Dumont, 567 - Vila Nova",
    horario: "Segunda a Sexta: 8h às 16h",
    telefone: "(14) 3452-3456",
  },
];

export default function PostosProximos() {
  return (
    <>
      <Topbar />
      <Box sx={{ p: 3, maxWidth: 700, margin: "auto" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
        Postos de Vacinação Próximos
      </Typography>
      <List>
        {postosProximos.map(({ nome, endereco, horario, telefone }, i) => (
          <ListItem key={i} sx={{ mb: 2 }}>
            <Paper sx={{ p: 2, width: "100%" }} elevation={3}>
              <Typography variant="h6" sx={{ color: "#1976d2", fontWeight: "bold" }}>
                📍 {nome}
              </Typography>
              <Typography sx={{ mt: 1, color: "#555" }}>
                <strong>Endereço:</strong> {endereco}
              </Typography>
              <Typography sx={{ mt: 0.5, color: "#555" }}>
                <strong>Horário:</strong> {horario}
              </Typography>
              <Typography sx={{ mt: 0.5, color: "#555" }}>
                <strong>Telefone:</strong> {telefone}
              </Typography>
            </Paper>
          </ListItem>
        ))}
      </List>
    </Box>
    </>
  );
}