/* eslint-disable react/prop-types */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
  styled,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import MopedIcon from "@mui/icons-material/Moped";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function BookMotor({
  motorType,
  handleMotor,
  pickUp,
  handlePick,
  dropOff,
  handleDrop,
  pickTime,
  handlePickTime,
  dropTime,
  handleDropTime,
  openModal,
}) {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E0E0E0",
    boxShadow: "0 10px 20px 0 rgba(0,0,0,.1);",
    padding: "20px",
    gap: theme.spacing(5),
    marginTop: theme.spacing(2),
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
    margin: theme.spacing(4, 0, 0, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (
    <Box
      sx={{
        backgroundColor: "#F5FAFE",
        minHeight: "80vh",
        paddingTop: "150px",
      }}
      className="box-form"
    >
      <Container>
        <Title>Book a motor</Title>
        <CustomBox sx={{ padding: "40px"}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel style={{ display: "flex", alignItems: "center" }}>
                  <MopedIcon className="input-icon" /> &nbsp; Motor type{" "}
                </InputLabel>
                <Select value={motorType} onChange={handleMotor}>
                  <MenuItem value="Honda Beat">Honda Beat</MenuItem>
                  <MenuItem value="Honda Vario 125">Honda Vario 125</MenuItem>
                  <MenuItem value="Honda Scoopy">Honda Scoopy</MenuItem>
                  <MenuItem value="Honda PCX">Honda PCX</MenuItem>
                  <MenuItem value="Yamaha Fazzio">Yamaha Fazzio</MenuItem>
                  <MenuItem value="Yamaha NMAX">Yamaha NMAX</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel style={{ display: "flex", alignItems: "center" }}>
                  <FmdGoodIcon className="input-icon" /> &nbsp; Pick-up
                </InputLabel>
                <Select value={pickUp} onChange={handlePick}>
                  <MenuItem value="Tugu St">Tugu St</MenuItem>
                  <MenuItem value="Lempuyangan St">Lempuyangan St</MenuItem>
                  <MenuItem value="Barsa City">Barsa City</MenuItem>
                  <MenuItem value="Jombor">Jombor</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel style={{ display: "flex", alignItems: "center" }}>
                  <FmdGoodIcon className="input-icon" /> &nbsp; Drop-off
                </InputLabel>
                <Select value={dropOff} onChange={handleDrop}>
                  <MenuItem value="Tugu St">Tugu St</MenuItem>
                  <MenuItem value="Lempuyangan St">Lempuyangan St</MenuItem>
                  <MenuItem value="Barsa City">Barsa City</MenuItem>
                  <MenuItem value="Jombor">Jombor</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel
                  style={{ display: "flex", alignItems: "center" }}
                ></InputLabel>
                <TextField
                  id="picktime"
                  value={pickTime}
                  onChange={handlePickTime}
                  type="date"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel
                  style={{ display: "flex", alignItems: "center" }}
                ></InputLabel>
                <TextField
                  id="droptime"
                  value={dropTime}
                  onChange={handleDropTime}
                  type="date"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <Button onClick={openModal} type="submit" variant="outlined" style={{ height: "100%", width: "100%" }}>
                Search
              </Button>
              
            </Grid>
          </Grid>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default BookMotor;
