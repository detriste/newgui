"use client";
import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Paper,
  Avatar,
  Chip,
  Divider,
} from "@mui/material";
import {
  Vaccines,
  CalendarMonth,
  LocationOn,
  Warning,
  FactCheck,
  TrendingUp,
  HealthAndSafety,
  Shield,
  Science,
  People,
  LocalHospital,
  ArrowForward,
  CheckCircle,
  Info,
  Favorite,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Topbar from "../component/Topbar";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: <FactCheck sx={{ fontSize: 48 }} />,
      title: "Mitos e Verdades",
      description: "Informações baseadas em ciência para esclarecer dúvidas sobre vacinas",
      color: "#1976D2",
      path: "/mitos",
    },
    {
      icon: <CalendarMonth sx={{ fontSize: 48 }} />,
      title: "Calendário Vacinal",
      description: "Acompanhe todas as vacinas e suas datas recomendadas",
      color: "#2E7D32",
      path: "/calendario",
    },
    {
      icon: <LocationOn sx={{ fontSize: 48 }} />,
      title: "Postos Próximos",
      description: "Encontre postos de vacinação perto de você",
      color: "#ED6C02",
      path: "/postos",
    },
    {
      icon: <Warning sx={{ fontSize: 48 }} />,
      title: "Informações Importantes",
      description: "Conheça os riscos da não vacinação e proteja sua família",
      color: "#D32F2F",
      path: "/perigo",
    },
  ];

  const stats = [
    { icon: <People />, value: "95%", label: "Cobertura Vacinal Recomendada" },
    { icon: <Shield />, value: "20+", label: "Doenças Prevenidas" },
    { icon: <LocalHospital />, value: "100%", label: "Gratuito no SUS" },
  ];

  const benefits = [
    {
      title: "Proteção Individual",
      description: "Vacinas fortalecem seu sistema imunológico contra doenças graves",
      icon: <Shield sx={{ fontSize: 40, color: "#1976D2" }} />,
    },
    {
      title: "Proteção Coletiva",
      description: "Ajuda a criar imunidade de rebanho, protegendo quem não pode se vacinar",
      icon: <People sx={{ fontSize: 40, color: "#2E7D32" }} />,
    },
    {
      title: "Erradicação de Doenças",
      description: "A vacinação em massa já eliminou doenças como a varíola",
      icon: <TrendingUp sx={{ fontSize: 40, color: "#ED6C02" }} />,
    },
    {
      title: "Segurança Comprovada",
      description: "Todas as vacinas passam por rigorosos testes antes de serem aprovadas",
      icon: <CheckCircle sx={{ fontSize: 40, color: "#0D47A1" }} />,
    },
  ];

  return (
    <>
      <Topbar />

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
          color: "white",
          py: 12,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid >
              <Chip
                label="🏥 Sistema Público de Saúde"
                sx={{
                  mb: 3,
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontWeight: 600,
                  backdropFilter: "blur(10px)",
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Proteja sua família com
                <Box component="span" sx={{ color: "#B3E5FC", display: "block" }}>
                  Vacinação Segura
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.95,
                  lineHeight: 1.7,
                  maxWidth: 600,
                }}
              >
                Acesso rápido a informações confiáveis sobre vacinas, calendário de
                vacinação e postos de saúde próximos a você.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => router.push("/calendario")}
                  endIcon={<ArrowForward />}
                  sx={{
                    bgcolor: "white",
                    color: "#0D47A1",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    "&:hover": {
                      bgcolor: "#F5F5F5",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Ver Calendário
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => router.push("/postos")}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    borderWidth: 2,
                    "&:hover": {
                      borderWidth: 2,
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "white",
                    },
                  }}
                >
                  Postos Próximos
                </Button>
              </Stack>
            </Grid>
            <Grid >
              <Box
                sx={{
                  position: "relative",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Box
                  sx={{
                    width: 400,
                    height: 400,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Vaccines sx={{ fontSize: 200, opacity: 0.9 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mt: -6, position: "relative", zIndex: 2 }}>
        <Grid >
          {stats.map((stat, index) => (
            <Grid >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  background: "white",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 32px rgba(13, 71, 161, 0.2)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#1976D2",
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Avatar>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 900, color: "#0D47A1", mb: 1 }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body1" sx={{ color: "#546E7A", fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#0D47A1", mb: 2 }}>
            Tudo o que você precisa saber
          </Typography>
          <Typography variant="h6" sx={{ color: "#546E7A", maxWidth: 700, mx: "auto" }}>
            Informações completas e confiáveis sobre vacinação ao seu alcance
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid >
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: `0 16px 40px ${feature.color}40`,
                  },
                }}
                onClick={() => router.push(feature.path)}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Avatar
                    sx={{
                      bgcolor: feature.color,
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 3,
                      boxShadow: `0 8px 24px ${feature.color}40`,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 2, color: "#263238" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#546E7A", lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: "#F5F5F5", py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0D47A1", mb: 2 }}>
              Por que se vacinar?
            </Typography>
            <Typography variant="h6" sx={{ color: "#546E7A", maxWidth: 700, mx: "auto" }}>
              A vacinação é uma das medidas mais eficazes de saúde pública
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid >
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(8px)",
                      boxShadow: "0 8px 24px rgba(13, 71, 161, 0.15)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <Box sx={{ mr: 3 }}>{benefit.icon}</Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "#0D47A1", mb: 1 }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#546E7A", lineHeight: 1.7 }}>
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={6}
            sx={{
              p: 6,
              textAlign: "center",
              borderRadius: 4,
              background: "white",
            }}
          >
            <HealthAndSafety sx={{ fontSize: 72, color: "#1976D2", mb: 3 }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#0D47A1",
                mb: 2,
              }}
            >
              A vacinação salva vidas
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#546E7A",
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              Proteja você e sua comunidade. Mantenha seu cartão de vacinação em dia e
              contribua para um futuro mais saudável para todos.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/mitos")}
              endIcon={<Science />}
              sx={{
                bgcolor: "#1976D2",
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                boxShadow: "0 8px 24px rgba(25, 118, 210, 0.3)",
                "&:hover": {
                  bgcolor: "#0D47A1",
                },
              }}
            >
              Conheça os Fatos
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "#0D47A1", color: "white", py: 4, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2025 Portal de Vacinas - Informação e Saúde para Todos
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.6, display: "block", mt: 1 }}>
            Todas as informações são baseadas em evidências científicas
          </Typography>
        </Container>
      </Box>
    </>
  );
}