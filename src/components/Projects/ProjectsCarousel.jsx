import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectsImg from "../../assets/Images/Projects.png";
import ChatAppImg from "../../assets/Images/Projects/ChatApp.png";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { projectData } from "../data";
import { truncateDescription } from "../../Custom/custom";
import { ThemeContext } from "../theme";
import axios from "axios";

const ProjectCarousel = () => {
  const [project, setProject] = useState();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
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
      items: 1,
    },
  };

  const getProject = async () => {
    const res = await axios.get("http://localhost:3000/api/project");
    setProject(res.data);
    console.log(res.data);
  };
  console.log(projectData);

  useEffect(() => {
    getProject();
  }, []);

  const { isDarkMode } = useContext(ThemeContext);
  let delayTime = 100;
  return (
    <Box mt={15}>
      <Grid p={2} direction={["column", "row"]} container>
        <Grid data-aos="fade-right" justifyContent={"center"} container lg={4}>
          <Box>
            <img
              style={{ width: "70%", margin: "auto", display: "block   " }}
              src={ProjectsImg}
              alt=""
            />
            <h1 style={{ color: "secondary.main", textAlign: "center" }}>
              Projects
            </h1>
          </Box>
        </Grid>
        <Grid
          data-aos="fade-left"
          py={[1, 9]}
          px={[1, 2]}
          sx={{ width: "100%", backgroundColor: "rgba" }}
          lg={8}
        >
          <Link
            style={{
              color: isDarkMode ? "darkgray" : "black",
              textAlign: "end",
            }}
            to={"/h2/project/all"}
            className="btnShowAll"
          >
            Show All
          </Link>
          <Carousel showDots={false} responsive={responsive}>
            {projectData?.map((data, index) => (
              <Card
                data-aos="fade-down"
                data-aos-delay={(delayTime += 100)}
                key={index}
                sx={{
                  maxWidth: { xs: 350, lg: 300 },
                  bgcolor: "rgba",
                  color: "lightgray",
                  border: "0.5px solid darkGray",
                }}
              >
                <CardActionArea
                  component={Link}
                  to={`/h2/project/${data.name}`}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={data.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      color={"secondary.main"}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      margin={"auto"}
                      color="ternary.main"
                    >
                      {truncateDescription(data.description, 180)}
                    </Typography>
                    <li></li>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <p
                    to={`/h2/project/${data.name}`}
                    style={{ textDecoration: "none", color: "tomato" }}
                    size="small"
                  >
                    Read More
                  </p>
                </CardActions>
              </Card>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCarousel;
