import { Box, Grid } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import reactImg from '../assets/Images/skills/react.png'
import mongodbImg from '../assets/Images/skills/mongodb.png'
import expressImg from '../assets/Images/skills/express.png'
import nodejsImg from '../assets/Images/skills/nodejs.png'
import javaImg from '../assets/Images/skills/java.png'
import sqlImg from '../assets/Images/skills/mysql.png'
import gitImg from '../assets/Images/skills/git.png'
import jQueryImg from '../assets/Images/skills/jquery.png'
import ProjectsImg from '../assets/Images/Projects.png'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const ProjectCarousel = () => {

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

    const skillsData = [
        {
            url: mongodbImg,
            title: "MongoDB"
        },
        {
            url: expressImg,
            title: "Express Js"
        },
        {
            url: reactImg,
            title: "React Js"
        },
        {
            url: nodejsImg,
            title: "Node Js"
        },
        {
            url: javaImg,
            title: "Java"
        },
        {
            url: sqlImg,
            title: "MySql"
        },
        {
            url: gitImg,
            title: "Git"
        },
        {
            url: jQueryImg,
            title: "Jquery"
        }
    ]
    return (
        <Box >
            <Grid p={2} direction={["column", "row"]} container >


                <Grid justifyContent={"center"} container lg={4}>
                    <Box >
                        <img style={{ width: "70%", margin: "auto", display: "block   " }} src={ProjectsImg} alt="" />
                        <h1 style={{ color: "white", textAlign: "center" }}>Projects</h1>
                    </Box>
                </Grid>
                <Grid py={[1, 9]} px={[1, 2]} sx={{ width: "100%", backgroundColor: "rgba(0,0,0,0.3)" }} lg={8}>
                    <Link to={"/skills"} className='btnShowAll'>Show All</Link>
                    <Carousel showDots={false} responsive={responsive}>
                        {
                            skillsData.map(data => (
                                <Card sx={{ maxWidth: { xs: 350, lg: 300 } }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image="https://cdn.dribbble.com/users/389208/screenshots/13754501/media/76847e4a8e268e8fc7f666c198f40cbe.jpg?resize=400x0"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{ color: "tomato" }}>
                                            Share
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))
                        }
                    </Carousel>
                </Grid>
            </Grid>

        </Box>
    )
}

export default ProjectCarousel
