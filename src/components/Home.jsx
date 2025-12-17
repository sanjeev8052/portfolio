import { Box, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import instagramIcon from "../assets/Images/instagram-logo.png";
import githubIcon from "../assets/Images/github-logo.png";
import linkedinIcon from "../assets/Images/linkedin-logo.png";
import facebookIcon from "../assets/Images/facebook-logo.png";
import ProfileImage from "../assets/Images/Profile.jpg";
import Educations from "./Education/Educations";
import Skills from "./Skills/Skills";
import ProjectCarousel from "./Projects/ProjectsCarousel";
import Footer from "./Layout/Footer";

const Home = () => {
  return (
    <>
      <Stack bgcolor={"primary.main"} rowGap={5} className="Home">
        <Grid id="Home" container>
          <Grid
            sx={{ fontSize: { xs: "12px", lg: "18px" } }}
            container
            direction={"column"}
            lg={6}
            p={[3, 20]}
          >
            <h1>Hello, guys</h1>
            <h1>
              {" "}
              My name is <i>Sanjeev Gaund</i>
            </h1>

            <h1>
              I am a <i>FullStack Developer</i>{" "}
            </h1>
            <Stack columnGap={2} mt={3} direction={"row"}>
              <a
                target="_blank"
                title="Link"
                href="http://linkedin.com/in/thesanjeev"
              >
                <img width={40} height={40} src={linkedinIcon} alt="" />
              </a>

              <a target="_blank" href="http://github.com/sanjeev8052">
                <img
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                  width={40}
                  height={40}
                  src={githubIcon}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/san.1eev/">
                <img width={40} height={40} src={instagramIcon} alt="" />
              </a>
              <a target="_blank" href="http://linkedin.com/in/thesanjeev">
                <img width={40} height={40} src={facebookIcon} alt="" />
              </a>
            </Stack>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            lg={6}
            p={5}
          >
            <Box bgcolor={"tomato"} p={"2px"}>
              <img src={ProfileImage} width={"300px"} alt="" />
            </Box>
          </Grid>
        </Grid>
        <Box id="Education">
          <Educations />
        </Box>
        <Box id="Skills">
          <Skills />
        </Box>
        <Box id="Projects">
          <ProjectCarousel />
        </Box>
        <Box mt={6}>
          <Footer />
        </Box>
      </Stack>
    </>
  );
};

export default Home;
