import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: theme.spacing(20),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: theme.spacing(10),
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (
    <Box
      sx={{
        minHeight: "80vh",
        paddingTop: "40px",
      }}
    >
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
              }}
            >
              Plan your trip now
            </Typography>
            <Title variant="h1">Quick & easy motor rental.</Title>
          </Box>
        </CustomBox>

        <CustomBox sx={{ marginTop: "40px"}}>
          <Box>
            <TwoWheelerIcon sx={{ fontSize: 60, marginBottom: "5px" }} />
            <Typography sx={{fontSize: "22px"}}>Select Motor</Typography>
            <Typography>We offers a vechicles for all your driving needs</Typography>
          </Box>
          <Box>
            <CurrencyExchangeIcon sx={{ fontSize: 60, marginBottom: "5px" }} color="success" />
            <Typography sx={{fontSize: "22px"}}>Free Deposit</Typography>
            <Typography>No deposit needed</Typography>
          </Box>
          <Box>
            <SupportAgentIcon sx={{ fontSize: 60, marginBottom: "5px" }} />
            <Typography sx={{fontSize: "22px"}}>Contact Operator</Typography>
            <Typography>Our friendly operators are always ready to help</Typography>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};
export default About;
