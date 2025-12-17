import { Box } from "@mui/system";
import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Button, Chip, Divider, Grid, IconButton, Stack } from "@mui/material";
import { projectData } from "../data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowBack, Backspace } from "@mui/icons-material";
import { ThemeContext } from "../theme";

const ProjectDetails = () => {
  const { name } = useParams();
  const { isDarkMode } = useContext(ThemeContext);

  let filterProject = projectData;
  if (projectData.some((p) => p.name === name)) {
    console.log("true");
    filterProject = projectData.filter((p) => p.name == name);
  }

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 2,
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Divider
        sx={{
          "&::before, &::after": {
            borderColor: "darkgray",
          },
        }}
      >
        <Typography fontSize={["20px", "30px"]} color="secondary">
          Projects
        </Typography>
      </Divider>
      <IconButton
        onClick={() => {
          navigate(-1), navigate("../");
        }}
      >
        <ArrowBack />
      </IconButton>
      <Grid container>
        {filterProject.map((data, index) => (
          <React.Fragment key={index}>
            <Grid p={3} item lg={5}>
              <img width={"100%"} src={data.img} alt="" />
            </Grid>

            <Grid
              container
              rowGap={2}
              direction={"column"}
              color={"ternary.main"}
              p={3}
              item
              lg={6.5}
            >
              <Grid color={"secondary.main"} fontSize={["25px"]}>
                {data.name}
              </Grid>
              <Grid fontSize={["15px", "16px"]}>{data.description}</Grid>
              <Grid fontSize={["12px", "14px"]}>
                {data.keyPoints.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </Grid>
              <Grid>
                <Stack direction="row" spacing={1}>
                  {data.technologies.map((item, index) => (
                    <Chip label={item} />
                  ))}
                </Stack>
              </Grid>
              <Grid>
                <Button variant="outlined" color="secondary">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: isDarkMode ? "darkGray" : "black",
                    }}
                    to={data.demoLink}
                    target="_blank"
                  >
                    Live Preview
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectDetails;
