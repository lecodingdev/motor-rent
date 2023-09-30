/* eslint-disable react/prop-types */
import { Box, styled, Typography } from "@mui/material";

const Motor = ({ img, price, }) => {
  const MotorBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    maxWidth: 350,
    backgroundColor: "#fff",
    boxShadow: "0 10px 20px 0 rgba(0,0,0,.1);",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));


  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <MotorBox>
      <ImgContainer>
        <img src={img} alt="motorPhoto" style={{ maxWidth: "100%" }} />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          Rp {price}/day
        </Typography>
      </Box>
    </MotorBox>
  );
};

export default Motor;