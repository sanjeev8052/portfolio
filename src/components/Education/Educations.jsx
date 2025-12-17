import React from "react";
import GraduationCap from "../../assets/Images/Cap.png";
import JPDawerImage from "../../assets/Images/JPDawer.jpg";
import CBPatel from "../../assets/Images/CBPatel.jpg";
import { Box, Grid, Stack, Button, Typography, Paper } from "@mui/material";

const Educations = () => {
  return (
    <Box mt={10}>
      <Grid color={"darkgray"} container>
        <Grid data-aos="fade-right" item lg={4} container alignItems={"center"}>
          <Box>
            <img
              style={{ display: "block", margin: "auto" }}
              src={GraduationCap}
              width={"50%"}
              alt=""
            />
            <Typography
              fontWeight={900}
              color={"secondary.main"}
              fontSize={["30px"]}
              align={"center"}
            >
              Education
            </Typography>
          </Box>
        </Grid>
        <Grid item color={"secondary.main"} container rowGap={2} lg={8} p={2}>
          <Grid
            data-aos="fade-left"
            data-aos-delay="100"
            item
            container
            lg={12}
          >
            <Grid item lg={4}>
             
                <img style={{  boxShadow:"0px 0px 5px black " }} src={JPDawerImage} width={"100%"} alt="" />
            
            </Grid>
            <Grid item p={2} lg={7}>
              <h3>J.P.Dawer institute of Information Science and Technology</h3>
              <p>
                Master Of Science (Information And Communication Technology )
                [M.Sc. (I.C.T.)]
              </p>
              <br />
              <p>Pursing</p>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={12}>
            <hr />
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-delay="200"
            item
            container
            lg={12}
          >
            <Grid item lg={4}>
              <img
                style={{  boxShadow:"0px 0px 5px black" }}
                src={CBPatel}
                width={"100%"}
                alt=""
              />
            </Grid>
            <Grid item p={2} lg={7}>
              <h3>C B Patel Computer College</h3>
              <p>Bachelor Of Computer Application (B.C.A.) </p>
              <br />
              <p>Jul 2019 - Feb 2023</p>
              <p>CGPA : 8.17</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Educations;
