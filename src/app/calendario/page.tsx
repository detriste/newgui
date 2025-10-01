"use client";
import * as React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { 
  Box, 
  Typography, 
  Container,
  Paper,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import {
  CalendarMonth,
  Vaccines,
  EventAvailable,
} from "@mui/icons-material";
import Topbar from "../component/Topbar";

interface Vacina {
  nome: string;
  date: Date;
  descricao: string;
  faixaEtaria: string;
}

const hoje = new Date();

const vacinas: Vacina[] = [
  { 
    nome: "BCG", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 1),
    descricao: "Proteção contra tuberculose",
    faixaEtaria: "Ao nascer"
  },
  { 
    nome: "Hepatite B", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 2),
    descricao: "Primeira dose contra hepatite B",
    faixaEtaria: "Ao nascer"
  },
  { 
    nome: "Pentavalente", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 15),
    descricao: "Protege contra 5 doenças: difteria, tétano, coqueluche, Hib e hepatite B",
    faixaEtaria: "2, 4 e 6 meses"
  },
  { 
    nome: "VIP", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 15),
    descricao: "Vacina inativada contra poliomielite",
    faixaEtaria: "2, 4 e 6 meses"
  },
  { 
    nome: "Rotavírus", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 16),
    descricao: "Proteção contra gastroenterite",
    faixaEtaria: "2 e 4 meses"
  },
  { 
    nome: "Pneumocócica", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 20),
    descricao: "Previne pneumonia e meningite",
    faixaEtaria: "2, 4 e 12 meses"
  },
  { 
    nome: "Meningocócica C", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 25),
    descricao: "Proteção contra meningite C",
    faixaEtaria: "3 e 5 meses + reforço"
  },
  { 
    nome: "Febre amarela", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 27),
    descricao: "Proteção contra febre amarela",
    faixaEtaria: "9 meses + reforço"
  },
  { 
    nome: "Tríplice viral", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 28),
    descricao: "Protege contra sarampo, caxumba e rubéola",
    faixaEtaria: "12 meses + reforço"
  },
  { 
    nome: "DTP", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 29),
    descricao: "Reforço contra difteria, tétano e coqueluche",
    faixaEtaria: "15 meses"
  },
  { 
    nome: "Varicela", 
    date: new Date(hoje.getFullYear(), hoje.getMonth(), 30),
    descricao: "Proteção contra catapora",
    faixaEtaria: "15 meses + reforço"
  },
];

export default function CalendarioVacinal() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(hoje);

  const getVacinasPorData = (date: Date | null): Vacina[] => {
    if (!date) return [];
    return vacinas.filter(
      (vacina) =>
        vacina.date.getDate() === date.getDate() &&
        vacina.date.getMonth() === date.getMonth() &&
        vacina.date.getFullYear() === date.getFullYear()
    );
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const vacinasDoDia = getVacinasPorData(date);
      if (vacinasDoDia.length > 0) {
        return (
          <Box
            sx={{
              position: "absolute",
              bottom: 2,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 0.5,
            }}
          >
            {vacinasDoDia.map((_, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#1976D2",
                }}
              />
            ))}
          </Box>
        );
      }
    }
    return null;
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const vacinasDoDia = getVacinasPorData(date);
      if (vacinasDoDia.length > 0) {
        return "has-vaccines";
      }
    }
    return null;
  };

  return (
    <>
      <Topbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
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
            <CalendarMonth sx={{ fontSize: 72, color: "white", mb: 2 }} />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "white",
                mb: 2,
              }}
            >
              Calendário Vacinal
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#B3E5FC",
                maxWidth: 800,
                mx: "auto",
              }}
            >
              Acompanhe as datas importantes para manter sua vacinação em dia
            </Typography>
          </Box>

          {/* Calendar Card */}
          <Card
            elevation={4}
            sx={{
              borderRadius: 4,
              mb: 4,
              overflow: "hidden",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <style>
                {`
                  .react-calendar {
                    width: 100%;
                    border: none;
                    font-family: 'Roboto', sans-serif;
                    background: white;
                  }
                  .react-calendar__tile {
                    padding: 20px 10px;
                    position: relative;
                    background: white;
                    transition: all 0.2s ease;
                  }
                  .react-calendar__tile:hover {
                    background: #E3F2FD;
                  }
                  .react-calendar__tile--active {
                    background: #1976D2 !important;
                    color: white;
                  }
                  .react-calendar__tile--now {
                    background: #BBDEFB;
                    font-weight: bold;
                  }
                  .react-calendar__tile.has-vaccines {
                    background: #E8F5E9;
                    font-weight: 600;
                  }
                  .react-calendar__navigation button {
                    font-size: 18px;
                    font-weight: 600;
                    color: #0D47A1;
                    padding: 16px;
                  }
                  .react-calendar__navigation button:hover {
                    background: #E3F2FD;
                  }
                  .react-calendar__month-view__weekdays {
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 14px;
                    color: #1565C0;
                    padding: 16px 0;
                  }
                `}
              </style>
              <Calendar
                value={selectedDate}
                onClickDay={(date) => setSelectedDate(date)}
                tileContent={tileContent}
                tileClassName={tileClassName}
                locale="pt-BR"
              />
            </CardContent>
          </Card>

          {/* Selected Date Info */}
          <Card
            elevation={4}
            sx={{
              borderRadius: 4,
              background: "white",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <EventAvailable sx={{ fontSize: 32, color: "#1976D2", mr: 2 }} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#0D47A1" }}>
                    Vacinas do Dia Selecionado
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1565C0" }}>
                    {selectedDate ? selectedDate.toLocaleDateString("pt-BR", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) : "Nenhuma data selecionada"}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {getVacinasPorData(selectedDate).length > 0 ? (
                <Stack spacing={3}>
                  {getVacinasPorData(selectedDate).map((vacina, index) => (
                    <Paper
                      key={index}
                      elevation={2}
                      sx={{
                        p: 3,
                        borderLeft: "6px solid #1976D2",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateX(8px)",
                          boxShadow: "0 8px 16px rgba(13, 71, 161, 0.2)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Vaccines sx={{ color: "#1976D2", fontSize: 32, mr: 2 }} />
                          <Typography variant="h6" sx={{ fontWeight: 700, color: "#0D47A1" }}>
                            {vacina.nome}
                          </Typography>
                        </Box>
                        <Chip
                          label={vacina.faixaEtaria}
                          size="small"
                          sx={{
                            bgcolor: "#E3F2FD",
                            color: "#0D47A1",
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                      <Typography variant="body1" sx={{ color: "#455A64", lineHeight: 1.6 }}>
                        {vacina.descricao}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              ) : (
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    bgcolor: "#F5F5F5",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body1" sx={{ color: "#757575" }}>
                    Nenhuma vacina agendada para esta data.
                  </Typography>
                </Paper>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}