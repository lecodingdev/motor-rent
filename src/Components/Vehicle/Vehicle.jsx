import { Box, Container, styled, Typography } from "@mui/material";
import CustomButton from "../CustomButton";
import Motor from "./Motor";
import { vehicles } from "./Vehicles";

const Vehicle = () => {
  const VehiclesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Featured Vehicle
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Everything you need to know when looking for a new motor!
          </Typography>
        </PropertiesTextBox>

        <VehiclesBox>
          {vehicles.map((vehicle) => (
            <Motor key={vehicle.id} img={vehicle.img} price={vehicle.price} />
          ))}
        </VehiclesBox>

        <Box sx={{mt: "30px", mr: "15px", display: "flex", justifyContent: "end"}}>
          <CustomButton
            backgroundColor="#0F184C"
            color="#fff"
            buttonText="More Vehicles"
            heroBtn={true}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Vehicle;
