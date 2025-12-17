import { Box, Grid } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillIcon from "../../assets/Images/SkillsIcon.png";
import { Link } from "react-router-dom";
import { skillsData } from "../data";
import SkillsDialog from "./SkillsDialog";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  let delayTime = 100;
  return (
    <Box mt={15}>
      <Grid p={2} direction={["column-reverse", "row"]} container>
        <Grid
          data-aos="fade-right"
          py={[1, 9]}
          px={[1, 2]}
          sx={{ width: "100%", backgroundColor: "rgba" }}
          lg={8}
        >
          <div className="btnShowAll">
            <SkillsDialog />
          </div>
          <Carousel showDots={false} responsive={responsive}>
            {skillsData.map((data) => {
              delayTime += 100;
              return (
                <Box
                  data-aos="slide-down"
                  data-aos-delay={delayTime}
                  key={data.url}
                  my={0.5}
                  sx={{ border: "1px solid gray", backgroundColor: "primary.main" }}
                  height={["100px", "150px"]}
                  width={["95px", "150px"]}
                >
                  <img
                    title={data.title}
                    width={"100%"}
                    src={data.url}
                    alt=""
                  />
                </Box>
              );
            })}
          </Carousel>
        </Grid>
        <Grid data-aos="fade-left" justifyContent={"center"} container lg={4}>
          <Box width={["70%", "100%"]}>
            <img
              style={{ width: "50%", margin: "auto", display: "block   " }}
              src={SkillIcon}
              alt=""
            />
            <h1 style={{ color: "secondary.main", textAlign: "center" }}>Skills</h1>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
