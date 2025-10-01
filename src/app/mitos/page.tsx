"use client";
import * as React from "react";
import { Box, Typography, Paper, List, ListItem } from "@mui/material";


const mitosVacinas = [
  {
    mito: "Vacinas causam autismo",
    verdade:
      "Diversos estudos científicos refutaram essa ligação. Este é um mito amplamente desmentido.",
  },
  {
    mito: "Vacinas podem causar a doença contra a qual protegem",
    verdade:
      "As vacinas usam vírus ou bactérias inativados ou fragmentados, não podendo causar a doença.",
  },
  {
    mito: "Vacinas têm muitos efeitos colaterais perigosos",
    verdade:
      "Efeitos colaterais graves são raros; geralmente causam apenas reações leves e temporárias.",
  },
  {
    mito: "Não preciso vacinar se outras pessoas estiverem vacinadas",
    verdade:
      "A imunidade coletiva depende de alta cobertura vacinal para proteger toda a população.",
  },
];

export default function Mitos() {
  return (
    <Box sx={{ p: 3, maxWidth: 700, margin: "auto" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
        Mitos e Verdades sobre Vacinas
      </Typography>
      <List>
        {mitosVacinas.map(({ mito, verdade }, i) => (
          <ListItem key={i} sx={{ mb: 2 }}>
            <Paper sx={{ p: 2, width: "100%" }} elevation={3}>
              <Typography variant="h6" sx={{ color: "#d32f2f", fontWeight: "bold" }}>
                Mito: {mito}
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Verdade: {verdade}
              </Typography>
            </Paper>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
