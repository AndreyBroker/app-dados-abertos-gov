import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        my: 8,
        px: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
        Dados Abertos Governamentais Simplificados
      </Typography>

      <Typography variant="h6" color="text.secondary" paragraph>
        Explore dados públicos em formato XML de forma clara, organizada e visual.
        Entenda facilmente as informações para tomar decisões, estudos ou projetos.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        sx={{ my: 4 }}
      >
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/cnes"
          color="primary"
        >
          Ver Dados
        </Button>
        <Button
          variant="outlined"
          size="large"
          component={Link}
          to="/sobre"
          color="primary"
        >
          Saiba Mais
        </Button>
      </Stack>

      <Box sx={{ mt: 6 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Por que usar nossa plataforma?
        </Typography>
        <Typography variant="body1" paragraph>
          • Dados complexos transformados em visualizações fáceis de entender.<br />
          • Transparência e acesso direto à informação pública.<br />
          • Ferramenta ideal para pesquisadores, estudantes, jornalistas e cidadãos.<br />
          • Aplicação leve, rápida e responsiva, para usar em qualquer dispositivo.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
