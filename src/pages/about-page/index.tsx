import { Box, Typography, Paper, Link } from "@mui/material";

const AboutPage = () => {
  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "40px auto",
        padding: 3,
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
          Sobre Nossa Aplicação
        </Typography>

        <Typography variant="body1" paragraph>
          Nossa plataforma tem como objetivo principal tornar os dados abertos em formato XML disponibilizados pelo governo mais acessíveis e úteis para todos.
          Entendemos que, muitas vezes, esses dados são complexos, volumosos e difíceis de interpretar diretamente.
        </Typography>

        <Typography variant="body1" paragraph>
          Por isso, criamos uma solução que simplifica, organiza e apresenta esses dados de maneira clara, amigável e visualmente atrativa.
          Com isso, qualquer pessoa, seja profissional, estudante ou cidadão interessado, pode navegar, analisar e extrair informações relevantes de forma rápida e intuitiva.
        </Typography>

        <Typography variant="body1" paragraph>
          Além disso, nossa aplicação facilita a transparência, permitindo que a sociedade acompanhe e utilize informações públicas para gerar impacto social positivo.
          Queremos contribuir para uma cultura de dados abertos mais eficiente e acessível no Brasil.
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Desenvolvido com React, Typescript e hospedado de forma moderna para garantir a melhor experiência e desempenho.
        </Typography>

        <Box sx={{ mt: 5, borderTop: "1px solid #ccc", pt: 2, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Desenvolvido por{" "}
            <Link href="https://www.linkedin.com/in/andrey-broker/" target="_blank" rel="noopener noreferrer" underline="hover">
              Andrey Broker
            </Link>{" "}
            e{" "}
            <Link href="https://www.linkedin.com/in/pietra-schwalbert/" target="_blank" rel="noopener noreferrer" underline="hover">
              Pietra Schwalbert
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutPage;
