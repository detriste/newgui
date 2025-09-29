"use client";

import * as React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Box, Typography, List, ListItem } from "@mui/material";

interface Vacina {
  nome: string;
  date: Date;
}

const hoje = new Date();

const vacinas: Vacina[] = [
  { nome: "BCG", date: new Date(hoje.getFullYear(), hoje.getMonth(), 1) },
  { nome: "Hepatite B", date: new Date(hoje.getFullYear(), hoje.getMonth(), 2) },
  { nome: "Pentavalente", date: new Date(hoje.getFullYear(), hoje.getMonth(), 15) },
  { nome: "VIP", date: new Date(hoje.getFullYear(), hoje.getMonth(), 15) },
  { nome: "Rotavírus", date: new Date(hoje.getFullYear(), hoje.getMonth(), 16) },
  { nome: "Pneumocócica", date: new Date(hoje.getFullYear(), hoje.getMonth(), 20) },
  { nome: "Meningocócica C", date: new Date(hoje.getFullYear(), hoje.getMonth(), 25) },
  { nome: "Febre amarela", date: new Date(hoje.getFullYear(), hoje.getMonth(), 27) },
  { nome: "Tríplice viral", date: new Date(hoje.getFullYear(), hoje.getMonth(), 28) },
  { nome: "DTP", date: new Date(hoje.getFullYear(), hoje.getMonth(), 29) },
  { nome: "Varicela", date: new Date(hoje.getFullYear(), hoje.getMonth(), 30) },
];

export default function CalendarioVacinal() {
  const [value, setValue] = React.useState<Date | null>(hoje);

  const handleChange = (date: Date | Date[] | null) => {
    if (date instanceof Date) {
      setValue(date);
    } else if (Array.isArray(date) && date.length > 0) {
      setValue(date[0]);
    } else {
      setValue(null);
    }
  };

  const getVacinasPorData = (date: Date | null): string[] => {
    if (!date) return [];
    return vacinas
      .filter(
        (vacina) =>
          vacina.date.getDate() === date.getDate() &&
          vacina.date.getMonth() === date.getMonth() &&
          vacina.date.getFullYear() === date.getFullYear()
      )
      .map((v) => v.nome);
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const vacinasDoDia = getVacinasPorData(date);
      if (vacinasDoDia.length > 0) {
        return (
          <Box sx={{ mt: 0.5 }}>
            {vacinasDoDia.map((nome, idx) => (
              <Typography
                key={idx}
                variant="caption"
                sx={{
                  display: "block",
                  backgroundColor: "#1976d2",
                  color: "white",
                  borderRadius: "4px",
                  padding: "1px 4px",
                  marginTop: "2px",
                  fontWeight: "bold",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {nome}
              </Typography>
            ))}
          </Box>
        );
      }
    }
    return null;
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
        Calendário Vacinal
      </Typography>
      <Calendar onChange={handleChange} value={value} tileContent={tileContent} />
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
          Vacinas no dia selecionado ({value ? value.toLocaleDateString() : "Nenhuma data selecionada"}):
        </Typography>
        <List>
          {getVacinasPorData(value).length > 0 ? (
            getVacinasPorData(value).map((nome, i) => <ListItem key={i}>{nome}</ListItem>)
          ) : (
            <ListItem>Nenhuma vacina agendada para esta data.</ListItem>
          )}
        </List>
      </Box>
    </Box>
  );
}
