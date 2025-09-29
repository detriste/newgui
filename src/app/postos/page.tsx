"use client";
import * as React from "react";
import { Box, Typography, Paper, Grid, Divider } from "@mui/material";

const dadosPocos = [
  {
    cidade: "Pompeia",
    descricao:
      "31 poços produtor do Grupo Bauru, vazões 3-13 m³/h. 17 poços para pontos específicos. Centro produtivo no topo da Formação Adamantina, zona rural.",
    abastecimento: "Água subterrânea do Grupo Bauru",
    pH: "Dados: Aproximadamente neutro a levemente alcalino",
  },
  {
    cidade: "Marília",
    descricao:
      "36 poços explorando Grupo Bauru e Formação Botucatu, com vazões variadas. 25% do abastecimento vem dos poços, restante de águas superficiais.",
    abastecimento: "Água subterrânea do Grupo Bauru e Botucatu",
    pH: "Dados: Diferente de Pompeia, pH mais ácido",
  },
];

export default function PocosMariliaPompeia() {
  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 900,
        margin: "auto",
        background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
        borderRadius: 3,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#0d3b66" }}
      >
        Poços de Água de Marília e Pompeia
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 4, color: "#669bbc", fontStyle: "italic" }}
      >
        Informações técnicas e características dos poços
      </Typography>

      <Grid container spacing={4}>
        {dadosPocos.map(({ cidade, descricao, abastecimento, pH }, index) => (
          <Grid item xs={12} md={6} key={cidade}>
            <Paper
              elevation={6}
              sx={{
                p: 3,
                backgroundColor: "#fff",
                borderLeft: `8px solid ${index === 0 ? "#0d3b66" : "#f95738"}`,
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: index === 0 ? "#0d3b66" : "#f95738",
                  fontWeight: "bold",
                }}
                gutterBottom
              >
                {cidade}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" sx={{ mb: 2 }}>
                {descricao}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Fonte de Abastecimento:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {abastecimento}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                pH:
              </Typography>
              <Typography variant="body2">{pH}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
