"use client";
import * as React from "react";
import { Box, Typography, Paper, List, ListItem, Divider } from "@mui/material";
import Topbar from "../component/Topbar";
const perigosVacinas = [
  {
    perigo: "Efeitos colaterais comuns",
    detalhe:
      "Dor, inchaço e vermelhidão no local da injeção, febre baixa, mal-estar, dor de cabeça e dores musculares. Geralmente são leves e passam em 1 a 3 dias.",
  },
  {
    perigo: "Reações alérgicas raras",
    detalhe:
      "Reações anafiláticas são muito raras e podem ser tratadas rapidamente. Pessoas com alergia grave a componentes da vacina devem consultar um médico.",
  },
  {
    perigo: "Reações sistêmicas temporárias",
    detalhe:
      "Febre, cansaço, dores musculares e gastrointestinais que ocorrem em poucos dias e indicam a resposta do sistema imunológico.",
  },
  {
    perigo: "Contraindicações específicas",
    detalhe:
      "Pessoas com histórico de reação grave a vacinas específicas devem buscar orientação médica antes da vacinação.",
  },
  {
    perigo: "Raríssimos eventos adversos graves",
    detalhe:
      "Eventos graves, como trombose com trombocitopenia, são extremamente raros e monitorados por órgãos de saúde. Os benefícios da vacinação superam em muito os riscos.",
  },
];

export default function PerigosVacinas() {
  return (
    
    <Box
      sx={{
        p: 4,
        maxWidth: 800,
        margin: "auto",
        background: "linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%)",
        borderRadius: 3,
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#b00020" }}
      >
        Perigos e Efeitos Colaterais das Vacinas
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 4, color: "#7a7a7a", fontStyle: "italic" }}
      >
        Informações importantes para entender os riscos e cuidados
      </Typography>

      <List>
        {perigosVacinas.map(({ perigo, detalhe }, index) => (
          <ListItem key={index} sx={{ mb: 2 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: "#fff",
                borderLeft: `6px solid #b00020`,
                borderRadius: 2,
                width: "100%",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#b00020" }}>
                {perigo}
              </Typography>
              <Divider sx={{ mb: 1, mt: 1 }} />
              <Typography variant="body1">{detalhe}</Typography>
            </Paper>
          </ListItem>
          
        ))}
      </List>
    </Box>
    
  );
     
}
