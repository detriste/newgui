"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Coronavirus from "@mui/icons-material/Coronavirus";
import Home from "@mui/icons-material/Home";
import FactCheck from "@mui/icons-material/FactCheck";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import LocationOn from "@mui/icons-material/LocationOn";
import Warning from "@mui/icons-material/Warning";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Início", icon: <Home />, path: "/" },
    { text: "Mitos e Verdades", icon: <FactCheck />, path: "/mitos" },
    { text: "Calendário Vacinal", icon: <CalendarMonth />, path: "/calendario" },
    { text: "Postos Próximos", icon: <LocationOn />, path: "/postos" },
    { text: "Informações Importantes", icon: <Warning />, path: "/perigo" },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        background: "linear-gradient(180deg, #0D47A1 0%, #1565C0 100%)",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
          px: 2,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#2196F3",
            width: 72,
            height: 72,
            mb: 2,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Coronavirus sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "center" }}>
          Sistema de Vacinas
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.8, mt: 0.5 }}>
          Informação e Saúde
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", my: 2 }} />

      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => router.push(item.path)}
              sx={{
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  transform: "translateX(8px)",
                },
                py: 1.5,
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          p: 2,
          background: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="caption" sx={{ opacity: 0.7, display: "block" }}>
          Versão 1.0.0
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          © 2025 Sistema de Vacinas
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, #0D47A1 0%, #1976D2 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                mr: 2,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  transform: "rotate(90deg)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Coronavirus sx={{ mr: 2, fontSize: 32 }} />

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: 0.5,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#B3E5FC",
                  transform: "scale(1.02)",
                },
              }}
              onClick={() => router.push("/")}
            >
              Portal de Vacinas
            </Typography>

            <FormControlLabel
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange}
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#B3E5FC",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#4FC3F7",
                    },
                  }}
                />
              }
              label={
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {auth ? "Online" : "Offline"}
                </Typography>
              }
              sx={{ mr: 2 }}
            />

            {auth && (
              <Tooltip title="Perfil do Usuário" arrow>
                <IconButton
                  size="large"
                  onClick={handleMenu}
                  color="inherit"
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.2)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
            )}

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  borderRadius: 2,
                  minWidth: 180,
                  boxShadow: "0 4px 20px rgba(13, 71, 161, 0.2)",
                },
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  "&:hover": {
                    bgcolor: "#E3F2FD",
                  },
                }}
              >
                Meu Perfil
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  "&:hover": {
                    bgcolor: "#E3F2FD",
                  },
                }}
              >
                Configurações
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleClose();
                  setAuth(false);
                }}
                sx={{
                  color: "#D32F2F",
                  "&:hover": {
                    bgcolor: "#FFEBEE",
                  },
                }}
              >
                Sair
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </Box>
  );
}