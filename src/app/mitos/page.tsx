"use client";
import * as React from "react";
import { 
  Box, 
  Typography, 
  Paper, 
  Container,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import {
  Cancel,
  CheckCircle,
  Science,
  VerifiedUser,
} from "@mui/icons-material";
import Topbar from "../component/Topbar";

const mitosVacinas = [
  {
    mito: "Vacinas causam autismo",
    verdade:
      "Diversos estudos científicos com milhões de participantes refutaram completamente essa ligação. Este mito se originou de um estudo fraudulento desacreditado pela comunidade científica.",
    categoria: "Saúde Mental",
  },
  {
    mito: "Vacinas podem causar a doença contra a qual protegem",
    verdade:
      "As vacinas usam vírus ou bactérias inativados, atenuados ou apenas fragmentos proteicos. Isso significa que não podem causar a doença, apenas estimulam o sistema imunológico a criar defesas.",
    categoria: "Imunização",
  },
  {
    mito: "Vacinas têm muitos efeitos colaterais perigosos",
    verdade:
      "Efeitos colaterais graves são extremamente raros. A maioria das pessoas experimenta apenas reações leves e temporárias como dor no local, febre baixa ou cansaço por 1-2 dias.",
    categoria: "Segurança",
  },
  {
    mito: "Não preciso vacinar se outras pessoas estiverem vacinadas",
    verdade:
      "A imunidade coletiva só funciona quando 85-95% da população está vacinada. Seu papel é essencial para proteger pessoas que não podem se vacinar, como bebês e imunossuprimidos.",
    categoria: "Coletividade",
  },
  {
    mito: "Imunidade natural é melhor que a vacinação",
    verdade:
      "Contrair a doença pode ter consequências graves ou fatais. As vacinas oferecem proteção sem os riscos da infecção real, sendo uma forma segura e eficaz de desenvolver imunidade.",
    categoria: "Imunidade",
  },
  {
    mito: "Vacinas contêm ingredientes tóxicos e perigosos",
    verdade:
      "Todos os componentes das vacinas são cuidadosamente avaliados e estão em quantidades seguras. Muitas substâncias rotuladas como 'tóxicas' estão naturalmente presentes em alimentos que consumimos diariamente.",
    categoria: "Composição",
  },
];

export default function Mitos() {
  return (
    <>
      <Topbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #90CAF9 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box
            sx={{
              textAlign: "center",
              mb: 6,
              p: 4,
              background: "linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)",
              borderRadius: 4,
              boxShadow: "0 8px 32px rgba(13, 71, 161, 0.3)",
            }}
          >
            <Science sx={{ fontSize: 72, color: "white", mb: 2 }} />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "white",
                mb: 2,
              }}
            >
              Mitos e Verdades sobre Vacinas
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#B3E5FC",
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Informações baseadas em evidências científicas para esclarecer dúvidas comuns sobre vacinação
            </Typography>
          </Box>

          {/* Cards de Mitos */}
          <Stack spacing={4}>
            {mitosVacinas.map(({ mito, verdade, categoria }, index) => (
              <Card
                key={index}
                elevation={4}
                sx={{
                  borderRadius: 4,
                  overflow: "visible",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 40px rgba(13, 71, 161, 0.25)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Badge de Categoria */}
                  <Chip
                    label={categoria}
                    sx={{
                      position: "absolute",
                      top: -12,
                      right: 24,
                      bgcolor: "#1976D2",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      px: 2,
                      boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
                    }}
                  />

                  {/* Mito */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: 3,
                      p: 3,
                      bgcolor: "#FFEBEE",
                      borderRadius: 3,
                      borderLeft: "6px solid #D32F2F",
                    }}
                  >
                    <Cancel
                      sx={{
                        color: "#D32F2F",
                        fontSize: 32,
                        mr: 2,
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#D32F2F",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          display: "block",
                          mb: 1,
                        }}
                      >
                        ❌ MITO
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#C62828",
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        {mito}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Verdade */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      p: 3,
                      bgcolor: "#E8F5E9",
                      borderRadius: 3,
                      borderLeft: "6px solid #2E7D32",
                    }}
                  >
                    <CheckCircle
                      sx={{
                        color: "#2E7D32",
                        fontSize: 32,
                        mr: 2,
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#2E7D32",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          display: "block",
                          mb: 1,
                        }}
                      >
                        ✓ VERDADE
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#1B5E20",
                          lineHeight: 1.7,
                          fontSize: "1.05rem",
                        }}
                      >
                        {verdade}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>

          {/* Footer Info */}
          <Paper
            elevation={3}
            sx={{
              mt: 6,
              p: 4,
              textAlign: "center",
              background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)",
              color: "white",
              borderRadius: 4,
            }}
          >
            <VerifiedUser sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Confie na Ciência
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              Todas as informações são baseadas em estudos científicos revisados por especialistas. 
              Em caso de dúvidas, consulte um profissional de saúde.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
}