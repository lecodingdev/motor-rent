import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import heroImg from "../assets/hero.png";
import Navbar from "./Navbar";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh", pb: "40px" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Helo Motor Rent
            </Typography>
            <Title variant="h1">
              Discover a place where you can rent a motor.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Be the first to get the best deals! Hot deals with one simple search!
            </Typography>
            <CustomButton
              backgroundColor="#0F184C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt=""
              style={{ maxWidth: "100%", marginTop: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};
export default Hero;
